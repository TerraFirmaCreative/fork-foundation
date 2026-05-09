import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Refund & Returns Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              Because every mat is made to order, we don't accept returns for change of mind. But if something arrives damaged, faulty or incorrect, we absolutely want to sort it out.
            </p>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                If there's a problem with your order
              </h2>
              <p className="mb-4">
                Please contact us within 30 days of receiving your mat at <strong className="text-foreground">hello@cosmicigloo.com</strong>. Include a photo of the issue so we can see what's happened, and we'll take it from there.
              </p>
              <p className="mb-4">
                To be eligible for a return the item needs to be unused, in its original condition and packaging, and accompanied by proof of purchase.
              </p>
              <p>
                Please don't send anything back without contacting us first — returns sent without prior approval won't be accepted.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Exchanges
              </h2>
              <p>
                If your mat needs to be replaced, get in touch and we'll guide you through the process once we've reviewed the issue.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Refunds
              </h2>
              <p className="mb-4">
                If a refund is approved, it'll be issued to your original payment method within <strong className="text-foreground">10 business days</strong>. If more than <strong className="text-foreground">15 business days</strong> have passed since we approved your refund and you haven't received it, please drop us a line at <strong className="text-foreground">hello@cosmicigloo.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Return address
              </h2>
              <p>
                We'll provide a return address once your return request has been reviewed and approved.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
