import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleLink from "@/components/LocaleLink";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="space-y-3">
    <h2 className="font-display text-2xl md:text-3xl text-shaman-gold">{title}</h2>
    <div className="space-y-3 text-muted-foreground font-body leading-relaxed">{children}</div>
  </section>
);

const Trust = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Trust & Security — Cosmic Igloo"
        description="How Cosmic Igloo handles security, privacy, payments, and data. Contact hello@cosmicigloo.com for security enquiries."
        path="/trust"
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-10">
          <header className="space-y-3">
            <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Trust & Security
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              This page is maintained by Cosmic Igloo to answer common security and privacy questions about our store. It describes the controls we operate today, not a formal certification.
            </p>
          </header>

          <Section title="Who we are">
            <p>
              Cosmic Igloo is an online-only retailer based in Perth, Western Australia. We design premium sacred-geometry yoga mats, which are printed on demand by our production partner in the United States and shipped worldwide.
            </p>
            <p>
              Cosmic Igloo is the merchant of record for every order.
            </p>
          </Section>

          <Section title="Payments">
            <p>
              Payments are processed by our payment providers (Shopify Payments, PayPal, Apple Pay, Google Pay, and Shop Pay). Card details are entered on their secure, PCI-DSS compliant checkout — Cosmic Igloo never sees or stores full card numbers.
            </p>
          </Section>

          <Section title="Data we collect">
            <p>
              We collect only what we need to run the store: your name, shipping and billing address, email, order details, and (with your consent) analytics events. Full detail is in our{" "}
              <LocaleLink to="/privacy-policy" className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-2">Privacy Policy</LocaleLink>.
            </p>
          </Section>

          <Section title="How your data is protected">
            <p>All traffic to cosmicigloo.com is served over HTTPS/TLS with SSL certificates managed by our hosting platform.</p>
            <p>Customer data is stored with reputable cloud providers (Shopify and our managed backend), which operate their own physical and network security controls.</p>
            <p>Access to admin systems (store, hosting, DNS, email) is restricted to the business owner and protected with strong passwords and multi-factor authentication.</p>
          </Section>

          <Section title="Subprocessors we use">
            <ul className="list-disc pl-5 space-y-1">
              <li>Shopify — checkout, orders, payments</li>
              <li>Our production partner (United States) — printing and fulfilment</li>
              <li>Cloudflare — DNS and edge delivery</li>
              <li>Google Analytics 4 — anonymous usage analytics (consent-gated)</li>
              <li>Microsoft Clarity — anonymous session analytics (consent-gated)</li>
              <li>Our transactional email provider — order and support emails</li>
            </ul>
          </Section>

          <Section title="Cookies and analytics">
            <p>
              We only load Google Analytics and Microsoft Clarity after you accept the cookie banner. If you decline, no analytics scripts are loaded. You can change your choice at any time by clearing site data in your browser.
            </p>
          </Section>

          <Section title="Data retention and deletion">
            <p>
              We keep order records for as long as required by Australian tax and consumer-law obligations (typically 7 years). To request access to or deletion of your personal data, email{" "}
              <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet hover:text-shaman-violet/80">hello@cosmicigloo.com</a>.
            </p>
          </Section>

          <Section title="Reporting a security issue">
            <p>
              If you believe you've found a security vulnerability in cosmicigloo.com, please email{" "}
              <a href="mailto:hello@cosmicigloo.com" className="text-shaman-violet hover:text-shaman-violet/80">hello@cosmicigloo.com</a>
              . Please give us reasonable time to investigate and fix the issue before disclosing it publicly. Our machine-readable disclosure policy is published at{" "}
              <a href="/.well-known/security.txt" className="text-shaman-violet hover:text-shaman-violet/80">/.well-known/security.txt</a>.
            </p>
          </Section>

          <Section title="What we don't claim">
            <p>
              Cosmic Igloo is a small independent business. We do not hold ISO 27001, SOC 2, or PCI-DSS certifications in our own name — we rely on the certifications held by the payment and hosting providers listed above. If you need contractual security terms for a wholesale or corporate order, please get in touch.
            </p>
          </Section>

          <p className="text-sm text-muted-foreground/70">Last updated: 17 July 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trust;
