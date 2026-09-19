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
          alt="Main course materials"
          width={1600}
          height={209}
        />
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
        <li className={styles.spacer}>&copy;themainstays</li>
        <li>
          <a
            href="https://onboxcreative.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site by ONBOX
          </a>
        </li>
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
