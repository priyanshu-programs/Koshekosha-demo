# The Mainstays — Next.js clone

A faithful rebuild of [yourmainstays.com](https://yourmainstays.com) (WordPress +
a bespoke ONBOX theme) as a statically-rendered Next.js App Router site.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 33 routes, all prerendered except /products
```

## Architecture

### Routing
WordPress permalinks map straight onto the App Router, with
`trailingSlash: true` so every URL matches the original.

| Live URL | Route file |
| --- | --- |
| `/` | `src/app/page.tsx` |
| `/products/` | `src/app/products/page.tsx` (`?page=` pagination) |
| `/products/product-cat/{slug}/` | `src/app/products/product-cat/[slug]/page.tsx` |
| `/products/{slug}/` | `src/app/products/[slug]/page.tsx` |
| `/recipes/` · `/recipes/{slug}/` | `src/app/recipes/…` |
| `/about/` `/find-us/` `/wholesale-inquiry/` `/contact-us/` | matching folders |

Every dynamic segment uses `generateStaticParams`, so products, categories and
recipes are prerendered at build time.

### Data
There is no CMS. Content lives in typed modules under `src/data/`
(`products.ts`, `recipes.ts`, `reviews.ts`, `site.ts`) against the interfaces in
`src/types/`. Query helpers — `getProductBySlug`, `getProductsByCategory`,
`getRecipesForProduct`, `paginate` — sit alongside the data.

### Styling
CSS Modules per component plus five global stylesheets in `src/styles/`,
imported by `app/globals.css`:

- `tokens.css` — the origin's custom properties, transcribed verbatim
  (`--color-cranberry: #cb2821`, `--color-egg: #fff8e0`, `--header-height: 6rem`,
  `--border-radius: 1.5rem`, …) plus the `48/64/80/96rem` breakpoint overrides
  and the `.light` / `.dark` section themes.
- `reset.css`, `typography.css` — the h1–h6 scale (`3rem → 4.75rem` etc.).
- `motion.css` — marquee keyframes and wave dividers.
- `utilities.css` — `.block` / `.block-inner` layout primitives, `.btn`,
  `.text-btn`, `.icon-btn`, Embla structure, and the reduced-motion guard.

Sections theme themselves by reassigning `--base-color` / `--bg-color`, so
buttons and borders re-derive their colors from context — the same cascade
trick the original uses. Tailwind was deliberately avoided; it fights this.

### Interaction
- **`ProductCarousel`** is the flagship. All slides stay mounted while a single
  content panel below renders the centred slide's name, description and CTA —
  `selectedIndex` from Embla's `select` event is the only state, and the
  heading, link target and section accent all derive from it.
- **`ReviewCarousel`** scales the centred card; **`RecipeCarousel`** is
  mobile-only (desktop renders the same cards as a static grid).
- **`Marquee`** duplicates its children four times and translates `-100%`, so
  the seam lands on a duplicate. The animation is declared paused and an
  IntersectionObserver starts it only while on screen.
- **`WaveDivider`** applies the same technique to the scalloped section seams.
- **`SiteHeader`** tracks scroll direction: it gains a cream background past
  8px and hides on downward travel past 120px. The mobile menu sets
  `state--mobile-menu-open` on `<body>` to lock scrolling.
- **`Reveal`** replaces the origin's GSAP scroll tweens with an
  IntersectionObserver plus a CSS transition — same effect, no dependency.
- **`CurvedTitle`** sets recipe titles on an SVG `textPath` arc.

## Assets and fonts

Images are **hotlinked** from `yourmainstays.com/wp-content/…` through
`next/image` (`remotePatterns` in `next.config.ts`). Every path goes through
`assetUrl()` / `up()` / `theme()` in `src/lib/assets.ts` — to self-host later,
download the uploads tree into `/public` and change `ASSET_BASE` in that one
file.

The origin's faces (Auger Mono, Exposure Trial) are licensed and not
redistributable, so `app/layout.tsx` binds free stand-ins — DM Mono and
Fraunces — to `--font-primary` / `--font-secondary`. Licensing the real fonts
means changing only those two declarations.

## Not included

The live Find Us page runs a third-party store locator (169 stores, address
search, geolocation, Google Maps). By agreement this build ships the hero,
copy and "Become a Retailer" CTA only. The contact and wholesale forms validate
client-side but have no backend.

Product and recipe copy beyond what the public site exposes (full nutrition
panels, some pairings) is written to match the brand voice rather than scraped.
