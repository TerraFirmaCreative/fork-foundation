import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocaleLink from "@/components/LocaleLink";
import hudson1 from "@/assets/hudson-1.jpg";

const blogPosts = [
  {
    slug: "hudson-in-margaret-river",
    title: "Hudson in Margaret River",
    subtitle: "South West Australia",
    excerpt:
      "Hudson is originally from Canada, but at the moment you'll find her on the other side of the world — travelling slowly through South West Australia.",
    image: hudson1,
    imageAlt: "Hudson practising yoga on the beach at Bunker Bay",
    category: "Unique Yogi of the Week",
    date: "25 February 2026",
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
            Stories from our community — where they're practising, what they're using, and the rituals that keep them grounded.
          </p>
        </div>

        <div className="grid gap-10">
          {blogPosts.map((post) => (
            <LocaleLink
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border border-border/40 rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm hover:border-shaman-gold/30 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-0">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center space-y-4">
                  <p className="text-xs tracking-[0.3em] uppercase text-shaman-gold/70 font-body">
                    {post.category}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                    {post.title}
                  </h2>
                  <p className="font-display text-base text-muted-foreground/50 italic">
                    {post.subtitle}
                  </p>
                  <p className="text-foreground/60 font-body leading-relaxed text-sm md:text-base line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-muted-foreground/40 font-body pt-2">
                    {post.date}
                  </p>
                </div>
              </div>
            </LocaleLink>
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
