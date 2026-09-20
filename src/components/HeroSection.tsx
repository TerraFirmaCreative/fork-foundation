import HeroPhotoStrip from "@/components/HeroPhotoStrip";
import UspBar from "@/components/UspBar";
import heroImage from "@/assets/hero/hero.jpeg";







const HeroSection = () => {
  const scrollToGallery = () =>
    document
      .getElementById("design-gallery")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="h-svh min-h-[640px] w-full overflow-hidden flex flex-col items-center justify-center bg-slate-950">
      <img
          src={heroImage}
          alt={"Custom yoga mat hero image"}
          className="relative w-full h-full object-cover opacity-70"
          loading="lazy"
          decoding="async"
        />
      <div className="absolute flex flex-col items-center">
        <h1 className="text-5xl font-hero font-bold uppercase mix-blend-lighten">Visually stunning and grippy yoga mats</h1>
        <h3 className="font-body italic text-3xl">Designed to inspire. Made to perform.</h3>
      </div>  
    </section>
  );
};

export default HeroSection;

