import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Refund & Returns Policy — Cosmic Igloo"
        description="Every mat is made to order. We don't accept change-of-mind returns, but if yours arrives damaged, faulty, or incorrect, contact us within 30 days and we'll make it right."
        path="/refund-policy"
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Refund & Returns Policy
          </h1>

          <p className="text-sm text-muted-foreground/70 font-body mb-8 italic">
            Last updated: July 17, 2026
          </p>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              Because every mat is printed to order, we handle returns a little differently to an off-the-shelf retailer. The short version: we don't accept change-of-mind returns, but if your mat arrives damaged, faulty, or isn't what you ordered, we'll replace or refund it. Your rights under the Australian Consumer Law always apply.
            </p>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Change-of-mind returns
              </h2>
              <p>
                We do not accept returns or offer refunds for change of mind, incorrect size selection, or ordering the wrong design. Because each mat is printed to your order, it can't be re-sold. Please double-check your design and quantity at checkout before completing your purchase.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Damaged, faulty, or incorrect items
              </h2>
              <p className="mb-4">
                If your mat arrives damaged, faulty, or is different to what you ordered, contact us within <strong className="text-foreground">30 days of delivery</strong> at <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a>. Please include your order number, a clear photo of the issue, and (where relevant) a photo of the packaging.
              </p>
              <p className="mb-4">
                To be eligible, the item needs to be unused, in its original condition, and accompanied by proof of purchase. Please don't send anything back before contacting us — returns sent without prior approval won't be accepted.
              </p>
              <p>
                Once we've reviewed the issue, we'll usually offer a free replacement, a full refund, or (with your agreement) a store credit. There is <strong className="text-foreground">no restocking fee</strong> on approved returns.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Return shipping
              </h2>
              <p className="mb-4">
                If a return is approved because the mat is damaged, faulty, or incorrect, <strong className="text-foreground">we cover return shipping</strong>. We'll either send you a prepaid return label or reimburse the standard shipping cost against a receipt.
              </p>
              <p>
                For any other return we agree to accept on a case-by-case basis, return shipping is at your cost, and the item must arrive back with us in original condition before a refund is issued. We recommend a tracked service — we can't refund items that don't reach us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Return address
              </h2>
              <p>
                Because our mats are printed and dispatched from our production partner in Nevada, USA, the correct return address depends on your order. We'll email you the exact address once your return has been approved. Please don't ship anything to our Perth business address — parcels sent there can't be processed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Refunds
              </h2>
              <p>
                Approved refunds are issued to your original payment method. We process refunds <strong className="text-foreground">within 10 business days of approval</strong>. Your bank or card provider may take an additional few business days to show the credit in your account. If more than <strong className="text-foreground">15 business days</strong> have passed since we confirmed your refund and it still hasn't appeared, please email <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a> and we'll investigate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Warranty & Care
              </h2>
              <p className="mb-4">
                We warrant Cosmic Igloo mats against manufacturing defects for <strong className="text-foreground">12 months from the date of purchase</strong>. If a defect appears, contact us at <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a> with your order number and photos, and we'll repair, replace, or refund at our discretion.
              </p>
              <p className="mb-3 text-foreground font-medium">What's not covered:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Normal wear from regular use</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Damage from misuse, accidents, or improper storage</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Over-exposure to extreme heat or direct sunlight (this can degrade the natural rubber base)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Damage from oils, lotions, alcohol, harsh cleaning products, or chemicals (these affect the suede microfibre grip)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Machine washing on a hot cycle, or with fabric softener or bleach</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" /><span>Alterations to the product</span></li>
              </ul>
              <p className="mb-3">
                <strong className="text-foreground">Caring for your mat:</strong> To keep your mat performing:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span>Wipe the top with a damp cloth and mild soap, or machine wash cold on a gentle cycle. No fabric softener or bleach.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span>Air dry flat or hang to dry; never tumble dry.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span>Avoid oils, lotions, and alcohol-based sprays, which reduce the microfibre's grip.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span>Keep the rubber base out of direct sunlight and extreme heat, and don't leave your mat in a hot car.</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" /><span>Store rolled, out of direct sunlight.</span></li>
              </ul>
              <p>
                A tip: the suede top grips best with a little moisture, so it improves as you warm up. Good care protects both your mat and your warranty.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Sale and discounted items
              </h2>
              <p>
                Discounts and promotional pricing don't change this policy. Sale and discount-code orders are covered for faults, damage, or incorrect items on the same terms as full-price orders, but (like all our made-to-order items) aren't eligible for change-of-mind returns.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Order cancellations
              </h2>
              <p>
                Because production begins soon after checkout, we can only cancel an order if it hasn't yet entered production. Email us at <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet font-medium hover:text-shaman-violet/80 transition-colors">hello@cosmicigloo.com</a> as soon as possible and we'll do our best to catch it before it's printed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Your rights under Australian Consumer Law
              </h2>
              <p>
                Our products come with guarantees that cannot be excluded under the Australian Consumer Law. You're entitled to a replacement or refund for a major failure, and compensation for any other reasonably foreseeable loss or damage. For minor faults, we may choose to repair or replace the item. Nothing in this policy limits or replaces these rights.
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
