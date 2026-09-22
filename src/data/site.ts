import type { NavItem, Stockist } from "@/types";

export const site = {
  name: "Koshe Kosha",
  tagline: "Come Experience Bengal with us",
  description:
    "Koshe Kosha is more than just a culinary venture—it’s a celebration of Bangaliana, intricately woven into every dish we serve. From our humble beginnings, our mission has been clear: to elevate and share the authentic flavors of Bengali cuisine with the world.",
  url: "https://koshekosha.com",
  instagram: "https://www.instagram.com/koshekosha",
  instagramHandle: "koshekosha",
  phone: "9830 94 94 94",
  address: "2nd Floor, Block-E, 57 (1327), near Bank of India & Prince Marble, Survey Park, Santoshpur, Kolkata, West Bengal 700075",
};

/** Split either side of the centred logo in the header. */
export const navLeft: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Locations", href: "/locations" },
];

export const navRight: NavItem[] = [
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
  { label: "ORDER NOW!", href: "/order" },
];

export const footerLinks: NavItem[] = [
  { label: "Our Story", href: "/our-story" },
  { label: "Locations", href: "/locations" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

/** Scrolling marquee copy in the hero. */
export const heroHighlights: string[] = [
  "Authentic Bengali Cuisine",
  "Celebration of Bangaliana",
  "Serving the best of Bengal",
  "Hatibagan Table of Promise",
  "Kosha Mangsho & Mahabhoj",
  "Timeless Flavours of Bengal",
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
