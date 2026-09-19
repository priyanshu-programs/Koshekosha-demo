import type { Recipe } from "@/types";

export const recipes: Recipe[] = [
  {
    slug: "gooey-grilled-cheese",
    title: "Gooey Grilled Cheese",
    description:
      "Melty Havarti and a spoonful of cranberry sauce turn a weeknight sandwich into something worth plating.",
    image: "2025/11/Gooey-Grilled-Cheese-Thumbnail-min.jpg",
    prepTime: "10 min",
    serves: "2",
    productSlug: "orange-brandy-cranberry-sauce",
    ingredients: [
      { text: "4 slices sourdough bread" },
      { text: "6 slices Havarti cheese" },
      {
        text: "3 tablespoons orange brandy cranberry sauce",
        productSlug: "orange-brandy-cranberry-sauce",
        linkText: "orange brandy cranberry sauce",
      },
      { text: "2 tablespoons butter, softened" },
      { text: "1 sprig fresh rosemary (optional)" },
    ],
    instructions: [
      "Butter one side of each slice of bread.",
      "Layer Havarti onto the unbuttered side of two slices, then spread the cranberry sauce over the cheese.",
      "Top with the remaining slices, buttered side facing out.",
      "Grill over medium heat for 3-4 minutes per side, until golden and the cheese has fully melted.",
      "Slice on the diagonal and serve warm.",
    ],
  },
  {
    slug: "creamy-horseradish-dip",
    title: "Creamy Horseradish Dip",
    description:
      "This creamy horseradish dip is zesty, quick, and perfect for parties, game day, or as a flavourful sandwich spread.",
    image: "2025/11/Creamy-Horseradish-Dip-Thumbnail-min.jpg",
    prepTime: "5 min",
    serves: "4-6",
    productSlug: "extra-hot-horseradish",
    ingredients: [
      { text: "1 cup sour cream" },
      {
        text: "2 tablespoons extra hot horseradish (adjust to taste)",
        productSlug: "extra-hot-horseradish",
        linkText: "extra hot horseradish",
      },
      { text: "1 teaspoon Dijon mustard" },
      { text: "1 teaspoon lemon juice" },
      { text: "½ teaspoon garlic powder" },
      { text: "Salt & pep to taste" },
      { text: "Optional: chopped fresh chives for garnish" },
    ],
    instructions: [
      "In a medium bowl, combine sour cream, horseradish, Dijon mustard, lemon juice, and garlic powder.",
      "Taste and season with salt and pep as needed.",
      "Transfer to a serving bowl and sprinkle with chopped chives.",
      "Serve chilled with fresh veggies, chips or use as a tangy sando spread.",
    ],
  },
  {
    slug: "cranberry-yogurt-parfait",
    title: "Cranberry Yogurt Parfait",
    description:
      "Layers of thick yogurt, granola and cranberry sauce. Breakfast that looks like dessert.",
    image: "2025/11/Cranberry-Yogurt-Parfait-Thumbnail-min-2.jpg",
    prepTime: "5 min",
    serves: "2",
    productSlug: "shiraz-cranberry-sauce",
    ingredients: [
      { text: "2 cups Greek yogurt" },
      {
        text: "4 tablespoons shiraz cranberry sauce",
        productSlug: "shiraz-cranberry-sauce",
        linkText: "shiraz cranberry sauce",
      },
      { text: "1 cup granola" },
      { text: "1 cup fresh strawberries, halved" },
      { text: "2 tablespoons honey" },
    ],
    instructions: [
      "Spoon a layer of Greek yogurt into the bottom of two glasses.",
      "Add a spoonful of cranberry sauce, then a layer of granola.",
      "Repeat the layers until the glasses are full, finishing with granola.",
      "Top with fresh strawberries and a drizzle of honey. Serve immediately.",
    ],
  },
  {
    slug: "cheddar-chutney-scones",
    title: "Cheddar & Chutney Scones",
    description:
      "Sharp cheddar and sweet peach chutney baked into a tender, savoury scone.",
    image: "2025/11/Gooey-Grilled-Cheese-Thumbnail-min.jpg",
    prepTime: "25 min",
    serves: "8",
    productSlug: "peach-apricot-chutney",
    ingredients: [
      { text: "2 cups all-purpose flour" },
      { text: "1 tablespoon baking powder" },
      { text: "½ teaspoon salt" },
      { text: "½ cup cold butter, cubed" },
      { text: "1 cup sharp cheddar, grated" },
      {
        text: "⅓ cup peach & apricot chutney",
        productSlug: "peach-apricot-chutney",
        linkText: "peach & apricot chutney",
      },
      { text: "¾ cup buttermilk" },
    ],
    instructions: [
      "Heat the oven to 200°C (400°F) and line a baking sheet with parchment.",
      "Whisk together the flour, baking powder and salt, then rub in the cold butter until the mixture resembles coarse crumbs.",
      "Stir through the cheddar, then add the chutney and buttermilk and mix until just combined.",
      "Turn out onto a floured surface, pat into a 2cm round and cut into eight wedges.",
      "Bake for 18-20 minutes until risen and golden. Serve warm with plenty of butter.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getRecipesForProduct(productSlug: string): Recipe[] {
  return recipes.filter((recipe) => recipe.productSlug === productSlug);
}

export function getOtherRecipes(slug: string, limit = 3): Recipe[] {
  return recipes.filter((recipe) => recipe.slug !== slug).slice(0, limit);
}
