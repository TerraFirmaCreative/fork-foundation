# Hero with real yogis on the mats

Bring lifestyle imagery into the main hero so a first-time visitor instantly sees beautiful yoga mats being used — without losing the cosmic, gold-on-black identity the site is built on.

## The design

**A slow-drifting film strip of model shots, sitting under the headline.**

```text
        A WARM SPACE IN THE INFINITE
        Beautiful and grippy
              yoga mats.
      Designed to inspire. Made to perform.

   ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐
   │ 🧘 │ │ 🧘 │ │ 🧘 │ │ 🧘 │ │ 🧘 │ │ 🧘 │   ← drifts slowly right→left
   └────┘ └────┘ └────┘ └────┘ └────┘ └────┘
              [ FIND YOUR MAT ↓ ]
```

- A single row of tall 3:4 portrait tiles spanning the full hero width, edges fading into black so it reads as part of the cosmic space rather than a boxed-in widget.
- The row drifts continuously and very slowly sideways (marquee), pausing on hover. It stops entirely for visitors with reduced-motion settings.
- Tiles carry a soft gold hairline on hover and a subtle violet glow, matching the gallery and CTA treatment already used across the site.
- Each tile links straight to a product page, so the hero itself becomes a shopping entry point (conversion, not decoration).
- The existing starfield, nebula, flower-of-life and mandala layers stay — the strip sits above them with a gentle dark scrim so the headline keeps full contrast.

**Mobile:** the strip shows roughly three tiles at a time, shorter in height, positioned below the headline and above the CTA so the whole composition still fits the first screen. Motion is lighter to protect the mobile performance work already done.

## Images used

The eight existing community photos of real yogis on Cosmic Igloo mats (already optimised to AVIF/WebP at multiple sizes) — the same set powering the "In the wild, on the mat" section, so the hero and that section reinforce each other. The set is shuffled per load so returning visitors see variety.

Optional follow-up: mix in a few flat mat-design shots from the live Shopify home collection between the lifestyle photos, so the hero shows both the artwork and the artwork in use.

## Copy

Headline, sub-line and CTA stay exactly as they are. One small addition: a whisper caption under the strip — "Real practices. Real mats." — in the same gold letterspaced style as the existing eyebrow line. This can be dropped if it feels like clutter once rendered.

## Performance and accessibility

- Hero images load eagerly at small widths only (the tiles are small), with width/height set so nothing shifts — protecting the CLS and LCP gains already made.
- Marquee uses a CSS transform animation, no JavaScript loop, so it costs nothing on the main thread.
- Every tile keeps a descriptive alt text and an accessible link label.

## Technical notes

- Edit `src/components/HeroSection.tsx`: add an image-strip layer between the vignette (layer 8) and the centred content block, and place the strip inside the content column below the sub-line.
- Reuse the responsive `?w=...&format=avif;webp&as=picture` imports already used by `src/components/CommunityRow.tsx`; extract the photo list + shuffle into a small shared module (e.g. `src/lib/communityPhotos.ts`) so hero and CommunityRow share one source.
- Marquee keyframes go in the component's existing local `<style>` block, alongside `enter-cta-shimmer`, with a `motion-reduce` guard.
- Hero section height stays `h-[100svh]`; the strip is sized in `vh`/fixed px so the composition never overflows the fold.
