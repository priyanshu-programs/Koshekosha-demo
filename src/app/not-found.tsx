import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="block light">
      <div className="block-inner">
        <div className="text-component text-center">
          <h1>This page has gone missing</h1>
          <p>Let us point you back towards the good stuff.</p>
          <div className="text-component_buttons">
            <Button href="/">Back to home</Button>
            <Button href="/products" variant="outline">
              View products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
