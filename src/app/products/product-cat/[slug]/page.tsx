import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  getProductsByCategory,
  productCategories,
} from "@/data/products";
import { ProductArchive } from "@/components/sections/ProductArchive";

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Archive`,
    description: `Browse Mainstays ${category.name.toLowerCase()}.`,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <section className="block light">
      <div className="block-inner">
        <ProductArchive
          products={getProductsByCategory(slug)}
          activeCategory={slug}
        />
      </div>
    </section>
  );
}
