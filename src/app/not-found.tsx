import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="block light">
      <div className="block-inner">
        <div className="text-component text-center">
          <h1>Under Development</h1>
          <p>We are currently developing this page. Stay tuned for authentic Bengali delights!</p>
          <div className="text-component_buttons">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
