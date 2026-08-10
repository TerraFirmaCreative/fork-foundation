// Responsive AVIF + WebP variants generated at build time by vite-imagetools.
// `as=picture` returns { sources: { avif, webp }, img: { src, w, h } }.
import photo1 from "@/assets/community/photo-1.webp?w=300;500;800&format=avif;webp&as=picture";
import photo2 from "@/assets/community/photo-2.webp?w=300;500;800&format=avif;webp&as=picture";
import photo3 from "@/assets/community/photo-3.webp?w=300;500;800&format=avif;webp&as=picture";
import photo4 from "@/assets/community/photo-4.webp?w=300;500;800&format=avif;webp&as=picture";
import photo5 from "@/assets/community/photo-5.webp?w=300;500;800&format=avif;webp&as=picture";
import photo6 from "@/assets/community/photo-6.webp?w=300;500;800&format=avif;webp&as=picture";
import photo7 from "@/assets/community/photo-7.webp?w=300;500;800&format=avif;webp&as=picture";
import photo8 from "@/assets/community/photo-8.webp?w=300;500;800&format=avif;webp&as=picture";

export const FEATURED_PRODUCT_HANDLE =
  "beneath-the-waves-humpback-elegance-c8359a92-110f-4eae-88da-29b234d4c729-copy";

export type Picture = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

export type CommunityPhoto = { pic: Picture; alt: string; position: string };

export const allCommunityPhotos: CommunityPhoto[] = [
  { pic: photo1 as unknown as Picture, alt: "Yogi in meditation pose at sunset on Cosmic Igloo mat", position: "center 60%" },
  { pic: photo2 as unknown as Picture, alt: "Yogi smiling on a vibrant mandala yoga mat at the beach", position: "center 25%" },
  { pic: photo3 as unknown as Picture, alt: "Seated meditation facing the ocean on a Cosmic Igloo mat", position: "center 55%" },
  { pic: photo4 as unknown as Picture, alt: "Headstand on a mandala yoga mat in the park", position: "center 55%" },
  { pic: photo5 as unknown as Picture, alt: "Backbend on a vibrant red mandala mat at golden hour", position: "center 55%" },
  { pic: photo6 as unknown as Picture, alt: "Yogi carrying her rolled Cosmic Igloo mat at sunset", position: "center 55%" },
  { pic: photo7 as unknown as Picture, alt: "Headstand in the park with sun flare on Cosmic Igloo mat", position: "center 55%" },
  { pic: photo8 as unknown as Picture, alt: "Yogi greeting the sunrise on the beach", position: "center 55%" },
];

/** Fisher-Yates shuffle — returns a new array. */
export function shufflePhotos(list: CommunityPhoto[] = allCommunityPhotos): CommunityPhoto[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
