import type { NavItem, Stockist } from "@/types";

export const site = {
  name: "The Mainstays",
  tagline: "Your pantry's new main character",
  description:
    "Discover the must-have Mainstays pantry staples and entertaining essentials to elevate your cooking and hosting.",
  url: "https://yourmainstays.com",
  instagram: "https://www.instagram.com/yourmainstays",
  instagramHandle: "yourmainstays",
};

/** Split either side of the centred logo in the header. */
export const navLeft: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
];

export const navRight: NavItem[] = [
  { label: "Recipes", href: "/recipes" },
  { label: "Find us", href: "/find-us" },
];

export const footerLinks: NavItem[] = [
  { label: "Wholesale", href: "/wholesale-inquiry" },
  { label: "Contact", href: "/contact-us" },
];

/** Scrolling marquee copy in the hero. */
export const heroHighlights: string[] = [
  "Crafted with care",
  "Jam-packed with flavour",
  "Pantry heroes",
  "Thoughtfully-sourced ingredients",
  "Bold, modern classics",
  "Flavours that pop",
];

export const stockists: Stockist[] = [
  { name: "Stong's Market", logo: "2025/12/Stongs.png", width: 139, height: 64 },
  {
    name: "Fresh St. Market",
    logo: "2025/12/Fresh-Street-Market.svg",
    width: 139,
    height: 64,
  },
  { name: "IGA", logo: "2025/12/IGA.svg", width: 100, height: 64 },
  { name: "Urban Fare", logo: "2025/12/Urban-Fare.svg", width: 80, height: 64 },
  { name: "Whole Foods Market", logo: "2025/12/Whole-Foods.svg", width: 70, height: 64 },
  { name: "Spud", logo: "2025/12/Spud.png", width: 92, height: 64 },
];

/** Decorative line-art that animates across the footer. */
export const footerIllustrations = [
  { name: "butter", alt: "Butter illustration", width: 147, height: 119 },
  {
    name: "charcuterie-plate",
    alt: "Charcuterie plate illustration",
    width: 341,
    height: 295,
  },
  { name: "candle", alt: "Candle illustration", width: 74, height: 299 },
  { name: "knife", alt: "Knife illustration", width: 118, height: 141 },
  { name: "fork", alt: "Fork illustration", width: 99, height: 146 },
  {
    name: "flower-vase",
    alt: "Flower vase illustration",
    width: 178,
    height: 375,
  },
  {
    name: "bread-board",
    alt: "Bread board illustration",
    width: 450,
    height: 228,
  },
  {
    name: "cheese-plate",
    alt: "Cheese plate illustration",
    width: 249,
    height: 137,
  },
  { name: "salt", alt: "Salt illustration", width: 54, height: 91 },
  { name: "pepper", alt: "Pepper illustration", width: 53, height: 92 },
  {
    name: "olive-bowl",
    alt: "Olive bowl illustration",
    width: 147,
    height: 93,
  },
  { name: "olives", alt: "Olives illustration", width: 93, height: 71 },
  {
    name: "wine-glass-1",
    alt: "Wine glass illustration",
    width: 109,
    height: 184,
  },
  {
    name: "wine-glass-2",
    alt: "Wine glass illustration",
    width: 94,
    height: 186,
  },
  { name: "spoon", alt: "Spoon illustration", width: 186, height: 71 },
  {
    name: "sausage-plate",
    alt: "Sausage plate illustration",
    width: 208,
    height: 108,
  },
  {
    name: "mainstays",
    alt: "Mainstays jar illustration",
    width: 93,
    height: 112,
  },
  {
    name: "wine-bottle",
    alt: "Wine bottle illustration",
    width: 94,
    height: 305,
  },
];

/** Instagram grid on the homepage. */
export const socialImages = [
  "2025/12/Home-Social-1-min.jpg",
  "2025/12/Home-Social-2-min.jpg",
  "2025/12/Home-Social-3-min.jpg",
];
