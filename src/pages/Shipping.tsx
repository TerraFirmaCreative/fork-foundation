import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            Shipping Information
          </h1>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              We currently ship orders within the United States.
            </p>

            <p>
              International shipping is something we're working toward, and we'll share updates as new destinations become available.
            </p>

            <p>
              All of our yoga mats are printed and shipped from U.S.-based production partners. Each mat is made to order, with production beginning shortly after your purchase is placed.
            </p>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Processing & Shipping Times</h3>
              <p>
                Orders typically ship within <strong className="text-foreground">3 business days</strong>.
              </p>
              <p className="mt-2">
                Once your order has shipped, you'll receive tracking details where available.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Shipping Costs</h3>
              <p>
                Shipping costs are calculated at checkout based on your delivery address and will be shown before you complete your purchase.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Questions about your order?</h3>
              <p>
                If you have any questions about shipping or your order, please contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:support@uniqueyogamats.com" className="text-foreground font-medium hover:text-shaman-violet transition-colors">
                  support@uniqueyogamats.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
