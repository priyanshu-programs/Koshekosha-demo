import Link from "next/link";
import { footerIllustrations, footerLinks, site } from "@/data/site";
import { theme } from "@/lib/assets";
import { InstagramIcon } from "@/components/ui/Icons";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.slogan}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={theme("images/footer-slogan-desktop.svg")}
          alt="Authentic Bengali cuisine"
          width={1600}
          height={209}
        />
      </div>

      <div style={{ padding: "0 var(--gutter)", textAlign: "center", margin: "1rem 0" }}>
        <p style={{ fontFamily: "var(--font-secondary)", fontSize: "1.5rem", fontWeight: "bold" }}>
          Authentic Bengali Cuisine
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
          Call For Enquiries:{" "}
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {site.phone}
          </a>
        </p>
        <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", opacity: 0.85 }}>
          {site.address}
        </p>
      </div>

      <ul className={styles.links}>
        <li>
          <a
            href={site.instagram}
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon />
          </a>
        </li>
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <li className={styles.spacer}>&copy; Koshe Kosha</li>
      </ul>

      <div className={styles.illustrations} aria-hidden="true">
        {footerIllustrations.map((illustration) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={illustration.name}
            src={theme(`images/illustration-${illustration.name}.svg`)}
            alt=""
            width={illustration.width}
            height={illustration.height}
            loading="lazy"
          />
        ))}
      </div>
    </footer>
  );
}
