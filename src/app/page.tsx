import { getFeaturedProducts } from "@/data/products";
import { recipes } from "@/data/recipes";
import { reviews } from "@/data/reviews";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeProducts } from "@/components/sections/HomeProducts";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeRecipes } from "@/components/sections/HomeRecipes";
import { HomeReviews } from "@/components/sections/HomeReviews";
import { HomeStockists } from "@/components/sections/HomeStockists";
import { LocatorCallout } from "@/components/sections/LocatorCallout";
import { HomeSocial } from "@/components/sections/HomeSocial";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <HomeHero />
      <HomeProducts products={featured} />

      {/* Cranberry band: the wave flows into, then back out of, the about section. */}
      <WaveDivider variant="top" color="#cb2821" />
      <HomeAbout />
      <WaveDivider variant="bottom" color="#cb2821" />

      <HomeRecipes recipes={recipes.slice(0, 3)} />

      {/* Chutney band behind the testimonials. */}
      <WaveDivider variant="top" color="#ffecc9" />
      <HomeReviews reviews={reviews} />

      <HomeStockists />
      <LocatorCallout />
      <HomeSocial />
    </>
  );
}
