import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { getRecipesForProduct } from "@/data/recipes";
import { up } from "@/lib/assets";
import { site } from "@/data/site";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { RecipeCard } from "@/components/cards/RecipeCard";
import styles from "@/components/sections/ProductDetail.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.fullName,
    description: product.description,
    openGraph: {
      title: `${product.fullName} - The Mainstays`,
      description: product.description,
      images: [up(product.image)],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedRecipes = getRecipesForProduct(product.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.fullName,
    description: product.description,
    image: up(product.image),
    brand: { "@type": "Brand", name: site.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="block light">
        <div className="block-inner">
          <div className={styles.hero}>
            <div className={styles.media}>
              <Image
                src={up(product.image)}
                alt={product.fullName}
                width={640}
                height={798}
                priority
                sizes="(min-width: 64rem) 45vw, 90vw"
              />
            </div>

            <div className={styles.intro}>
              <h1>{product.fullName}</h1>
              <h2 className={styles.tagline}>{product.description}</h2>

              <ul className={styles.tags}>
                {product.tasteTags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              <ul className={styles.ingredients}>
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient.name} className={styles.ingredient}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={up(ingredient.icon)}
                      alt=""
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                    <h4>{ingredient.name}</h4>
                  </li>
                ))}
              </ul>

              <div className="text-component_buttons">
                <Button href="/find-us">Find this product</Button>
              </div>

              <Accordion title="Ingredients & nutrition facts">
                <p>
                  {product.ingredientsList ??
                    `Made in BC with thoughtfully-sourced ingredients, including ${product.ingredients
                      .map((ingredient) => ingredient.name.toLowerCase())
                      .join(", ")}. All natural, plant based, no artificial colour.`}
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {product.howToUse ? (
        <section className="block light">
          <div className={`block-inner ${styles.howTo}`}>
            <h2>How to use</h2>
            <p>{product.howToUse}</p>
            <ul className={styles.pairings}>
              {product.pairings.map((pairing) => (
                <li key={pairing.action} className={styles.pairing}>
                  <h5>{pairing.action}</h5>
                  <p>{pairing.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {relatedRecipes.length > 0 ? (
        <section className="block light">
          <div className={`block-inner ${styles.related}`}>
            <h2>Recipes</h2>
            <ul className={styles.relatedGrid}>
              {relatedRecipes.map((recipe) => (
                <li key={recipe.slug}>
                  <RecipeCard recipe={recipe} sizes="(min-width: 48rem) 30vw, 80vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
