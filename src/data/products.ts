import type { Product, ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  { slug: "gravies", name: "Gravies" },
];

/**
 * Koshe Kosha Gravies — Ready-to-cook paste products.
 * All five are featured on the homepage carousel.
 */
export const products: Product[] = [
  {
    slug: "kosha-mangsho",
    name: "Kosha Mangsho",
    fullName: "Kosha Mangsho Ready-to-Cook Paste",
    description:
      "An icon of Bengali kitchens. Mutton slow-cooked till the gravy turns dark, rich, and unforgettable.",
    color: "#c41e1e",
    image: "/images/dishes/kosha-mangsho.webp",
    categories: ["gravies"],
    tasteTags: ["Rich", "Bold", "Aromatic"],
    ingredients: [],
    pairings: [],
    featured: true,
  },
  {
    slug: "malaikari",
    name: "Malaikari",
    fullName: "Malaikari Ready-to-Cook Paste",
    description:
      "Creamy, coconut-rich, and deeply comforting. A Bengali classic that pairs perfectly with prawns or fish.",
    color: "#d4621a",
    image: "/images/dishes/malaikari.webp",
    categories: ["gravies"],
    tasteTags: ["Creamy", "Rich", "Coconut"],
    ingredients: [],
    pairings: [],
    featured: true,
  },
  {
    slug: "dalna",
    name: "Dalna",
    fullName: "Dalna Ready-to-Cook Paste",
    description:
      "A soulful vegetable curry that marries seasonal produce with a subtle, aromatic gravy.",
    color: "#2e8bc0",
    image: "/images/dishes/dalna.webp",
    categories: ["gravies"],
    tasteTags: ["Comforting", "Aromatic", "Homely"],
    ingredients: [],
    pairings: [],
    featured: true,
  },
  {
    slug: "shorshie",
    name: "Shorshie",
    fullName: "Shorshie Ready-to-Cook Paste",
    description:
      "Sharp, pungent mustard paste that brings the unmistakable zing of Bengali fish preparations.",
    color: "#c9a227",
    image: "/images/dishes/shorshie.webp",
    categories: ["gravies"],
    tasteTags: ["Pungent", "Sharp", "Traditional"],
    ingredients: [],
    pairings: [],
    featured: true,
  },
  {
    slug: "gondhoraj",
    name: "Gondhoraj",
    fullName: "Gondhoraj Ready-to-Cook Paste",
    description:
      "Infused with the heady fragrance of Gondhoraj lebu, a citrusy Bengali lime that elevates any dish.",
    color: "#5a8f29",
    image: "/images/dishes/gondhoraj.webp",
    categories: ["gravies"],
    tasteTags: ["Citrusy", "Fragrant", "Fresh"],
    ingredients: [],
    pairings: [],
    featured: true,
  },
];

export const PRODUCTS_PER_PAGE = 12;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) =>
    product.categories.includes(category as Product["categories"][number]),
  );
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    totalPages,
    hasNext: current < totalPages,
  };
}
