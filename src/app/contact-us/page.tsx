import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Mainstays team.",
};

export default function ContactPage() {
  return (
    <section className="block light">
      <div className="block-inner">
        <div className="text-component text-center">
          <h1>Get in touch</h1>
          <p>
            Questions, feedback or just want to talk chutney? We&rsquo;d love to
            hear from you.
          </p>
        </div>

        <ContactForm
          submitLabel="Send message"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "subject", label: "Subject" },
            {
              name: "message",
              label: "Message",
              type: "textarea",
              required: true,
            },
          ]}
        />
      </div>
    </section>
  );
}
