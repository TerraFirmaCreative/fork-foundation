import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GalleryMagnifierProps {
  /** High-resolution image URL used as the zoom source */
  zoomSrc: string;
  /** Children render the underlying (low-res) image */
  children: React.ReactNode;
  className?: string;
  lensSize?: number;
  zoom?: number;
  prefetch?: boolean
}

const GalleryMagnifier = ({
  zoomSrc,
  children,
  className,
  lensSize = 160,
  zoom = 2.4,
  prefetch = false
}: GalleryMagnifierProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [supportsHover, setSupportsHover] = useState(false);
  const [zoomLoaded, setZoomLoaded] = useState(false);

  // Detect hover/fine pointer once, client-side. Avoids touch devices ever
  // attaching the lens (and prevents the high-res image from being fetched).
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHover(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Lazy-fetch the high-res zoom image only on first hover, never on touch.
  useEffect(() => {
    if (!supportsHover || (!prefetch && !active) || zoomLoaded) return;
    const img = new Image();
    img.src = zoomSrc;
    img.onload = () => setZoomLoaded(true);
  }, [supportsHover, active, zoomLoaded, zoomSrc]);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    });
  }, []);

  const lensX = pos.x - lensSize / 2;
  const lensY = pos.y - lensSize / 2;
  const bgX = -(pos.x * zoom - lensSize / 2);
  const bgY = -(pos.y * zoom - lensSize / 2);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      onMouseEnter={(e) => {
        if (!supportsHover) return;
        handleMove(e);
        setActive(true);
      }}
      onMouseMove={(e) => {
        if (!supportsHover) return;
        handleMove(e);
      }}
      onMouseLeave={() => setActive(false)}
    >
      {children}
      {supportsHover && zoomLoaded && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute z-30 rounded-full border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-black/40 backdrop-saturate-150 transition-opacity duration-150",
            active ? "opacity-100" : "opacity-0"
          )}
          style={{
            width: lensSize,
            height: lensSize,
            left: lensX,
            top: lensY,
            backgroundImage: zoomLoaded ? `url("${zoomSrc}")` : undefined,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${pos.w * zoom}px ${pos.h * zoom}px`,
            backgroundPosition: `${bgX}px ${bgY}px`,
            backgroundColor: "#000",
          }}
        />
      )}
    </div>
  );
};

export default GalleryMagnifier;
