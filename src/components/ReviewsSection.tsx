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

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

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
