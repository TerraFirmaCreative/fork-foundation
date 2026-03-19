import { Star } from "lucide-react";
import { FractalGrid } from "./SacredGeometry";

const reviews = [
  {
    id: 1,
    name: "David M.",
    review: "The design really is beautiful. It's one of the main reasons I chose this mat, and it still feels special every time I use it.",
    date: "3 weeks ago",
  },
  {
    id: 2,
    name: "Sarah C.",
    review: "It's comfortable and supportive, especially for longer sessions. There's enough grip without it feeling sticky.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Marcus W.",
    review: "It feels like a well-made mat that's been thought through. I use it a lot and it still looks great.",
    date: "2 months ago",
  },
  {
    id: 4,
    name: "Emma J.",
    review: "It's a simple design, but it's done beautifully. I still get comments on it.",
    date: "3 months ago",
  },
];


const ReviewsSection = () => {
  return (
    <section id="reviews" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      <FractalGrid />
      
      <div 
        className="floating-orb w-64 h-64 bottom-20 -left-32 bg-shaman-teal/08"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            Customer Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">Loved by </span>
            <span className="text-gradient italic">yogis worldwide</span>
          </h2>
          
          {/* Google aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <GoogleIcon />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-shaman-gold/90 text-shaman-gold/90" />
              ))}
            </div>
            <span className="text-sm text-foreground/60 font-body">5.0 based on Google Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group p-8 rounded-md bg-card/40 border border-border/30 hover:border-shaman-violet/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-shaman-gold/80 text-shaman-gold/80" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50 font-body">
                  <GoogleIcon />
                  <span>Posted on Google</span>
                </div>
              </div>
              
              <p className="font-display text-lg text-foreground/90 italic leading-relaxed mb-8">
                "{review.review}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 border border-shaman-violet/20 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground/70 font-body">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground font-body">{review.name}</p>
                    <p className="text-xs text-muted-foreground/40 font-body">{review.date}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-shaman-teal/60 font-body border border-shaman-teal/20 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
