import type { MetadataRoute } from "next";
import { productCategories, products } from "@/data/products";
import { recipes } from "@/data/recipes";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/recipes",
    "/find-us",
    "/wholesale-inquiry",
    "/contact-us",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}/`,
      lastModified: new Date(),
      priority: route === "" ? 1 : 0.8,
    })),
    ...productCategories.map((category) => ({
      url: `${site.url}/products/product-cat/${category.slug}/`,
      lastModified: new Date(),
      priority: 0.6,
    })),
    ...products.map((product) => ({
      url: `${site.url}/products/${product.slug}/`,
      lastModified: new Date(),
      priority: 0.7,
    })),
    ...recipes.map((recipe) => ({
      url: `${site.url}/recipes/${recipe.slug}/`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
