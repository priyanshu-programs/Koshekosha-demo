import type { Metadata } from "next";
import { PRODUCTS_PER_PAGE, paginate, products } from "@/data/products";
import { ProductArchive } from "@/components/sections/ProductArchive";

export const metadata: Metadata = {
  title: "Products Archive",
  description:
    "Browse the full range of Mainstays pantry staples: relishes, cranberry sauces, chutneys, pickles and horseradish.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const current = Number(page) || 1;
  const result = paginate(products, current, PRODUCTS_PER_PAGE);

  return (
    <section className="block light">
      <div className="block-inner">
        <ProductArchive
          products={result.items}
          nextHref={
            result.hasNext ? `/products?page=${result.page + 1}` : undefined
          }
        />
      </div>
    </section>
  );
}
