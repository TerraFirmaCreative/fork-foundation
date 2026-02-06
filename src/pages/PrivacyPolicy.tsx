import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Privacy Policy
          </h1>
          
          <p className="text-sm text-muted-foreground/70 font-body mb-8 italic">
            Last updated: January 2026
          </p>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              This Privacy Policy describes how <strong className="text-foreground">Unique Yoga Mats</strong> (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from <strong className="text-foreground">uniqueyogamats.com</strong> (the "Site") or otherwise communicate with us (collectively, the "Services").
            </p>
            
            <p>
              For the purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected.
            </p>
            
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Services, you agree to the collection, use, and disclosure of your information as described below.
            </p>

            {/* Changes */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our practices or for legal or operational reasons. When we do, we'll update the "Last updated" date on this page.
              </p>
            </section>

            {/* How We Collect */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Collect and Use Your Personal Information
              </h2>
              <p>
                We collect personal information to provide and improve our Services, process orders, communicate with you, and comply with legal obligations. The information we collect depends on how you interact with our Site.
              </p>
            </section>

            {/* Personal Information We Collect */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Personal Information We Collect
              </h2>
              
              <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                Information you provide directly
              </h3>
              <p className="mb-3">This may include:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Name, email address, phone number, and shipping address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Order and payment information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Communications you send to us (e.g. support enquiries)</span>
                </li>
              </ul>
              <p className="mb-6">
                Providing some information is necessary to place an order or access certain features of the Site.
              </p>

              <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                Information collected automatically
              </h3>
              <p className="mb-3">When you visit our Site, we may automatically collect information such as:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" />
                  <span>Device and browser information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" />
                  <span>IP address</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-teal mt-2.5 shrink-0" />
                  <span>Usage data relating to how you interact with the Site</span>
                </li>
              </ul>
              <p className="mb-6">
                We collect this information using cookies and similar technologies.
              </p>

              <h3 className="font-display text-xl font-medium mb-3 text-foreground">
                Information from third parties
              </h3>
              <p className="mb-3">We may receive information from third parties such as:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-magenta mt-2.5 shrink-0" />
                  <span>Shopify, which powers our online store</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-magenta mt-2.5 shrink-0" />
                  <span>Payment processors that securely handle your payment details</span>
                </li>
              </ul>
              <p>
                We treat all such information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* How We Use */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Use Your Personal Information
              </h2>
              <p className="mb-3">We use your information to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span>Process payments and fulfil orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span>Communicate with you about your order or enquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span>Provide customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span>Improve and optimise our Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-gold mt-2.5 shrink-0" />
                  <span>Comply with legal obligations and prevent fraud</span>
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Cookies
              </h2>
              <p className="mb-4">
                We use cookies to operate and improve our Site, remember your preferences, and understand how visitors use our Services. For more information about Shopify-related cookies, visit:
              </p>
              <p className="mb-4">
                <a 
                  href="https://www.shopify.com/legal/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-4"
                >
                  https://www.shopify.com/legal/cookies
                </a>
              </p>
              <p>
                You can manage cookie settings through your browser, but disabling cookies may affect site functionality.
              </p>
            </section>

            {/* How We Share */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Share Personal Information
              </h2>
              <p className="mb-3">We may share your personal information with:</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Service providers who help operate our business (e.g. payment processing, fulfilment, analytics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Shopify and related partners necessary to provide the Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-shaman-violet mt-2.5 shrink-0" />
                  <span>Authorities where required by law</span>
                </li>
              </ul>
              <p>
                We do not sell your personal information.
              </p>
            </section>

            {/* Third Party Websites */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Third Party Websites
              </h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Children's Privacy
              </h2>
              <p>
                Our Services are not intended for children, and we do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Security and Data Retention */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Security and Data Retention
              </h2>
              <p>
                We take reasonable steps to protect your personal information, but no system is completely secure. We retain your information only as long as necessary to provide our Services and meet legal obligations.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Your Rights
              </h2>
              <p>
                Depending on where you live, you may have rights to access, correct, or delete your personal information, or to object to certain uses. You can exercise these rights by contacting us.
              </p>
            </section>

            {/* International Users */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                International Users
              </h2>
              <p>
                Your personal information may be processed outside your country of residence, including in countries with different data protection laws. Where required, we rely on appropriate safeguards.
              </p>
            </section>

            {/* Contact Us */}
            <section className="pt-4 border-t border-border/30">
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
              </p>
              <p>
                <strong className="text-foreground">support@uniqueyogamats.com</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
