import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Wholesale Inquiry",
  description:
    "Bring bold, joyful pantry staples to your customers. Get in touch about stocking the Mainstays.",
};

export default function WholesalePage() {
  return (
    <section className="block light">
      <div className="block-inner">
        <div className="text-component text-center">
          <h1>Stock the Mainstays</h1>
          <p>
            Let&rsquo;s get the Mainstays on your shelves! Tell us about your
            store and we&rsquo;ll get right back to you.
          </p>
        </div>

        <ContactForm
          submitLabel="Send inquiry"
          fields={[
            { name: "name", label: "Contact name", required: true },
            { name: "business", label: "Business name", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "location", label: "Store location" },
            { name: "message", label: "Tell us about your store", type: "textarea" },
          ]}
        />
      </div>
    </section>
  );
}
