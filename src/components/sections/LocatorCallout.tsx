import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import styles from "./LocatorCallout.module.css";

export function LocatorCallout() {
  return (
    <section className={`block ${styles.section}`}>
      <div className={`block-inner ${styles.inner}`}>
        <div className={`text-component ${styles.content}`}>
          <h2>Find the Mainstays near you</h2>
          <p>Discover your next favourite jar in-store today</p>
          <div className="text-component_buttons">
            <Button href="/find-us" variant="outline">
              Find a Store
            </Button>
          </div>
        </div>

        <div className={styles.map}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={up("2025/12/find-us-map.svg")}
            alt="Map of Canada showing Mainstays retailer locations"
            width={900}
            height={720}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
