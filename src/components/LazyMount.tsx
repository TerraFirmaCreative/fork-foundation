import { ReactNode, useEffect, useRef, useState } from "react";

interface LazyMountProps {
  children: ReactNode;
  /** Distance before the viewport to start mounting. */
  rootMargin?: string;
  /** Min height reserved while not yet mounted (prevents CLS). */
  minHeight?: number | string;
  className?: string;
}

/**
 * Defers mounting of off-screen children until they're about to scroll into view.
 * This keeps initial JS work and image requests focused on the above-the-fold hero,
 * dramatically improving LCP on heavy pages.
 */
const LazyMount = ({
  children,
  rootMargin = "600px 0px",
  minHeight = 400,
  className,
}: LazyMountProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
};

export default LazyMount;
