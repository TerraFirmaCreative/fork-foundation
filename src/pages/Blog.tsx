import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "5 Ways Your Yoga Mat Can Transform Your Practice",
    excerpt: "Discover how the right mat can deepen your connection to your practice and elevate every session.",
    date: "February 20, 2026",
    category: "Practice",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "The Art Behind Our Mat Designs",
    excerpt: "A look into the creative process and the artists who bring our unique mat designs to life.",
    date: "February 15, 2026",
    category: "Design",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Natural Rubber vs Synthetic: Why Material Matters",
    excerpt: "Understanding the difference between natural and synthetic yoga mats, and why we chose premium natural rubber.",
    date: "February 10, 2026",
    category: "Materials",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "How to Care for Your Suede Microfibre Yoga Mat",
    excerpt: "Simple tips to keep your mat looking beautiful and performing at its best for years to come.",
    date: "February 5, 2026",
    category: "Care",
    readTime: "3 min read",
  },
  {
    id: 5,
    title: "Morning Routines: Building a Consistent Yoga Practice",
    excerpt: "Practical advice for making yoga a daily habit, even when life gets busy.",
    date: "January 28, 2026",
    category: "Wellness",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Yoga Retreats We Love: Our Top Picks for 2026",
    excerpt: "From Bali to Byron Bay, our curated list of transformative yoga retreats worth exploring.",
    date: "January 20, 2026",
    category: "Travel",
    readTime: "7 min read",
  },
];

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

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group border border-border/30 rounded-lg p-6 md:p-8 hover:border-shaman-gold/30 transition-all duration-300 bg-card/30"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs tracking-[0.2em] uppercase text-shaman-gold/70 font-body">
                  {post.category}
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs text-muted-foreground/60 font-body">
                  {post.date}
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs text-muted-foreground/60 font-body">
                  {post.readTime}
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl font-medium mb-3 group-hover:text-shaman-gold/90 transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground/70 font-body leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
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
