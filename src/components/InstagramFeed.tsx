import { allCommunityPhotos } from "@/lib/communityPhotos";

const INSTAGRAM_URL = "https://www.instagram.com/cosmic.igloo";

const InstagramFeed = () => {
  const photos = allCommunityPhotos.slice(0, 8);

  return (
    <section className="relative py-12 md:py-16 px-6" aria-labelledby="instagram-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-shaman-gold/85 mb-3 font-body">
            Instagram
          </p>
          <h2 id="instagram-heading" className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-gradient">@cosmic.igloo</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-xl border border-border/40"
              aria-label="View this post on our Instagram"
            >
              <picture>
                {Object.entries(photo.pic.sources).map(([format, srcset]) => (
                  <source key={format} type={`image/${format}`} srcSet={srcset} sizes="(min-width: 640px) 25vw, 50vw" />
                ))}
                <img
                  src={photo.pic.img.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: photo.position }}
                />
              </picture>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-shaman-gold/40 text-[0.7rem] sm:text-xs tracking-[0.32em] uppercase text-shaman-gold hover:text-foreground transition-colors duration-500 font-body"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
