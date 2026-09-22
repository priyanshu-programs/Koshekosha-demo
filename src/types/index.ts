export type ProductCategorySlug =
  | "condiments"
  | "sauces"
  | "chutneys"
  | "pickles"
  | "gravies";

export interface ProductCategory {
  slug: ProductCategorySlug;
  name: string;
}

export type ProductBadge = "New!" | "Bestseller";

export interface Ingredient {
  /** Display name, e.g. "Orange". */
  name: string;
  /** Origin-relative path to the icon SVG. */
  icon: string;
}

export interface Pairing {
  /** Imperative verb used as the heading, e.g. "Pair" / "Top". */
  action: string;
  description: string;
}

export interface Product {
  slug: string;
  /** Short display name used in cards and carousels. */
  name: string;
  /** Full name as it appears in the page <h1> and image alt text. */
  fullName: string;
  /** One-or-two sentence blurb shown under the carousel. */
  description: string;
  /** Accent color driving the carousel background. */
  color: string;
  image: string;
  categories: ProductCategorySlug[];
  badge?: ProductBadge;
  /** Flavour descriptors shown as pills on the detail page. */
  tasteTags: string[];
  ingredients: Ingredient[];
  /** Intro copy for the "How to use" section. */
  howToUse?: string;
  pairings: Pairing[];
  /** Shown in the "Ingredients & nutrition facts" accordion. */
  ingredientsList?: string;
  /** Featured in the homepage carousel subset. */
  featured?: boolean;
}

export interface RecipeIngredient {
  text: string;
  /** Optional product slug to link a phrase within the line. */
  productSlug?: string;
  /** The substring of `text` to turn into the link. */
  linkText?: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  serves: string;
  /** Slug of the product this recipe is made with. */
  productSlug: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}

export interface Review {
  name: string;
  quote: string;
  /** Background color of the review card. */
  color: string;
  productSlug: string;
  productName: string;
  productImage: string;
  /** Controls how the jar image overlaps the card. */
  mediaWidth: "narrow" | "wide";
}

export interface Stockist {
  name: string;
  logo: string;
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href: string;
}
