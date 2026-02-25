import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 font-body">
            Stories & Insights
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground/80 font-body max-w-xl mx-auto">
            Thoughts on yoga, design, wellness, and the things that inspire us.
          </p>
        </div>


        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground/50 font-body">
            More posts coming soon
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
