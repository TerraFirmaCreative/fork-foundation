import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
            Frequently Asked Questions
          </h1>
          <div className="prose prose-lg text-muted-foreground font-body">
            <p>Content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
