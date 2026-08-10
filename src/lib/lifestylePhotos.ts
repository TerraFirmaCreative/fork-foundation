// Lifestyle shots of real yogis on Cosmic Igloo mats (Shopify CDN hosted).
export type LifestylePhoto = { src: string; alt: string };

export const lifestylePhotos: LifestylePhoto[] = [
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-1.webp?v=1773738118", alt: "Yoga pose in nature on a Cosmic Igloo mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-2.webp?v=1773738118", alt: "Warrior pose on a mandala yoga mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-3.webp?v=1773738117", alt: "Hand gripping a vibrant mandala yoga mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-4.webp?v=1773738118", alt: "Forward fold yoga pose on a Cosmic Igloo mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-6.webp?v=1773738117", alt: "Hand resting on a colourful sacred geometry mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-5.webp?v=1773738117", alt: "Upward dog pose on a Cosmic Igloo mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-7.webp?v=1773738118", alt: "Standing forward bend on a mandala yoga mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-8.webp?v=1773738118", alt: "Foot detail gripping a Cosmic Igloo mat" },
  { src: "https://cdn.shopify.com/s/files/1/0789/0052/7412/files/lifestyle-9.webp?v=1773738117", alt: "Close up of Cosmic Igloo mat artwork texture" },
];

/** Fisher-Yates shuffle — returns a new array. */
export function shuffleLifestylePhotos(list: LifestylePhoto[] = lifestylePhotos): LifestylePhoto[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
