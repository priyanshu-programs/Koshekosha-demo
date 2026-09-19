"use client";

import { useState } from "react";
import {
  FacebookIcon,
  LinkIcon,
  MailIcon,
  PinterestIcon,
  XIcon,
} from "./Icons";
import styles from "./ShareRow.module.css";

interface ShareRowProps {
  url: string;
  title: string;
  image: string;
}

export function ShareRow({ url, title, image }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; the other share targets still work.
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className={styles.share}>
      <h4>Share</h4>
      <ul className={styles.list}>
        <li className={styles.copyWrap}>
          <button
            type="button"
            className={styles.link}
            onClick={copyLink}
            aria-label="Copy link to clipboard"
          >
            <LinkIcon />
          </button>
          {copied ? (
            <span className={styles.copied} role="status">
              Copied to clipboard!
            </span>
          ) : null}
        </li>
        <li>
          <a
            className={styles.link}
            href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
            aria-label="Share via email"
          >
            <MailIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href={`https://twitter.com/intent/post?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X"
          >
            <XIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(
              image,
            )}&description=${encodedTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Pinterest"
          >
            <PinterestIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
