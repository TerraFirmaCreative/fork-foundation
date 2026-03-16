import React, { MouseEvent, useState, useMemo, ImgHTMLAttributes } from 'react';
import { thumbHashToDataURL } from 'thumbhash';

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

const MAGNIFIER_SIZE = 300;
const ZOOM_LEVEL = 2.5;

interface ImageMagnifierProps extends ImgHTMLAttributes<HTMLImageElement> {
  thumbhash?: string | null;
}

const ImageMagnifier = ({ thumbhash, ...props }: ImageMagnifierProps) => {
  const [zoomable, setZoomable] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

  const placeholderUrl = useMemo(
    () => (thumbhash ? decodeBase64ThumbHash(thumbhash) : null),
    [thumbhash]
  );

  const handleMouseEnter = (e: MouseEvent) => {
    const element = e.currentTarget;
    const { width, height } = element.getBoundingClientRect();
    setImageSize({ width, height });
    setZoomable(true);
    updatePosition(e);
  };

  const handleMouseLeave = (e: MouseEvent) => {
    setZoomable(false);
    updatePosition(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    updatePosition(e);
  };

  const updatePosition = (e: MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({
      x: -x * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      y: -y * ZOOM_LEVEL + MAGNIFIER_SIZE / 2,
      mouseX: x - MAGNIFIER_SIZE / 2,
      mouseY: y - MAGNIFIER_SIZE / 2,
    });
  };

  return (
    <div
      className="relative w-full h-full flex justify-center items-center"
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <img {...props} />
      <div
        style={{
          backgroundPosition: `${Math.max(Math.min(0, position.x), -imageSize.width * ZOOM_LEVEL + MAGNIFIER_SIZE)}px ${Math.max(Math.min(0, position.y), -imageSize.height * ZOOM_LEVEL + MAGNIFIER_SIZE)}px`,
          backgroundImage: `url("${props.src}")`,
          backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
          backgroundRepeat: 'no-repeat',
          display: zoomable ? 'block' : 'none',
          top: `${position.mouseY}px`,
          left: `${position.mouseX}px`,
          width: `${MAGNIFIER_SIZE}px`,
          height: `${MAGNIFIER_SIZE}px`,
        }}
        className="z-50 border rounded-full pointer-events-none absolute overflow-hidden border-border/50 shadow-lg"
      />
    </div>
  );
};

export default ImageMagnifier;
