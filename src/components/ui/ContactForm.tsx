"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import styles from "./ContactForm.module.css";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
}

interface ContactFormProps {
  fields: Field[];
  submitLabel: string;
}

/**
 * Client-side validated form. There is no backend in this build, so a
 * successful submit just confirms locally rather than pretending to send.
 */
export function ContactForm({ fields, submitLabel }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={styles.success} role="status">
        Thanks for reaching out — we&rsquo;ll be in touch soon.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      {fields.map((field) => (
        <label key={field.name} className={styles.field}>
          <span className={styles.label}>
            {field.label}
            {field.required ? <abbr title="required">*</abbr> : null}
          </span>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              rows={5}
              required={field.required}
              className={styles.input}
            />
          ) : (
            <input
              type={field.type ?? "text"}
              name={field.name}
              required={field.required}
              className={styles.input}
            />
          )}
        </label>
      ))}

      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
