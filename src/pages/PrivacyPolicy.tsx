import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BUSINESS_ADDRESS = "Level 2/179 St Georges Terrace, Perth WA 6000";
const CONTACT_EMAIL = "hello@cosmicigloo.com";

const Bullet = ({ color = "bg-shaman-violet" }: { color?: string }) => (
  <span className={`w-1.5 h-1.5 rounded-full ${color} mt-2.5 shrink-0`} />
);

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-shaman-violet hover:text-shaman-violet/80 underline underline-offset-4"
  >
    {children}
  </a>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy — Cosmic Igloo"
        description="How Cosmic Igloo collects, uses, and protects your personal information."
        path="/privacy-policy"
      />
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Privacy Policy
          </h1>

          <p className="text-sm text-muted-foreground/70 font-body mb-8 italic">
            Last updated: June 4, 2026
          </p>

          <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
            <p>
              <strong className="text-foreground">Cosmic Igloo</strong> operates this store and website, including all related information, content, features, tools, products and services, in order to provide you, the customer, with a curated shopping experience (the "Services"). Cosmic Igloo is powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.
            </p>

            <p>
              Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.
            </p>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Personal Information We Collect or Process
              </h2>
              <p className="mb-4">
                When we use the term "personal information," we are referring to information that identifies or can reasonably be linked to you or another person. Personal information does not include information that is collected anonymously or that has been de-identified, so that it cannot identify or be reasonably linked to you. We may collect or process the following categories of personal information, including inferences drawn from this personal information, depending on how you interact with the Services, where you live, and as permitted or required by applicable law:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Contact details</strong> including your name, address, billing address, shipping address, phone number, and email address.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Financial information</strong> including credit card, debit card, and financial account numbers, payment card information, financial account information, transaction details, form of payment, payment confirmation and other payment details.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Account information</strong> including your username, password, security questions, preferences and settings.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Transaction information</strong> including the items you view, put in your cart, add to your wishlist, or purchase, return, exchange or cancel and your past transactions.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Communications with us</strong> including the information you include in communications with us, for example, when sending a customer support inquiry.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Device information</strong> including information about your device, browser, or network connection, your IP address, and other unique identifiers.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Usage information</strong> including information regarding your interaction with the Services, including how and when you interact with or navigate the Services.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Personal Information Sources
              </h2>
              <p className="mb-4">We may collect personal information from the following sources:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span><strong className="text-foreground">Directly from you</strong> including when you create an account, visit or use the Services, communicate with us, or otherwise provide us with your personal information;</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span><strong className="text-foreground">Automatically through the Services</strong> including from your device when you use our products or services or visit our websites, and through the use of cookies and similar technologies;</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span><strong className="text-foreground">From our service providers</strong> including when we engage them to enable certain technology and when they collect or process your personal information on our behalf;</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span>From our partners or other third parties.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Use Your Personal Information
              </h2>
              <p className="mb-4">
                Depending on how you interact with us or which of the Services you use, we may use personal information for the following purposes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-magenta" /><span><strong className="text-foreground">Provide, Tailor, and Improve the Services.</strong> We use your personal information to provide you with the Services, including to perform our contract with you, to process your payments, to fulfill your orders, to remember your preferences and items you are interested in, to send notifications to you related to your account, to process purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, to facilitate any returns and exchanges, to enable you to post reviews, and to create a customized shopping experience for you, such as recommending products related to your purchases. This may include using your personal information to better tailor and improve the Services.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-magenta" /><span><strong className="text-foreground">Marketing and Advertising.</strong> We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you online advertisements for products or services on the Services or other websites, including based on items you previously have purchased or added to your cart and other activity on the Services.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-magenta" /><span><strong className="text-foreground">Security and Fraud Prevention.</strong> We use your personal information to provide a secure payment and shopping experience, detect and prevent fraudulent or malicious activity, and protect the integrity of our services.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-magenta" /><span><strong className="text-foreground">Communicating with You.</strong> We use your personal information to provide you with customer support, to be responsive to you, to provide effective services to you and to maintain our business relationship with you.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-magenta" /><span><strong className="text-foreground">Legal Reasons.</strong> We use your personal information to comply with applicable law or respond to valid legal process, including requests from law enforcement or government agencies, to investigate or participate in civil discovery, potential or actual litigation, or other adversarial legal proceedings, and to enforce or investigate potential violations of our terms or policies.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                How We Disclose Personal Information
              </h2>
              <p className="mb-4">
                In certain circumstances, we may disclose your personal information to third parties for legitimate purposes subject to this Privacy Policy. Such circumstances may include:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-gold" /><span>With Shopify, vendors and other third parties who perform services on our behalf (e.g. IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-gold" /><span>With business and marketing partners to provide marketing services and advertise to you. For example, we use Shopify to support personalized advertising with third-party services based on your online activity with different merchants and websites. Our business and marketing partners will use your information in accordance with their own privacy notices. Depending on where you reside, you may have a right to direct us not to share information about you to show you targeted advertisements and marketing based on your online activity with different merchants and websites. You can exercise your rights to opt-out of those uses <ExternalLink href="https://privacy.shopify.com/en">here</ExternalLink>.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-gold" /><span>When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-gold" /><span>With our affiliates or otherwise within our corporate group.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-gold" /><span>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service or policies, and to protect or defend the Services, our rights, and the rights of our users or others.</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Relationship with Shopify
              </h2>
              <p>
                The Services are hosted by Shopify, which collects and processes personal information about your access to and use of the Services in order to provide and improve the Services for you. Information you submit to the Services will be transmitted to and shared with Shopify as well as third parties that may be located in countries other than where you reside, in order to provide and improve the Services for you. In addition, to help protect, grow, and improve our business, we use certain Shopify enhanced features that incorporate data and information obtained from your interactions with our Store, along with other merchants and with Shopify. To provide these enhanced features, Shopify may make use of personal information collected about your interactions with our store, along with other merchants, and with Shopify. In these circumstances, Shopify is responsible for the processing of your personal information, including for responding to your requests to exercise your rights over use of your personal information for these purposes. To learn more about how Shopify uses your personal information and any rights you may have, you can visit the <ExternalLink href="https://www.shopify.com/legal/privacy/customers">Shopify Consumer Privacy Policy</ExternalLink>. Depending on where you live, you may exercise certain rights with respect to your personal information at the <ExternalLink href="https://privacy.shopify.com/en">Shopify Privacy Portal</ExternalLink>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Third Party Websites and Links
              </h2>
              <p>
                The Services may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Children's Data
              </h2>
              <p>
                The Services are not intended to be used by children, and we do not knowingly collect any personal information about children under the age of majority in your jurisdiction. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted. As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we "share" or "sell" (as those terms are defined in applicable law) personal information of individuals under 16 years of age.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Security and Retention of Your Information
              </h2>
              <p className="mb-4">
                Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee "perfect security." In addition, any information you send to us may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.
              </p>
              <p>
                How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide you with Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Your Rights and Choices
              </h2>
              <p className="mb-4">
                Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Right to Access / Know.</strong> You may have a right to request access to personal information that we hold about you.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Right to Delete.</strong> You may have a right to request that we delete personal information we maintain about you.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Right to Correct.</strong> You may have a right to request that we correct inaccurate personal information we maintain about you.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Right of Portability.</strong> You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Right to Opt out of Sale or Sharing for Targeted Advertising.</strong> Depending on where you reside, you may have a right to opt out of the "sale" or "share" of your personal information or to opt out of the processing of your personal information for purposes considered to be "targeted advertising", as defined in applicable privacy laws. You can exercise your rights to opt-out of those uses at the <ExternalLink href="https://privacy.shopify.com/en">Shopify Privacy Portal</ExternalLink>. Please note that if you visit our website with the Global Privacy Control opt-out preference signal enabled, depending on where you are, we will automatically treat this as a request to opt-out for the device and browser that you use to visit the website. If we are able to associate the device sending the signal to a Shopify account, we will apply the opt out request to the account as well. To learn more about Global Privacy Control, you can visit <ExternalLink href="https://globalprivacycontrol.org/">https://globalprivacycontrol.org/</ExternalLink>. Other than the Global Privacy Control, we do not recognize other "Do Not Track" signals that may be sent from your web browser or device.</span></li>
                <li className="flex items-start gap-3"><Bullet /><span><strong className="text-foreground">Managing Communication Preferences.</strong> We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.</span></li>
              </ul>

              <p className="mb-4">
                If you reside in the UK or European Economic Area, and subject to exceptions and limitations provided by local law, you may exercise the following rights in addition to the rights outlined above:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span><strong className="text-foreground">Objection to Processing and Restriction of Processing:</strong> You may have the right to ask us to stop or restrict our processing of personal information for certain purposes.</span></li>
                <li className="flex items-start gap-3"><Bullet color="bg-shaman-teal" /><span><strong className="text-foreground">Withdrawal of Consent:</strong> Where we rely on consent to process your personal information, you have the right to withdraw this consent. If you withdraw your consent, this will not affect the lawfulness of any processing based on your consent before its withdrawal.</span></li>
              </ul>

              <p>
                You may exercise any of these rights where indicated on the Services or by contacting us using the contact details provided below. To learn more about how Shopify uses your personal information and any rights you may have, including rights related to data processed by Shopify, you can visit <ExternalLink href="https://privacy.shopify.com/en">https://privacy.shopify.com/en</ExternalLink>.
              </p>

              <p className="mt-4">
                We will not discriminate against you for exercising any of these rights. We may need to verify your identity before we can process your requests, as permitted or required under applicable law. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Complaints
              </h2>
              <p>
                If you have complaints about how we process your personal information, please contact us using the contact details provided below. Depending on where you live, you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority. For the EEA, you can find a list of the responsible data protection supervisory authorities <ExternalLink href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">here</ExternalLink>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                International Transfers
              </h2>
              <p className="mb-4">
                Please note that we may transfer, store and process your personal information outside the country you live in.
              </p>
              <p>
                If we transfer your personal information out of the European Economic Area or the United Kingdom, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on this website, update the "Last updated" date and provide notice as required by applicable law.
              </p>
            </section>

            <section className="pt-4 border-t border-border/30">
              <h2 className="font-display text-2xl md:text-3xl font-medium mb-4 text-foreground">
                Contact
              </h2>
              <p>
                Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call or email us at <strong className="text-foreground">{CONTACT_EMAIL}</strong> or contact us at <strong className="text-foreground">{BUSINESS_ADDRESS}, AU</strong>. For the purpose of applicable data protection laws, we are the data controller of your personal information.
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
