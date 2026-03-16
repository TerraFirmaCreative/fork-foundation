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
}

const ThumbhashImage = ({ thumbhash, className, style, ...imgProps }: ThumbhashImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const placeholderUrl = useMemo(
    () => (thumbhash ? decodeBase64ThumbHash(thumbhash) : null),
    [thumbhash]
  );

  return (
    <div className="relative overflow-hidden" style={{ display: "contents" }}>
      {placeholderUrl && !loaded && (
        <img
          src={placeholderUrl}
          alt=""
          aria-hidden
          className={className}
          style={{ ...style, position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }}
        />
      )}
      <img
        {...imgProps}
        className={className}
        style={style}
        onLoad={(e) => {
          setLoaded(true);
          imgProps.onLoad?.(e);
        }}
      />
    </div>
  );
};

export default ThumbhashImage;
