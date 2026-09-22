/**
 * Single source of truth for where media lives.
 *
 * Local images (like dishes / products) are served from /public.
 * Brand assets and background artwork resolve from the original host.
 */
const ASSET_BASE = "https://yourmainstays.com";

export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith("/images/") || path.startsWith("images/")) {
    return path.startsWith("/") ? path : `/${path}`;
  }
  return `${ASSET_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Uploads live under a dated folder, e.g. up("2025/11/Cool_Mint_Sauce.png") or local paths. */
export function up(path: string): string {
  if (path.startsWith("/images/") || path.startsWith("images/")) {
    return path.startsWith("/") ? path : `/${path}`;
  }
  return assetUrl(`/wp-content/uploads/${path}`);
}

/** Theme-bundled assets (illustrations, logos, slogans). */
export function theme(path: string): string {
  return assetUrl(`/wp-content/themes/the-mainstays/assets/${path}`);
}
