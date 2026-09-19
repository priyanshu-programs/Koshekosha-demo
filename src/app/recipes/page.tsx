import type { Metadata } from "next";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/cards/RecipeCard";
import styles from "@/components/sections/RecipeArchive.module.css";

export const metadata: Metadata = {
  title: "Recipes Archive",
  description:
    "Easy, flavour-packed recipes built around Mainstays pantry staples.",
};

export default function RecipesPage() {
  return (
    <section className="block light" data-cursor="recipe">
      <div className="block-inner">
        <h1 className={styles.heading}>Explore our recipes</h1>
        <ul className={styles.grid}>
          {recipes.map((recipe) => (
            <li key={recipe.slug}>
              <RecipeCard recipe={recipe} sizes="(min-width: 48rem) 30vw, 80vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
