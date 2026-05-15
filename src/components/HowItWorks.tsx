import { useEffect, useState } from "react";
import { FractalGrid } from "./SacredGeometry";
import { fetchCollectionProducts } from "@/lib/shopify";
import { useLocale } from "@/lib/i18n";
import { formatPrice } from "@/lib/utils";

const getSteps = (priceLabel: string) => [
  {
    number: "01",
    title: "Browse the Collection",
    color: "text-shaman-violet",
    lines: [
      { text: "24 original designs", bold: "" },
      { text: "Suede microfibre surface", bold: "" },
      { text: "Natural rubber base", bold: "" },
    ],
  },
  {
    number: "02",
    title: "Place Your Order",
    color: "text-shaman-magenta",
    lines: [
      { text: `${priceLabel} per mat`, bold: "" },
      { text: "Free worldwide shipping", bold: "" },
      { text: "Secure checkout", bold: "" },
    ],
  },
  {
    number: "03",
    title: "Delivery",
    color: "text-shaman-gold",
    deliveryLines: [
      { country: "USA", time: "around 1 week" },
      { country: "UK/Europe", time: "around 2 weeks" },
      { country: "Australia", time: "up to 3 weeks" },
    ],
    lines: [],
  },
  {
    number: "04",
    title: "Now the Fun Part",
    color: "text-shaman-violet",
    lines: [
      { text: "Your mat has arrived!", bold: "" },
      { text: "Unroll. Breathe. Practice", bold: "" },
      { text: "We hope you love it as much as we do", bold: "" },
    ],
  },
];

const HowItWorks = () => {
  const { country } = useLocale();
  const [priceLabel, setPriceLabel] = useState("$149 AUD");

  useEffect(() => {
    fetchCollectionProducts("featured-home", 1, country).then((products) => {
      const price = products[0]?.node.variants.edges[0]?.node.price
        || products[0]?.node.priceRange.minVariantPrice;
      if (price) {
        setPriceLabel(formatPrice(price));
      }
    }).catch(() => { });
  }, [country]);

  const steps = getSteps(priceLabel);
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <div className="texture-overlay" />
      <div className="absolute inset-0 shaman-bg" />

      {/* Fractal grid background */}
      <FractalGrid />

      {/* Subtle orbs */}
      <div
        className="floating-orb w-80 h-80 -top-40 right-1/4 bg-shaman-magenta/08"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="floating-orb w-64 h-64 -bottom-32 left-1/4 bg-shaman-teal/06"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/70 mb-4 md:mb-6 font-body">
            Simple Process
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            <span className="text-foreground">How it </span>
            <span className="text-gradient italic">works</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:gap-8">
          {/* Full-width horizontal line through numbers */}
          <div className="hidden lg:block absolute top-[1.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-shaman-violet/30 to-transparent" />
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group text-center md:text-left flex flex-col items-center md:items-start"
            >
              {/* Step number */}
              <span className="block font-display text-4xl md:text-5xl text-foreground/30 mb-2 md:mb-4 group-hover:text-foreground/50 transition-colors duration-700">
                {step.number}
              </span>

              {/* Fixed height title area */}
              <div className="h-auto md:h-[3.5rem] flex flex-col items-center md:items-start justify-start mb-1 md:mb-0">
                <h3 className={`font-display text-2xl md:text-[1.75rem] font-normal tracking-tight ${step.color}`}>
                  {step.title}
                </h3>
              </div>


              {step.deliveryLines && (
                <div className="space-y-2 mt-3">
                  {step.deliveryLines.map((dl, i) => (
                    <div key={i} className="flex gap-3 justify-center md:justify-start">
                      <div className="w-0.5 h-6 mt-0.5 rounded-full bg-gradient-to-b from-shaman-violet/40 via-shaman-magenta/40 to-shaman-gold/40 shrink-0" />
                      <p className="text-[17px] md:text-[18px] text-foreground/90 font-body leading-relaxed">
                        {dl.country}—{dl.time}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 mt-3">
                {step.lines.map((line, i) => (
                  <div key={i} className="flex gap-3 justify-center md:justify-start">
                    <div className="w-0.5 h-6 mt-0.5 rounded-full bg-gradient-to-b from-shaman-violet/40 via-shaman-magenta/40 to-shaman-gold/40 shrink-0" />
                    <p className="text-[17px] md:text-[18px] text-foreground/90 font-body leading-relaxed whitespace-nowrap">
                      {line.text}{line.text ? " " : ""}{line.bold}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;