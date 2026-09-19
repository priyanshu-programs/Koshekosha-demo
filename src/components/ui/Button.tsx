import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

/** Pill CTA. Renders a Link when given an href, otherwise a button. */
export function Button({
  children,
  href,
  variant = "solid",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = ["btn", variant === "outline" && "btn--outline", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="btn-text">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      <span className="btn-text">{children}</span>
    </button>
  );
}

interface TextButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

/** Uppercase label with a trailing hand-drawn arrow that nudges on hover. */
export function TextButton({ children, href, className }: TextButtonProps) {
  const content = (
    <span className={["text-btn", className].filter(Boolean).join(" ")}>
      <span className="text-btn_text">{children}</span>
      <span className="text-btn_icon">
        <ArrowRightIcon />
      </span>
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

type IconButtonProps = ComponentProps<"button"> & { children: ReactNode };

/** Circular carousel control. */
export function IconButton({
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={["icon-btn", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
