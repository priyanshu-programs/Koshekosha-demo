/**
 * Single source of truth for where media lives.
 *
 * Images are currently hotlinked from the origin site. To self-host, download
 * the uploads tree into /public and change ASSET_BASE to "" — every call site
 * keeps working because paths are already stored origin-relative.
 */
const ASSET_BASE = "https://yourmainstays.com";

export function assetUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${ASSET_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Uploads live under a dated folder, e.g. up("2025/11/Cool_Mint_Sauce.png"). */
export function up(path: string): string {
  return assetUrl(`/wp-content/uploads/${path}`);
}

/** Theme-bundled assets (illustrations, logos, slogans). */
export function theme(path: string): string {
  return assetUrl(`/wp-content/themes/the-mainstays/assets/${path}`);
}
