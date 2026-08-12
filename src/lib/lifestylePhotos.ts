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


// Newly added community shots (CDN hosted).
import n12 from "@/assets/lifestyle-new-12.png.asset.json";
import n13 from "@/assets/lifestyle-new-13.png.asset.json";
import n14 from "@/assets/lifestyle-new-14.png.asset.json";
import n15 from "@/assets/lifestyle-new-15.png.asset.json";

export const newLifestylePhotos: LifestylePhoto[] = [
  { src: n12.url, alt: "Seated meditation at sunset on a Cosmic Igloo mat on the beach" },
  { src: n13.url, alt: "Headstand on a Cosmic Igloo mat on grass in the park" },
  { src: n14.url, alt: "Cosmic Igloo mandala yoga mat laid out on a forest trail" },
  { src: n15.url, alt: "Warrior pose on a Cosmic Igloo mat on white sand by the ocean" },
];

/** Fisher-Yates shuffle — returns a new array. */
function shuffle(list: LifestylePhoto[]): LifestylePhoto[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Shuffles the base set and spaces the newer photos evenly through it so no two new shots sit side by side. */
export function shuffleLifestylePhotos(list: LifestylePhoto[] = lifestylePhotos): LifestylePhoto[] {
  const base = shuffle(list);
  const extras = shuffle(newLifestylePhotos);
  const out: LifestylePhoto[] = [];
  const gap = Math.max(2, Math.floor(base.length / (extras.length + 1)));
  let e = 0;
  base.forEach((photo, i) => {
    out.push(photo);
    if (e < extras.length && (i + 1) % gap === 0) out.push(extras[e++]);
  });
  while (e < extras.length) out.push(extras[e++]);
  return out;
}

