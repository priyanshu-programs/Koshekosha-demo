import Image from "next/image";
import Link from "next/link";
import type { Recipe } from "@/types";
import { up } from "@/lib/assets";
import { CurvedTitle } from "@/components/ui/CurvedTitle";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: Recipe;
  sizes?: string;
}

/** Circular thumbnail with its title set along an arc around the top-right. */
export function RecipeCard({
  recipe,
  sizes = "(min-width: 64rem) 30vw, 80vw",
}: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className={styles.card}
      data-cursor="recipe"
    >
      <div className={styles.media}>
        <Image
          src={up(recipe.image)}
          alt=""
          width={480}
          height={480}
          sizes={sizes}
        />
      </div>
      <h4 className={styles.title}>
        <CurvedTitle>{recipe.title}</CurvedTitle>
      </h4>
    </Link>
  );
}
