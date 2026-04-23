import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative py-20 px-6 overflow-hidden">
        <div className="texture-overlay" />
        <div className="absolute inset-0 shaman-bg" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 text-foreground">
            Contact
          </h1>
          
          <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
            <p className="text-lg">
              If you have a question about your order, our products, or anything else, you can reach us at:
            </p>
            
            <p>
              <a href="mailto:hello@cosmicigloo.com" className="text-foreground font-medium hover:text-shaman-violet transition-colors">
                hello@cosmicigloo.com
              </a>
            </p>
            
            <p>
              We aim to respond to all enquiries as quickly as possible.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
