import { cn } from "@/lib/utils";
import { forwardRef, useMemo, useState } from "react";
import { thumbHashToDataURL } from "thumbhash";
import { Image, type ImageProps } from "@unpic/react";

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

type ThumbhashImageProps = ImageProps & {
  thumbhash?: string | null;
  /** Extra classes on the wrapper div */
  wrapperClassName?: string;
};

const ThumbhashImage = forwardRef<HTMLImageElement, ThumbhashImageProps>(
  ({ thumbhash, wrapperClassName, className, ...imgProps }, ref) => {

    const placeholderUrl = useMemo(
      () => (thumbhash ? decodeBase64ThumbHash(thumbhash) : null),
      [thumbhash]
    );

    const [loaded, setLoaded] = useState<boolean>(false)

    return (
      <div className={`relative overflow-hidden ${wrapperClassName ?? ""}`}>
        <Image
          {...imgProps}
          ref={ref}
          unstyled
          alt={loaded ? imgProps.alt : ""}
          className={cn("relative z-2", className)}
          onLoad={(e) => {
            setLoaded(true)
            imgProps.onLoad?.(e);
          }}
        />
        {placeholderUrl && (
          <img
            src={placeholderUrl}
            alt=""
            aria-hidden
            className={cn("absolute top-0 inset-0 w-full h-full object-cover z-1", className)}
          />
        )}
      </div>
    );
  }
);

ThumbhashImage.displayName = "ThumbhashImage";

export default ThumbhashImage;
