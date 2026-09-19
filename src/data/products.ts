import type { Product, ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  { slug: "condiments", name: "Condiments" },
  { slug: "sauces", name: "Sauces" },
  { slug: "chutneys", name: "Chutneys" },
  { slug: "pickles", name: "Pickles" },
];

/**
 * Ordered as the /products archive lists them. `featured` marks the seven
 * that appear in the homepage carousel.
 */
export const products: Product[] = [
  {
    slug: "shiraz-cranberry-sauce",
    name: "Shiraz Cranberry Sauce",
    fullName: "Shiraz Cranberry Sauce",
    description:
      "Deep, rich and just a little dramatic. A cranberry sauce with a glass of red in its past.",
    color: "#cb2821",
    image: "2025/11/Shiraz_Cranberry_Sauce.png",
    categories: ["sauces", "condiments"],
    tasteTags: ["Rich", "Bold", "Tart"],
    ingredients: [
      { name: "Cranberry", icon: "2025/11/ingredient-cranberry_orange.svg" },
      { name: "Shiraz", icon: "2025/11/ingredient-brandy_orange.svg" },
    ],
    howToUse:
      "Bold enough for the holiday table, easy enough for a Tuesday sandwich.",
    pairings: [
      { action: "Spoon", description: "over a wheel of warm brie" },
      { action: "Layer", description: "into your turkey sandwich" },
    ],
    featured: false,
  },
  {
    slug: "cabernet-sauvignon-cranberry-sauce",
    name: "Cabernet Sauvignon Cranberry Sauce",
    fullName: "Cabernet Sauvignon Cranberry Sauce",
    description:
      "Rich, tangy and dangerously goblet-worthy. Cranberries with a cabernet backbone.",
    color: "#cb2821",
    image: "2025/11/Cabernet_Sauvignon_Cranberry_Sauce.png",
    categories: ["sauces", "condiments"],
    tasteTags: ["Tangy", "Robust", "Fruity"],
    ingredients: [
      { name: "Cranberry", icon: "2025/11/ingredient-cranberry_orange.svg" },
      { name: "Cabernet", icon: "2025/11/ingredient-brandy_orange.svg" },
    ],
    howToUse:
      "A cheese board hero that moonlights as the best thing on your roast.",
    pairings: [
      { action: "Pair", description: "with aged cheddar and crackers" },
      { action: "Serve", description: "alongside roast pork or duck" },
    ],
    featured: false,
  },
  {
    slug: "orange-brandy-cranberry-sauce",
    name: "Orange Brandy Cranberry Sauce",
    fullName: "Orange Brandy Cranberry Sauce",
    description:
      "Boozy, bold, and ready to steal the show. Some flavours are too good to save for special occasions.",
    color: "#eb5c2e",
    image: "2025/11/Orange_Brandy_Cranberry_Sauce.png",
    categories: ["sauces", "condiments"],
    tasteTags: ["Citrusy", "Vibrant", "Tart"],
    ingredients: [
      { name: "Orange", icon: "2025/11/ingredient-orange_orange.svg" },
      { name: "Brandy", icon: "2025/11/ingredient-brandy_orange.svg" },
      { name: "Cranberry", icon: "2025/11/ingredient-cranberry_orange.svg" },
    ],
    howToUse:
      "Bright orange and warm brandy notes make it perfect for meats, cheese, or creative desserts.",
    pairings: [
      {
        action: "Pair",
        description: "with Havarti for a gourmet grilled cheese",
      },
      { action: "Top", description: "cheesecake, need we say more?" },
    ],
    featured: true,
  },
  {
    slug: "cool-mint-sauce",
    name: "Cool Mint Sauce",
    fullName: "Cool Mint Sauce",
    description:
      "Fresh, bright, and classic for a reason. This sauce brings a burst of garden-fresh flavour to any dish.",
    color: "#1f4920",
    image: "2025/11/Cool_Mint_Sauce.png",
    categories: ["sauces", "condiments"],
    tasteTags: ["Fresh", "Bright", "Herbal"],
    ingredients: [
      { name: "Mint", icon: "2025/11/ingredient-mint_mint.svg" },
      {
        name: "Apple Cider Vinegar",
        icon: "2025/11/ingredient-apple-cider-vinegar_mint.svg",
      },
      { name: "Lemon", icon: "2025/11/ingredient-lemon_mint.svg" },
    ],
    howToUse:
      "Garden-fresh mint cuts through anything rich, roasted or grilled.",
    pairings: [
      { action: "Drizzle", description: "over roast lamb" },
      { action: "Stir", description: "through new potatoes and peas" },
    ],
    featured: true,
  },
  {
    slug: "classic-relish",
    name: "Classic Relish",
    fullName: "Green Relish",
    description: "The OG.\nA classic that always hits.",
    color: "#1f4920",
    image: "2026/02/Classic-Relish-1.png",
    categories: ["condiments", "pickles"],
    badge: "New!",
    tasteTags: ["Crunchy", "Tangy", "Classic"],
    ingredients: [
      { name: "Cucumber", icon: "2026/02/green-cucumber_104x104.svg" },
      { name: "Spices", icon: "2026/02/green-spices_104x104.svg" },
      { name: "Vinegar", icon: "2026/02/green-vinegar_104x104.svg" },
    ],
    howToUse: "The one your hot dog has been waiting for.",
    pairings: [
      { action: "Pile", description: "onto hot dogs and brats" },
      { action: "Fold", description: "into egg or potato salad" },
    ],
    featured: true,
  },
  {
    slug: "red-relish",
    name: "Red Relish",
    fullName: "Red Relish",
    description: "Allow us to introduce you to your burger's new best friend.",
    color: "#eb5c2e",
    image: "2026/02/Red-Relish-1.png",
    categories: ["condiments", "pickles"],
    badge: "Bestseller",
    tasteTags: ["Sweet", "Smoky", "Bold"],
    ingredients: [
      { name: "Bell Pepper", icon: "2026/02/orange-bell-pepper.png" },
      { name: "Vinegar", icon: "2026/02/orange-vinegar.png" },
      { name: "Spices", icon: "2026/02/spices_104x104.svg" },
    ],
    howToUse: "Sweet peppers and a gentle smoulder — built for the grill.",
    pairings: [
      { action: "Stack", description: "on a smash burger" },
      { action: "Swirl", description: "into mayo for an instant burger sauce" },
    ],
    featured: true,
  },
  {
    slug: "peach-apricot-chutney",
    name: "Peach & Apricot Chutney",
    fullName: "Peach and Apricot Chutney",
    description:
      "Smooth, sunny and just the right amount of sweet. A taste of summer in a bite.",
    color: "#ee7700",
    image: "2025/11/Peach_and_Apricot_Chutney.png",
    categories: ["chutneys", "condiments"],
    tasteTags: ["Sunny", "Sweet", "Mellow"],
    ingredients: [
      { name: "Peach", icon: "2025/11/ingredient-peach_apricot.svg" },
      { name: "Apricot", icon: "2025/11/ingredient-apricot_apricot.svg" },
    ],
    howToUse:
      "Summer stone fruit that turns a cheese board into a whole event.",
    pairings: [
      { action: "Spoon", description: "over baked brie" },
      { action: "Glaze", description: "roast chicken in the last ten minutes" },
    ],
    featured: true,
  },
  {
    slug: "sweet-heat-peach-apricot-chutney",
    name: "Sweet Heat Peach & Apricot Chutney",
    fullName: "Sweet Heat Peach and Apricot Chutney",
    description: "Exactly that — the perfect combo of sweet and spicy.",
    color: "#3f3226",
    image: "2025/11/Sweet_Heat_Peach_and_Apricot_Chutney.png",
    categories: ["chutneys", "condiments"],
    tasteTags: ["Sweet", "Spicy", "Warm"],
    ingredients: [
      { name: "Peach", icon: "2025/11/ingredient-peach_apricot.svg" },
      { name: "Apricot", icon: "2025/11/ingredient-apricot_apricot.svg" },
    ],
    howToUse: "All the sunshine of the original, with a slow-building heat.",
    pairings: [
      { action: "Serve", description: "with sharp cheddar and cured meats" },
      { action: "Spread", description: "on a turkey club for a kick" },
    ],
    featured: false,
  },
  {
    slug: "garlic-dill-pickled-beans",
    name: "Garlic & Dill Pickled Beans",
    fullName: "Garlic and Dill Pickled Beans",
    description:
      "These beans are the real dill! Packed with garlic and dill for a tangy kick and satisfying snap.",
    color: "#3b8a32",
    image: "2025/12/Garlic_and_Dill_Pickled_Beans_v2.png",
    categories: ["pickles"],
    tasteTags: ["Tangy", "Garlicky", "Snappy"],
    ingredients: [
      { name: "Garlic", icon: "2025/11/ingredient-garlic_dill.svg" },
      { name: "Dill", icon: "2025/11/ingredient-dill_dill.svg" },
    ],
    howToUse:
      "Caesars, salads or subs — this bean is giving main character energy.",
    pairings: [
      { action: "Garnish", description: "the boldest caesar on the patio" },
      { action: "Snack", description: "straight from the jar, no judgement" },
    ],
    featured: true,
  },
  {
    slug: "pickled-asparagus-with-garlic",
    name: "Pickled Asparagus with Garlic",
    fullName: "Pickled Asparagus with Garlic",
    description:
      "Crisp spears with a garlicky bite. The upgrade your cheese board did not know it needed.",
    color: "#3b8a32",
    image: "2025/12/Garlic_and_Dill_Pickled_Beans_v2.png",
    categories: ["pickles"],
    badge: "New!",
    tasteTags: ["Crisp", "Garlicky", "Bright"],
    ingredients: [
      { name: "Asparagus", icon: "2025/11/ingredient-dill_dill.svg" },
      { name: "Garlic", icon: "2025/11/ingredient-garlic_dill.svg" },
    ],
    howToUse: "A crisp spear that makes everything look more considered.",
    pairings: [
      { action: "Lay", description: "across an antipasto platter" },
      { action: "Wrap", description: "in prosciutto for an easy appetizer" },
    ],
    featured: false,
  },
  {
    slug: "spicy-pickled-asparagus",
    name: "Spicy Pickled Asparagus",
    fullName: "Spicy Pickled Asparagus",
    description:
      "Crisp spears with a slow, satisfying burn. Not for the faint of heart.",
    color: "#4e65c3",
    image: "2025/12/Extra_Hot_Horseradish_v2.png",
    categories: ["pickles"],
    badge: "New!",
    tasteTags: ["Spicy", "Crisp", "Punchy"],
    ingredients: [
      { name: "Asparagus", icon: "2025/11/ingredient-dill_dill.svg" },
      { name: "Chili", icon: "2026/02/spices_104x104.svg" },
    ],
    howToUse: "Heat-seekers, this spear is for you.",
    pairings: [
      { action: "Spike", description: "a bloody mary or caesar" },
      { action: "Chop", description: "into a grain bowl for a lift" },
    ],
    featured: false,
  },
  {
    slug: "spicy-pickled-beans",
    name: "Spicy Pickled Beans",
    fullName: "Spicy Pickled Beans",
    description:
      "The bean you know, turned all the way up. Tangy, crunchy and seriously spicy.",
    color: "#3b8a32",
    image: "2025/12/Garlic_and_Dill_Pickled_Beans_v2.png",
    categories: ["pickles"],
    tasteTags: ["Spicy", "Tangy", "Crunchy"],
    ingredients: [
      { name: "Green Bean", icon: "2025/11/ingredient-dill_dill.svg" },
      { name: "Chili", icon: "2026/02/spices_104x104.svg" },
    ],
    howToUse:
      "The spicy beans and extra hot horseradish are a caesar's dream team.",
    pairings: [
      { action: "Stir", description: "into a caesar with horseradish" },
      { action: "Pile", description: "onto a loaded sub" },
    ],
    featured: false,
  },
  {
    slug: "extra-hot-horseradish",
    name: "Extra Hot Horseradish",
    fullName: "Extra Hot Horseradish",
    description: "For the heat-lover who wants a fiery kick in every bite.",
    color: "#4e65c3",
    image: "2025/12/Extra_Hot_Horseradish_v2.png",
    categories: ["condiments"],
    badge: "Bestseller",
    tasteTags: ["Fiery", "Sharp", "Pungent"],
    ingredients: [
      {
        name: "Horseradish Root",
        icon: "2025/11/ingredient-horseradish-root_horseradish.svg",
      },
      { name: "Vinegar", icon: "2025/11/ingredient-vinegar_horseradish.svg" },
      { name: "Egg", icon: "2025/11/ingredient-egg_horseradish.svg" },
    ],
    howToUse: "A clean, sinus-clearing heat that wakes everything up.",
    pairings: [
      { action: "Serve", description: "with prime rib, always" },
      { action: "Whip", description: "into sour cream for a five-minute dip" },
    ],
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
