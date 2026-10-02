import { allCommunityPhotos } from "@/lib/communityPhotos";
import eyeArtwork from "@/assets/instagram-eye-artwork.png.asset.json";
import rolledMatSunset from "@/assets/instagram-rolled-mat-sunset.png.asset.json";
import warriorPose from "@/assets/instagram-warrior-pose.png.asset.json";

const INSTAGRAM_URL = "https://www.instagram.com/cosmic.igloo";

const tileClass = "group relative block aspect-4/5 overflow-hidden";
const imgClass = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

const InstagramFeed = () => {
  const photos = allCommunityPhotos.slice(0, 7);

  return (
    <section className="relative py-12 md:py-16 px-6" aria-labelledby="instagram-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 id="instagram-heading" className="font-display text-3xl md:text-4xl font-medium tracking-tight">
            <span className="text-shaman-gold">@cosmic.igloo</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[2px] overflow-hidden">
          {photos.map((photo, i) =>
            i === 1 ? (
              <a
                key={i}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClass}
                style={{ order: 1 }}
                aria-label="View this post on our Instagram"
              >
                <img
                  src={warriorPose.url}
                  alt="Yogi in warrior pose on a Cosmic Igloo mat on the grass at sunset"
                  loading="lazy"
                  decoding="async"
                  className={imgClass}
                  style={{ objectPosition: "center 40%" }}
                />
              </a>
            ) : (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={tileClass}
              style={{ order: i === 4 ? 7 : i === 6 ? 8 : i }}
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
            )
          )}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass}
            style={{ order: 4 }}
            aria-label="View this post on our Instagram"
          >
            <img
              src={eyeArtwork.url}
              alt="Close up of an eye artwork printed on a Cosmic Igloo mat"
              loading="lazy"
              decoding="async"
              className={imgClass}
            />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={tileClass}
            style={{ order: 6 }}
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
