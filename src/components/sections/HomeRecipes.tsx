import type { Recipe } from "@/types";
import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { RecipeCard } from "@/components/cards/RecipeCard";
import { RecipeCarousel } from "@/components/carousels/RecipeCarousel";
import styles from "./HomeRecipes.module.css";

export function HomeRecipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <section className={`block light ${styles.section}`} data-cursor="recipe">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={up("2025/12/recipe-archive-header-left.svg")}
        alt=""
        className={`${styles.hand} ${styles.handLeft}`}
        aria-hidden="true"
      />

      <div className="block-inner">
        <div className={`text-component text-center ${styles.header}`}>
          <h2>Meals that&rsquo;ll make you look good</h2>
          <div className="text-component_buttons">
            <Button href="/recipes">All Recipes</Button>
          </div>
        </div>

        <RecipeCarousel recipes={recipes} />

        <ul className={styles.grid}>
          {recipes.map((recipe) => (
            <li key={recipe.slug}>
              <RecipeCard recipe={recipe} sizes="30vw" />
            </li>
          ))}
        </ul>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={up("2025/12/recipe-archive-header-right.svg")}
        alt=""
        className={`${styles.hand} ${styles.handRight}`}
        aria-hidden="true"
      />
    </section>
  );
}
