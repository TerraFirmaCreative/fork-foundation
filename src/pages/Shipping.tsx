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
              Every Unique Yoga Mat is made to order and crafted with care in Nevada, USA.
            </p>
            <p>
              Your mat is printed specifically for you, with production beginning shortly after your order is placed.
            </p>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Production</h3>
              <p>
                Please allow up to <strong className="text-foreground">3 business days</strong> for your mat to be carefully created and prepared for dispatch.
              </p>
              <p className="mt-2">
                Because each piece is made individually, this ensures quality, precision, and attention to detail.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Delivery Timeframes</h3>
              <p>Once shipped, most mats arrive within:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li><strong className="text-foreground">USA</strong> — around 1 week</li>
                <li><strong className="text-foreground">Europe & UK</strong> — around 2 weeks</li>
                <li><strong className="text-foreground">Australia</strong> — up to 3 weeks</li>
              </ul>
              <p className="mt-2">
                Delivery times can vary slightly depending on location and customs processing for international orders, but most deliveries fall within these windows.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Delivery Details</h3>
              <p>
                Complimentary worldwide delivery is included with every mat.
              </p>
              <p className="mt-2">
                As soon as your order is on its way, you'll receive tracking details so you can follow its journey to your door.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">International Orders</h3>
              <p>
                As each mat is crafted in the United States and shipped internationally, some countries may apply local import taxes upon arrival.
              </p>
              <p className="mt-2">
                For deliveries to the UK, European Union, or Canada, your parcel may be subject to local import taxes (such as VAT or GST) and a small carrier handling fee, depending on your country's regulations.
              </p>
              <p className="mt-2">
                These charges are determined by local customs authorities and are not set by us. If applicable, they are payable by the customer at delivery.
              </p>
              <p className="mt-2">
                If you're unsure about import regulations in your country, we recommend checking with your local customs office prior to ordering.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-foreground mb-3">Questions?</h3>
              <p>We're always happy to help.</p>
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
