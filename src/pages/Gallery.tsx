import { Helmet } from "react-helmet-async";
import { products } from "@/data/products";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

const Gallery = () => {
  const images = [
    ...products.map((p) => ({ src: p.cover, alt: `${p.name} exterior` })),
    { src: interior1, alt: "Capsule house interior with mountain view" },
    { src: interior2, alt: "Capsule pod bedroom with forest view" },
    { src: interior3, alt: "Premium capsule house bathroom" },
  ];

  return (
    <>
      <Helmet>
        <title>Capsule House Gallery — Interiors & Exteriors | CapsuleHaus</title>
        <meta name="description" content="Browse the CapsuleHaus gallery of premium capsule house interiors and exteriors — luxury prefab capsule homes in stunning locations." />
        <link rel="canonical" href="/gallery" />
        <meta property="og:title" content="Capsule House Gallery | CapsuleHaus" />
        <meta property="og:url" content="/gallery" />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Gallery</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">
            Inside the <span className="text-neon">capsule world</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Exteriors, interiors and architectural moments from across the
            CapsuleHaus range.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl glass">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.2s]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
