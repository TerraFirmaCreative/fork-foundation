// Psychedelic icon components for How It Works section

export const ImagineIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="imagineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="50%" stopColor="#FFE66D" />
        <stop offset="100%" stopColor="#4ECDC4" />
      </linearGradient>
      <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    {/* Third eye / mind */}
    <circle cx="32" cy="32" r="20" fill="none" stroke="url(#imagineGrad)" strokeWidth="2" />
    <circle cx="32" cy="32" r="14" fill="none" stroke="url(#imagineGrad)" strokeWidth="1.5" opacity="0.7" />
    <circle cx="32" cy="32" r="8" fill="url(#imagineGrad)" />
    <circle cx="32" cy="32" r="3" fill="#1a1a2e" />
    {/* Radiating thought lines */}
    <path d="M32 8 L32 14" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 50 L32 56" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 32 L14 32" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 32 L56 32" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M15 15 L19 19" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M45 45 L49 49" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M49 15 L45 19" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 45 L15 49" stroke="url(#sparkGrad)" strokeWidth="2" strokeLinecap="round" />
    {/* Sparkles */}
    <circle cx="22" cy="12" r="1.5" fill="#FFE66D" />
    <circle cx="52" cy="22" r="1.5" fill="#4ECDC4" />
    <circle cx="12" cy="42" r="1.5" fill="#FF6B6B" />
  </svg>
);

export const GenerateIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="genGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
      <linearGradient id="genGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    {/* Spiral creation pattern */}
    <path 
      d="M32 10 Q50 10 50 28 Q50 46 32 46 Q18 46 18 32 Q18 20 28 20 Q38 20 38 28 Q38 36 32 36"
      fill="none" 
      stroke="url(#genGrad1)" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    {/* Magic wand / paintbrush */}
    <line x1="44" y1="44" x2="54" y2="54" stroke="url(#genGrad2)" strokeWidth="3" strokeLinecap="round" />
    <circle cx="44" cy="44" r="4" fill="url(#genGrad2)" />
    {/* Sparks from wand */}
    <circle cx="40" cy="48" r="2" fill="#FFE66D" />
    <circle cx="48" cy="40" r="2" fill="#4ECDC4" />
    <circle cx="50" cy="48" r="1.5" fill="#FF6B6B" />
    {/* Color dots being created */}
    <circle cx="14" cy="20" r="3" fill="#FF6B6B" opacity="0.8" />
    <circle cx="20" cy="12" r="2" fill="#FFE66D" opacity="0.8" />
    <circle cx="42" cy="14" r="2.5" fill="#4ECDC4" opacity="0.8" />
    <circle cx="52" cy="26" r="2" fill="#8B5CF6" opacity="0.8" />
  </svg>
);

export const CustomizeIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="custGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#FBBF24" />
      </linearGradient>
    </defs>
    {/* Heart shape made of swirls */}
    <path 
      d="M32 52 C12 36 12 20 22 16 C28 14 32 18 32 18 C32 18 36 14 42 16 C52 20 52 36 32 52Z"
      fill="none"
      stroke="url(#custGrad)"
      strokeWidth="2.5"
    />
    {/* Inner heart pattern */}
    <path 
      d="M32 44 C20 34 20 24 26 22 C30 21 32 24 32 24 C32 24 34 21 38 22 C44 24 44 34 32 44Z"
      fill="url(#custGrad)"
      opacity="0.3"
    />
    {/* Decorative elements */}
    <circle cx="22" cy="28" r="2" fill="#EC4899" />
    <circle cx="42" cy="28" r="2" fill="#FBBF24" />
    <circle cx="32" cy="34" r="2" fill="#F97316" />
    {/* Sparkles around */}
    <path d="M10 32 L14 30 L10 28 L14 30 L16 26 L14 30 L16 34 L14 30Z" fill="#EC4899" />
    <path d="M54 32 L50 30 L54 28 L50 30 L48 26 L50 30 L48 34 L50 30Z" fill="#FBBF24" />
    <circle cx="32" cy="10" r="2" fill="#F97316" />
  </svg>
);

export const ReceiveIcon = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full">
    <defs>
      <linearGradient id="recvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="50%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    {/* Gift box */}
    <rect x="14" y="28" width="36" height="26" rx="3" fill="none" stroke="url(#boxGrad)" strokeWidth="2.5" />
    <rect x="14" y="28" width="36" height="8" rx="2" fill="url(#boxGrad)" opacity="0.3" />
    {/* Ribbon */}
    <line x1="32" y1="28" x2="32" y2="54" stroke="url(#recvGrad)" strokeWidth="3" />
    <line x1="14" y1="34" x2="50" y2="34" stroke="url(#recvGrad)" strokeWidth="3" />
    {/* Bow */}
    <path d="M24 28 Q24 18 32 20 Q40 18 40 28" fill="none" stroke="url(#recvGrad)" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="24" r="3" fill="url(#recvGrad)" />
    {/* Magic sparkles coming out */}
    <circle cx="20" cy="14" r="2" fill="#FFE66D" />
    <circle cx="32" cy="10" r="2.5" fill="#4ECDC4" />
    <circle cx="44" cy="14" r="2" fill="#EC4899" />
    <path d="M26 8 L28 12 L24 12Z" fill="#8B5CF6" />
    <path d="M38 8 L40 12 L36 12Z" fill="#10B981" />
  </svg>
);
