import type { Metadata } from "next";
import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import styles from "./find-us.module.css";

export const metadata: Metadata = {
  title: "Find us",
  description:
    "Find Mainstays pantry staples at grocers and specialty markets across Canada.",
};

export default function FindUsPage() {
  return (
    <>
      <section className={`block ${styles.hero}`}>
        <div className={`block-inner ${styles.inner}`}>
          <div className={`text-component ${styles.content}`}>
            <h1>Find the Mainstays near you</h1>
            <p>Discover your next favourite jar in-store today.</p>
          </div>

          <div className={styles.map}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={up("2025/12/find-us-map.svg")}
              alt="Map of Canada showing Mainstays retailer locations"
              width={900}
              height={720}
            />
          </div>
        </div>
      </section>

      <section className="block light" id="become-a-retailer">
        <div className="block-inner">
          <div className="text-component text-center">
            <h2>Stock the Mainstays</h2>
            <p className={styles.retailCopy}>
              Let&rsquo;s get the Mainstays on your shelves! Get in touch to
              bring bold, joyful pantry staples to your customers.
            </p>
            <div className="text-component_buttons">
              <Button href="/wholesale-inquiry">Become a Retailer</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
