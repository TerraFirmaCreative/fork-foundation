import { cn } from "@/lib/utils";
import { useState, useMemo } from "react";
import { thumbHashToDataURL } from "thumbhash";

function decodeBase64ThumbHash(base64: string): string | null {
  try {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return thumbHashToDataURL(bytes);
  } catch {
    return null;
  }
}

interface ThumbhashImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  thumbhash?: string | null;
  /** Extra classes on the wrapper div */
  wrapperClassName?: string;
}

const ThumbhashImage = ({ thumbhash, wrapperClassName, className, ...imgProps }: ThumbhashImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const placeholderUrl = useMemo(
    () => (thumbhash ? decodeBase64ThumbHash(thumbhash) : null),
    [thumbhash]
  );

  return (
    <div className={`relative overflow-hidden ${wrapperClassName ?? ""}`}>
      {placeholderUrl && !loaded && (
        <img
          src={placeholderUrl}
          alt=""
          aria-hidden
          className={cn("absolute inset-0 w-full h-full object-cover z-[1]", className)}
        />
      )}
      <img
        {...imgProps}
        className={cn("relative z-[2]", className)}
        onLoad={(e) => {
          setLoaded(true);
          imgProps.onLoad?.(e);
        }}
      />
    </div>
  );
};

export default ThumbhashImage;
