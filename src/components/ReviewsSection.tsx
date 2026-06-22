import { Star } from "lucide-react";
import { FractalGrid } from "./SacredGeometry";

const reviews = [
  {
    id: 1,
    name: "Philippa W.",
    review: "I love my Whale yoga mat. The bright colours are really uplifting and calming at the same time. It's very comfortable and a good long length. I find the design really inspiring.",
    date: "3 weeks ago",
  },
  {
    id: 2,
    name: "Hudson R.",
    review: "I was drawn to my mat the moment I saw the design. Additionally, the feel is incredible, with great texture, grip, and thickness. Having such a beautiful mat naturally brings more excitement and motivation to the start of each practice.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Clare W.",
    review: "A high quality, beautifully made yoga mat. Came with a handy carry strap. The vibrant pattern comes alive in the sunshine, which makes practising yoga a joy. Would highly recommend this mat.",
    date: "2 months ago",
  },
  {
    id: 4,
    name: "Kata S.",
    review: "I've been using the Cosmic Igloo yoga mat daily in my yoga classes for several months now. I was initially drawn to its beautiful design—the pattern really spoke to me, and even now, every time I unroll it before a class, it fills me with joy.\n\nThe quality of the mat is flawless. It doesn't slip or stretch, and it lies perfectly flat on the floor. It feels stable and supportive throughout every practice.\n\nFor me, it has become more than just a yoga mat—it's a safe space and brings a true \"arriving home\" feeling the moment I step onto it.",
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
            <span className="text-foreground">What people are </span>
            <span className="text-gradient italic">saying</span>
          </h2>
          
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
