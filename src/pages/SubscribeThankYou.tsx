import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLocaleNavigate } from "@/hooks/useLocaleNavigate";

const SubscribeThankYou = () => {
  const navigate = useLocaleNavigate();

  const handleExplore = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("design-gallery")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            You're in.
          </h1>

          <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-base md:text-lg">
            <p>Thanks for joining us.</p>
            <p>
              We'll let you know when new designs drop, plus the occasional early
              access before they go live.
            </p>
            <p>Have a look through the collection while you wait.</p>
          </div>

          <div className="mt-10">
            <Button variant="cta" size="lg" className="font-body font-medium tracking-wide glow-effect" onClick={handleExplore}>
              Explore the Collection
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscribeThankYou;
