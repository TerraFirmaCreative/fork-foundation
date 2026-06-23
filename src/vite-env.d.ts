/// <reference types="vite/client" />
/// <reference types="vite-imagetools/client" />

// Fallback for vite-imagetools `as=picture` query — Vite resolves these at build time.
declare module "*&as=picture" {
  const value: {
    sources: Record<string, string>;
    img: { src: string; w: number; h: number };
  };
  export default value;
}

declare module "*&as=srcset" {
  const value: string;
  export default value;
}
