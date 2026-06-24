import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Shipping & Delivery — Cosmic Igloo"
        description="Delivery times by region for our made-to-order yoga mats: around 1 week to the USA, 2 weeks to UK/Europe, up to 3 weeks to Australia."
        path="/shipping"
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
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
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span><strong className="text-foreground">USA</strong> — around 1 week</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span><strong className="text-foreground">Europe & UK</strong> — around 2 weeks</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span><strong className="text-foreground">Australia</strong> — up to 3 weeks</span></li>
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
                As our mats are made in the USA and shipped worldwide, some countries may apply local import taxes on arrival.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span><strong className="text-foreground">UK, EU & Canada</strong> — your parcel may be subject to local import taxes such as VAT or GST, along with a small carrier handling fee.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span><strong className="text-foreground">Australia</strong> — orders may attract GST or import charges on arrival, depending on the order value and current thresholds.</span></li>
              </ul>
              <p>
                These charges are set by your local customs authority and aren't something we're able to control. If you're unsure about import regulations in your country, it's worth checking with your local customs office before ordering.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Lost or delayed parcels
              </h2>
              <p>
                If your tracking hasn't updated or your order hasn't arrived within the expected window, contact us at <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a> and we'll help track it down.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Questions?
              </h2>
              <p>
                We're always happy to help — <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a>
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
