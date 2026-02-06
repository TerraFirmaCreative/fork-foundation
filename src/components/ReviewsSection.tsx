import { Star } from "lucide-react";
import { FractalGrid } from "./SacredGeometry";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Los Angeles, CA",
    review: "I described a sunset with sacred geometry patterns and received exactly what I imagined. The quality is incredible—perfect grip for hot yoga.",
  },
  {
    id: 2,
    name: "David C.",
    location: "Austin, TX",
    review: "As a yoga instructor, I wanted something unique for my studio. The fractal mandala design I created gets compliments every single class!",
  },
  {
    id: 3,
    name: "Emma J.",
    location: "London, UK",
    review: "The colors, the detail—it's like they pulled the design straight from my imagination. Best yoga mat I've ever owned.",
  },
  {
    id: 4,
    name: "Marcus W.",
    location: "Vancouver, BC",
    review: "Skeptical at first, but the AI understood exactly what I meant by 'cosmic ocean waves.' The natural rubber feel is premium quality.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Fractal background */}
      <FractalGrid />
      
      {/* Orbs */}
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group p-8 rounded-md bg-card/40 border border-border/30 hover:border-shaman-violet/30 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-shaman-gold/80 text-shaman-gold/80" />
                ))}
              </div>
              
              <p className="font-display text-lg text-foreground/90 italic leading-relaxed mb-8">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-shaman-violet/20 to-shaman-magenta/20 border border-shaman-violet/20" />
                <div>
                  <p className="text-sm font-medium text-foreground font-body">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ReviewsSection;