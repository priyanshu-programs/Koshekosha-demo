import type { Metadata } from "next";
import Image from "next/image";
import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WaveDivider } from "@/components/ui/WaveDivider";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Born from decades of grocery distribution experience, the Mainstays makes pantry staples that are anything but ordinary.",
};

const VALUES = [
  "Bold, memorable flavours",
  "Elevated pantry staples",
  "A modern twist on classic favourites",
  "Born from Dovre's decades of experience",
];

export default function AboutPage() {
  return (
    <>
      <section className={`block light ${styles.hero}`}>
        <div className="block-inner">
          <h1 className={styles.heading}>We&rsquo;re the Mainstays</h1>
          <div className={styles.lead}>
            <p>
              We believe food should be fun, flavourful, and shared. Whether
              you&rsquo;re feeding a crowd or snacking on the sofa, the
              Mainstays makes every bite memorable.
            </p>
            <p>
              Born from Dovre&rsquo;s decades of experience in grocery
              distribution, we set out to make pantry staples that are anything
              but ordinary. We&rsquo;re here to be a trusted mainstay in your
              kitchen, your go-to for high-quality, crowd-pleasing essentials
              that make cooking effortless, delicious, and a little more fun.
            </p>
          </div>

          <Reveal className={styles.media}>
            <Image
              src={up("2025/12/Home-About-1-min.jpg")}
              alt="A spread of Mainstays products on a shared table"
              width={1120}
              height={702}
              priority
              sizes="100vw"
            />
          </Reveal>
        </div>
      </section>

      <WaveDivider variant="top" color="#cb2821" />

      <section className={`block dark ${styles.label}`}>
        <div className="block-inner">
          <div className={`text-component text-center ${styles.labelText}`}>
            <h2>What&rsquo;s behind the label</h2>
            <p>
              We make pantry staples you actually want. Classic favourites get a
              modern twist, packed with bold flavour and just enough
              personality to keep your kitchen exciting. Timeless flavours,
              crafted with care, that bring people together again and again.
              Good taste never goes out of style.
            </p>
          </div>

          <ul className={styles.values}>
            {VALUES.map((value, index) => (
              <Reveal as="li" key={value} delay={index * 80}>
                <span className={styles.valueMark} aria-hidden="true" />
                <span>{value}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WaveDivider variant="bottom" color="#cb2821" />

      <section className="block light">
        <div className="block-inner">
          <div className="text-component text-center">
            <h2>Discover our products</h2>
            <p>Find your next kitchen mainstay today.</p>
            <div className="text-component_buttons">
              <Button href="/products">View products</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
