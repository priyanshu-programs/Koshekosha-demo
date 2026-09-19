import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getOtherRecipes,
  getRecipeBySlug,
  recipes,
} from "@/data/recipes";
import { getProductBySlug } from "@/data/products";
import { site } from "@/data/site";
import { up } from "@/lib/assets";
import type { RecipeIngredient } from "@/types";
import { TextButton } from "@/components/ui/Button";
import { ShareRow } from "@/components/ui/ShareRow";
import { RecipeCard } from "@/components/cards/RecipeCard";
import styles from "@/components/sections/RecipeDetail.module.css";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) return {};

  return {
    title: recipe.title,
    description: recipe.description,
    openGraph: {
      title: `${recipe.title} - The Mainstays`,
      description: recipe.description,
      images: [up(recipe.image)],
    },
  };
}

/** Splits a line so the named product phrase becomes a link. */
function IngredientLine({ ingredient }: { ingredient: RecipeIngredient }) {
  if (!ingredient.productSlug || !ingredient.linkText) {
    return <>{ingredient.text}</>;
  }

  const index = ingredient.text.indexOf(ingredient.linkText);
  if (index === -1) return <>{ingredient.text}</>;

  return (
    <>
      {ingredient.text.slice(0, index)}
      <Link href={`/products/${ingredient.productSlug}`}>
        {ingredient.linkText}
      </Link>
      {ingredient.text.slice(index + ingredient.linkText.length)}
    </>
  );
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  if (!recipe) notFound();

  const product = getProductBySlug(recipe.productSlug);
  const more = getOtherRecipes(recipe.slug);
  const url = `${site.url}/recipes/${recipe.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description,
    image: up(recipe.image),
    recipeYield: recipe.serves,
    prepTime: recipe.prepTime,
    recipeIngredient: recipe.ingredients.map((item) => item.text),
    recipeInstructions: recipe.instructions.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
    author: { "@type": "Organization", name: site.name },
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
            <div className={styles.intro}>
              <h1>{recipe.title}</h1>

              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Prep</span>
                  <span className={styles.metaValue}>{recipe.prepTime}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Serves</span>
                  <span className={styles.metaValue}>{recipe.serves}</span>
                </div>
              </div>

              <p>{recipe.description}</p>

              {product ? (
                <Link
                  href={`/products/${product.slug}`}
                  className={styles.madeWith}
                >
                  <Image
                    src={up(product.image)}
                    alt={product.fullName}
                    width={160}
                    height={199}
                    sizes="4.5rem"
                  />
                  <span className={styles.madeWithText}>
                    <span className={styles.madeWithLabel}>Made with</span>
                    <h5>{product.fullName}</h5>
                    <TextButton>See the product</TextButton>
                  </span>
                </Link>
              ) : null}
            </div>

            <div className={styles.media}>
              <Image
                src={up(recipe.image)}
                alt={recipe.title}
                width={960}
                height={960}
                priority
                sizes="(min-width: 64rem) 45vw, 90vw"
              />
            </div>
          </div>

          <div className={styles.body}>
            <div>
              <h2>Ingredients</h2>
              <ul className={styles.list}>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.text}>
                    <IngredientLine ingredient={ingredient} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2>Instructions</h2>
              <ol className={`${styles.list} ${styles.steps}`}>
                {recipe.instructions.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <ShareRow url={url} title={recipe.title} image={up(recipe.image)} />
        </div>
      </section>

      {more.length > 0 ? (
        <section className="block light" data-cursor="recipe">
          <div className={`block-inner ${styles.more}`}>
            <h2>More recipes</h2>
            <ul className={styles.moreGrid}>
              {more.map((item) => (
                <li key={item.slug}>
                  <RecipeCard
                    recipe={item}
                    sizes="(min-width: 48rem) 30vw, 80vw"
                  />
                </li>
              ))}
            </ul>
            <TextButton href="/recipes">View all recipes</TextButton>
          </div>
        </section>
      ) : null}
    </>
  );
}
