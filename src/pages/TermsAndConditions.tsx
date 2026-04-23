import LocaleLink from "@/components/LocaleLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Terms & Conditions
          </h1>
          
          <p className="text-sm text-muted-foreground/70 font-body mb-8 italic">
            Last updated: February 2026
          </p>

          <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
            We've tried to keep this as straightforward as possible. The short version: our mats are made to order, we take quality seriously, and if something goes wrong we'll do our best to put it right. The full details are below.
          </p>

          <div className="space-y-10 text-muted-foreground font-body leading-relaxed">
            {/* Overview */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Overview
              </h2>
              <p className="mb-4">
                This website is operated by <strong className="text-foreground">Cosmic Igloo</strong>. Throughout the Site, the terms "we", "us", and "our" refer to Cosmic Igloo. Cosmic Igloo offers this website, including all information, tools, and services available from <strong className="text-foreground">uniqueyogamats.com</strong> (the "Site") to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
              </p>
              <p className="mb-4">
                By visiting our Site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following Terms & Conditions ("Terms"), including any additional terms and policies referenced herein and/or available by hyperlink. These Terms apply to all users of the Site, including browsers and customers.
              </p>
              <p className="mb-4">
                Please read these Terms carefully before accessing or using our Site. If you do not agree to all the Terms, you may not access the Site or use our Services.
              </p>
              <p className="mb-4">
                We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the Site following the posting of any changes constitutes acceptance of those changes.
              </p>
              <p>
                Our online store is powered by <strong className="text-foreground">Shopify Inc.</strong>, which provides us with the e-commerce platform that enables us to sell our products and services to you.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 1 – Online Store Terms
              </h2>
              <p className="mb-4">
                By agreeing to these Terms, you represent that you are at least the age of majority in your place of residence, or that you are the age of majority and you have given consent for any minor dependents to use this Site.
              </p>
              <p className="mb-4">
                You may not use our products for any illegal or unauthorized purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
              </p>
              <p>
                You must not transmit any worms, viruses, or any code of a destructive nature. A breach or violation of any of the Terms may result in immediate termination of your access to our Services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 2 – General Conditions
              </h2>
              <p className="mb-4">
                We reserve the right to refuse service to anyone for any reason at any time.
              </p>
              <p className="mb-4">
                You understand that your content (not including credit card information) may be transferred unencrypted and involve transmissions over various networks and changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
              </p>
              <p className="mb-4">
                You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without our express written permission.
              </p>
              <p>
                Headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 3 – Accuracy, Completeness, and Timeliness of Information
              </h2>
              <p className="mb-4">
                We are not responsible if information made available on this Site is not accurate, complete, or current. The material on this Site is provided for general information only and should not be relied upon as the sole basis for making decisions.
              </p>
              <p>
                This Site may contain historical information. Historical information is not current and is provided for reference only. We reserve the right to modify the contents of this Site at any time, but we have no obligation to update any information.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 4 – Modifications to the Service and Prices
              </h2>
              <p className="mb-4">
                Prices for our products are subject to change without notice.
              </p>
              <p>
                We reserve the right at any time to modify or discontinue the Service (or any part of it) without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 5 – Products or Services
              </h2>
              <p className="mb-4">
                Certain products are available exclusively online through the Site and are made to order.
              </p>
              <p className="mb-4">
                We have made every effort to display product colors and images as accurately as possible. We cannot guarantee that your device's display of any color will be accurate.
              </p>
              <p className="mb-4">
                As our products are printed to order, slight variations in color or finish may occur as part of the production process.
              </p>
              <p className="mb-4">
                We reserve the right (but are not obligated) to limit sales of our products to any person, geographic region, or jurisdiction, and to limit quantities offered.
              </p>
              <p className="mb-4">
                Product descriptions and pricing are subject to change at any time without notice. We reserve the right to discontinue any product at any time. Any offer made on this Site is void where prohibited.
              </p>
              <p>
                Returns and refunds are handled in accordance with our <LocaleLink to="/refund-policy" className="text-foreground font-semibold hover:text-shaman-violet transition-colors underline underline-offset-2">Refund & Returns Policy</LocaleLink>.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 6 – Accuracy of Billing and Account Information
              </h2>
              <p className="mb-4">
                We reserve the right to refuse or cancel any order. We may limit or cancel quantities purchased per person, per household, or per order.
              </p>
              <p className="mb-4">
                If an order is changed or canceled, we may attempt to notify you using the contact details provided at checkout.
              </p>
              <p className="mb-4">
                You agree to provide current, complete, and accurate purchase and account information and to promptly update your details so we can complete transactions and contact you as required.
              </p>
              <p>
                For more information, please review our <LocaleLink to="/refund-policy" className="text-foreground font-semibold hover:text-shaman-violet transition-colors underline underline-offset-2">Refund & Returns Policy</LocaleLink>.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 7 – Optional Tools
              </h2>
              <p className="mb-4">
                We may provide access to third-party tools over which we have no control or input. These tools are provided "as is" and "as available" without warranties or conditions of any kind.
              </p>
              <p>
                Any use of optional third-party tools is at your own risk and discretion.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 8 – Third-Party Links
              </h2>
              <p className="mb-4">
                Certain content, products, or services may include materials from third parties. Third-party links may direct you to external websites not affiliated with us.
              </p>
              <p>
                We are not responsible for the content, accuracy or practices of third-party websites and encourage you to review their policies before engaging in any transaction.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 9 – User Comments, Feedback, and Submissions
              </h2>
              <p className="mb-4">
                If you submit ideas, feedback, or other content to us, you agree that we may use, edit, and distribute such content without restriction or compensation.
              </p>
              <p className="mb-4">
                We may remove content that we determine to be unlawful, offensive, defamatory, obscene, or otherwise objectionable, or that violates these Terms.
              </p>
              <p>
                You are solely responsible for the content you submit and its accuracy.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 10 – Personal Information
              </h2>
              <p>
                Your submission of personal information through the Site is governed by our <LocaleLink to="/privacy-policy" className="text-foreground font-semibold hover:text-shaman-violet transition-colors underline underline-offset-2">Privacy Policy</LocaleLink>.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 11 – Errors, Inaccuracies, and Omissions
              </h2>
              <p className="mb-4">
                Occasionally there may be information on the Site that contains errors or omissions relating to product descriptions, pricing, promotions, shipping, or availability.
              </p>
              <p>
                We reserve the right to correct errors and to change or update information or cancel orders if any information is inaccurate at any time without prior notice.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 12 – Prohibited Uses
              </h2>
              <p className="mb-4">
                You are prohibited from using the Site or its content for any unlawful purpose; to violate laws; to infringe intellectual property rights; to harass or discriminate; to submit false information; to upload malicious code; to collect personal data of others; to spam or scrape; or to interfere with security features.
              </p>
              <p>
                We reserve the right to terminate your access for violating any prohibited uses.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 13 – Disclaimer of Warranties; Limitation of Liability
              </h2>
              <p className="mb-4">
                We do not guarantee that your use of the Service will be uninterrupted, secure, or error-free.
              </p>
              <p className="mb-4">
                All products and services are provided "as is" and "as available", except as expressly stated.
              </p>
              <p className="mb-4">
                To the maximum extent permitted by law, <strong className="text-foreground">Cosmic Igloo</strong> shall not be liable for any direct, indirect, incidental, punitive, or consequential damages arising from your use of the Service or any products purchased.
              </p>
              <p className="mb-4">
                Where liability cannot be excluded, it is limited to the maximum extent permitted by law.
              </p>
              <p>
                Nothing in these Terms limits or excludes your rights under applicable consumer protection laws.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 14 – Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless <strong className="text-foreground">Cosmic Igloo</strong> and its affiliates, partners, officers, employees, and service providers from any claim arising out of your breach of these Terms or violation of any law or third-party rights.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 15 – Severability
              </h2>
              <p>
                If any provision of these Terms is found to be unlawful or unenforceable, that provision shall be severed without affecting the enforceability of the remaining provisions.
              </p>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 16 – Termination
              </h2>
              <p>
                These Terms remain effective unless terminated by either you or us. We may terminate access without notice if we believe you have breached these Terms.
              </p>
            </section>

            {/* Section 17 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 17 – Entire Agreement
              </h2>
              <p>
                These Terms, together with any policies posted on the Site, constitute the entire agreement between you and us and supersede any prior agreements or communications.
              </p>
            </section>

            {/* Section 18 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 18 – Governing Law
              </h2>
              <p>
                Except where required otherwise, these Terms are governed by and construed in accordance with the laws of <strong className="text-foreground">Western Australia</strong>.
              </p>
            </section>

            {/* Section 19 */}
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 19 – Changes to Terms
              </h2>
              <p>
                You can review the most current version of these Terms at any time on this page. Continued use of the Site following changes constitutes acceptance of those changes.
              </p>
            </section>

            {/* Section 20 */}
            <section className="pt-4 border-t border-border/30">
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Section 20 – Contact Information
              </h2>
              <p className="mb-4">
                Questions about these Terms should be sent to:
              </p>
              <p>
                <strong className="text-foreground">hello@uniqueyogamats.com</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
