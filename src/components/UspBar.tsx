const USPS = [
  "Free worldwide shipping",
  "Original artwork, made to order",
  "Printed & dispatched in the USA",
  "Secure checkout",
];

/** Slim trust strip shown directly under the header on every page. */
const UspBar = () => (
  <div className="relative border-b border-shaman-gold/15 bg-background/80">
    <div className="max-w-6xl mx-auto px-6 py-2 overflow-x-auto no-scrollbar">
      <ul className="flex items-center justify-start md:justify-center gap-x-5 md:gap-x-8 whitespace-nowrap">
        {USPS.map((usp, i) => (
          <li key={usp} className="flex items-center gap-x-5 md:gap-x-8">
            {i > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-shaman-gold/50" />}
            <span className="font-body text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              {usp}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default UspBar;
