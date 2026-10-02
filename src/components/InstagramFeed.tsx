import { allCommunityPhotos } from "@/lib/communityPhotos";
import rolledMatSunset from "@/assets/instagram-rolled-mat-sunset.png.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/cosmic.igloo";

const tileClass = "group relative block aspect-4/5 overflow-hidden";
const imgClass = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

const InstagramFeed = () => {
  const photos = allCommunityPhotos.slice(0, 8);

  return (
    <section className="relative py-12 md:py-16 px-6" aria-labelledby="instagram-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="instagram-heading" className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-shaman-gold">@cosmic.igloo</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[2px] overflow-hidden">
          {photos.map((photo, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={tileClass}
              aria-label="View this post on our Instagram"
            >
              <picture>
                {Object.entries(photo.pic.sources).map(([format, srcset]) => (
                  <source key={format} type={`image/${format}`} srcSet={srcset} sizes="33vw" />
                ))}
                <img
                  src={photo.pic.img.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className={imgClass}
                  style={{ objectPosition: photo.position }}
                />
              </picture>
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass}
            aria-label="View this post on our Instagram"
          >
            <img
              src={rolledMatSunset.url}
              alt="Rolled Cosmic Igloo mat with carry strap on the grass at sunset"
              loading="lazy"
              decoding="async"
              className={imgClass}
              style={{ objectPosition: "center 60%" }}
            />
          </a>
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
