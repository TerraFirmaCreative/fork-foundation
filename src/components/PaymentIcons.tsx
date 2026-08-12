type Card = { name: string; bg: string; text?: string; textSize?: string; icon?: string };

const cards: Card[] = [
  { name: "Amex", bg: "#006FCF", text: "AMEX", textSize: "text-[5px]" },
  { name: "Apple Pay", bg: "#000", icon: "apple" },
  { name: "Google Pay", bg: "#fff", icon: "google" },
  { name: "Mastercard", bg: "#1A1F36", icon: "mastercard" },
  { name: "PayPal", bg: "#003087", icon: "paypal" },
  { name: "Shop Pay", bg: "#5A31F4", icon: "shop" },
  { name: "Union Pay", bg: "#E21836", text: "UP", textSize: "text-[6px]" },
  { name: "Visa", bg: "#1A1F71", text: "VISA", textSize: "text-[6px]" },
];


const PaymentIcons = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 flex-wrap ${className}`} aria-label="Accepted payment methods">
    {cards.map((card) => (
      <div
        key={card.name}
        className="w-8 h-5 rounded flex items-center justify-center border border-border/20 overflow-hidden shadow-sm"
        style={{ backgroundColor: card.bg }}
        title={card.name}
      >
        {card.text ? (
          <span className={`text-white font-bold ${card.textSize} tracking-wider leading-none`}>{card.text}</span>
        ) : card.icon === "apple" ? (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
        ) : card.icon === "google" ? (
          <span className="text-[6px] font-bold text-gray-700">G Pay</span>
        ) : card.icon === "mastercard" ? (
          <svg width="14" height="8" viewBox="0 0 20 12" aria-hidden="true"><circle cx="7" cy="6" r="5" fill="#EB001B" /><circle cx="13" cy="6" r="5" fill="#F79E1B" /><path d="M10 1.8a5 5 0 010 8.4 5 5 0 000-8.4z" fill="#FF5F00" /></svg>
        ) : card.icon === "paypal" ? (
          <span className="text-[5px] font-bold text-white tracking-tight">PayPal</span>
        ) : card.icon === "shop" ? (
          <span className="text-[5px] font-bold text-white tracking-tight">Shop</span>
        ) : null}
      </div>
    ))}
  </div>
);

export default PaymentIcons;
