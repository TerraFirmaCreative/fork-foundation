import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Refund & Returns Policy
          </h1>
          
          <p className="text-lg text-muted-foreground font-body mb-12">
            At Unique Yoga Mats, all products are made to order. Please read our returns policy carefully before making a purchase.
          </p>

          <div className="space-y-12 text-muted-foreground font-body leading-relaxed">
            {/* Returns */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Returns
              </h2>
              <p className="mb-4">
                Because our yoga mats are made to order, we do not accept returns for change of mind. However, if your item arrives damaged, defective, or incorrect, please contact us and we'll work with you to make it right.
              </p>
              <p className="mb-4">
                To request a return, you must contact us within 30 days of receiving your item.
              </p>
              <p className="mb-3">To be eligible for a return:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>The item must be in the same condition as received</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Unused and in original condition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>In its original packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>With proof of purchase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>With photos provided prior to return so we can assess the issue</span>
                </li>
              </ul>
              <p className="mb-4">
                To start a return, please contact us at <strong className="text-foreground">hello@uniqueyogamats.com</strong>.
              </p>
              <p className="mb-4">
                If your return is approved, we'll provide instructions on how and where to send your item.
              </p>
              <p>
                Items sent back without prior approval will not be accepted.
              </p>
            </section>

            {/* Damages and issues */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Damages and Issues
              </h2>
              <p>
                Please inspect your order upon arrival. If your item is defective, damaged, or incorrect, contact us immediately at <strong className="text-foreground">support@uniqueyogamats.com</strong> so we can assess the issue and resolve it.
              </p>
            </section>

            {/* Exchanges */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Exchanges
              </h2>
              <p>
                The fastest way to receive a replacement is to contact us regarding the original item. Once the issue has been reviewed and approved, we'll advise on the next steps.
              </p>
            </section>

            {/* Refunds */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Refunds
              </h2>
              <p className="mb-4">
                Once we receive and inspect your return, we'll notify you whether the refund has been approved. If approved, refunds will be issued to your original payment method within <strong className="text-foreground">10 business days</strong>.
              </p>
              <p>
                Please note that processing times may vary depending on your bank or card provider. If more than <strong className="text-foreground">15 business days</strong> have passed since approval, please contact us at <strong className="text-foreground">support@uniqueyogamats.com</strong>.
              </p>
            </section>

            {/* Return address */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Return Address
              </h2>
              <p>
                For approved returns, the return address will be provided once your return request has been reviewed and accepted.
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
