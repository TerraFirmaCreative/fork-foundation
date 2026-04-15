import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground uppercase tracking-wide">
            Shipping Information
          </h1>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              Every mat is made to order and printed with care in Nevada, USA.
            </p>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Production
              </h2>
              <p>
                Once your order is placed, please allow up to <strong className="text-foreground">3 business days</strong> for your mat to be made and prepared for dispatch.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Delivery
              </h2>
              <ul className="space-y-1 list-disc list-inside mb-4">
                <li><strong className="text-foreground">USA</strong> — around 1 week</li>
                <li><strong className="text-foreground">Europe & UK</strong> — around 2 weeks</li>
                <li><strong className="text-foreground">Australia</strong> — up to 3 weeks</li>
              </ul>
              <p className="mb-4">
                Delivery times can vary slightly depending on your location, but most orders arrive within these windows. As soon as your mat is on its way, you'll receive tracking details so you can follow it to your door.
              </p>
              <p>
                Worldwide delivery is complimentary on every order.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                International Orders
              </h2>
              <p className="mb-4">
                As our mats are made in the USA and shipped worldwide, some countries may apply local import taxes on arrival. For deliveries to the UK, EU or Canada, your parcel may be subject to local import taxes such as VAT or GST, along with a small carrier handling fee.
              </p>
              <p>
                These charges are set by your local customs authority and aren't something we're able to control. If you're unsure about import regulations in your country, it's worth checking with your local customs office before ordering.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Questions?
              </h2>
              <p>
                We're always happy to help — <a href="mailto:hello@uniqueyogamats.com" className="text-foreground font-medium hover:text-shaman-violet transition-colors">hello@uniqueyogamats.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
