import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Joshua Tree",
    review: "I described serpent energy rising through chakras. What arrived was exactly that medicine—I use it for ceremony now.",
  },
  {
    id: 2,
    name: "David C.",
    location: "Tulum",
    review: "As a facilitator, I needed something that held space. I typed 'grandmother ayahuasca patterns' and wept when I unrolled it.",
  },
  {
    id: 3,
    name: "Emma J.",
    location: "Bali",
    review: "The textures, the depth. It's like they reached into my DMT visions and pulled something real into this dimension.",
  },
  {
    id: 4,
    name: "Marcus W.",
    location: "Sedona",
    review: "Skeptical of AI for sacred work. But this felt collaborative—like the algorithm was channeling alongside me.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />
      
      {/* Orbs */}
      <div 
        className="floating-orb w-64 h-64 bottom-20 -left-32 bg-shaman-teal/10"
        style={{ animationDelay: "3s" }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-6 font-body">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">Words from </span>
            <span className="text-gradient italic">the circle</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
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
        
        {/* Rating summary */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground font-body">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-shaman-gold/80 text-shaman-gold/80" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground/60">from 2,400+ practitioners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;