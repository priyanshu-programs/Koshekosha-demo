"use client";

import { useState, type ReactNode } from "react";
import { MinusIcon, PlusIcon } from "./Icons";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <span className={styles.icon}>
          {open ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      {open ? <div className={styles.panel}>{children}</div> : null}
    </div>
  );
}
