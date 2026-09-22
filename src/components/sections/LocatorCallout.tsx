import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import styles from "./LocatorCallout.module.css";

export function LocatorCallout() {
  return (
    <section className={`block ${styles.section}`}>
      <div className={`block-inner ${styles.inner}`}>
        <div className={`text-component ${styles.content}`}>
          <h2>Our Beginnings</h2>
          <p>
            Born in Hatibagan, shaped by culture, and guided by an enduring
            respect for tradition.
          </p>
          <p style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--color-egg)" }}>
            Hatibagan &mdash; Our Very First Table of Promise
          </p>
          <div className="text-component_buttons">
            <Button href="/locations" variant="outline">
              View Locations
            </Button>
          </div>
        </div>

        <div className={styles.map}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={up("2025/12/find-us-map.svg")}
            alt="Koshe Kosha Hatibagan restaurant"
            width={900}
            height={720}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
