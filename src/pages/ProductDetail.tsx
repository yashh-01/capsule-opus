import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, Check, MessageCircle, Ruler, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getProduct, getOtherProducts } from "@/data/products";
import InfiniteProductCarousel from "@/components/InfiniteProductCarousel";
import { waLink } from "@/lib/site";

const ProductDetail = () => {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const [activeImg, setActiveImg] = useState(0);
  if (!product) return <Navigate to="/products" replace />;

  const others = getOtherProducts(slug);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: product.cover,
    brand: { "@type": "Brand", name: "CapsuleHaus" },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.startingPrice.replace(/[^0-9.]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{product.seoTitle}</title>
        <meta name="description" content={product.seoDescription} />
        <link rel="canonical" href={`/products/${product.slug}`} />
        <meta property="og:title" content={product.seoTitle} />
        <meta property="og:description" content={product.seoDescription} />
        <meta property="og:url" content={`/products/${product.slug}`} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section className="pt-32 pb-12">
        <div className="container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong shadow-elegant">
              <img
                src={product.images[activeImg]}
                alt={`${product.name} — image ${activeImg + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
                width={1024}
                height={768}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? "border-primary shadow-glow" : "border-transparent opacity-70 hover:opacity-100"}`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">{product.useCases.join(" · ")}</div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold leading-tight">{product.name}</h1>
            <p className="text-lg text-muted-foreground">{product.tagline}</p>

            <div className="grid grid-cols-3 gap-3">
              <div className="glass rounded-2xl p-4">
                <Wallet className="w-4 h-4 text-primary mb-2" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">From</div>
                <div className="font-display font-semibold">{product.startingPrice}</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <Ruler className="w-4 h-4 text-primary mb-2" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Size</div>
                <div className="font-display font-semibold">{product.size}</div>
              </div>
              <div className="glass rounded-2xl p-4">
                <Users className="w-4 h-4 text-primary mb-2" />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Capacity</div>
                <div className="font-display font-semibold">{product.capacity}</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{product.longDescription}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="hero" size="lg"><Link to="/contact">Get Quote <ArrowRight className="w-4 h-4" /></Link></Button>
              <Button asChild variant="glass" size="lg">
                <a href={waLink(`Hi CapsuleHaus, I'd like a quote for the ${product.name}.`)} target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES + SPECS */}
      <section className="py-16">
        <div className="container grid lg:grid-cols-2 gap-10">
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Key features</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-6">Specifications</h2>
            <dl className="divide-y divide-border/60">
              {product.specifications.map((s) => (
                <div key={s.label} className="flex justify-between py-3 text-sm">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="font-medium">{s.value}</dd>
                </div>
              ))}
              <div className="flex justify-between py-3 text-sm">
                <dt className="text-muted-foreground">Dimensions</dt>
                <dd className="font-medium">{product.dimensions}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* INTERIOR / EXTERIOR / FLOOR PLAN */}
      <section className="py-12">
        <div className="container grid lg:grid-cols-3 gap-6">
          {[
            { title: "Interior highlights", items: product.interiorHighlights },
            { title: "Exterior highlights", items: product.exteriorHighlights },
            { title: "Floor plan highlights", items: product.floorPlanHighlights },
          ].map((b) => (
            <div key={b.title} className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold mb-4">{b.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-2"><span className="text-primary">›</span>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS + USE CASES */}
      <section className="py-12">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Materials & build quality</h3>
            <p className="text-sm text-muted-foreground">
              The {product.name} is built around a structural steel chassis, composite
              shell panels, premium-grade insulation and triple-glazed windows.
              All units are factory-finished to a hospitality-grade standard
              before delivery.
            </p>
          </div>
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display text-xl font-semibold mb-4">Best suited for</h3>
            <div className="flex flex-wrap gap-2">
              {product.useCases.map((u) => (
                <span key={u} className="px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs">{u}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-semibold mb-6">{product.name} FAQ</h2>
          <Accordion type="single" collapsible className="glass rounded-2xl px-4">
            {product.faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-16">
        <div className="container mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Keep exploring</div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Explore More Capsule Houses</h2>
          </div>
          <Button asChild variant="glass"><Link to="/products">All Models <ArrowRight className="w-4 h-4" /></Link></Button>
        </div>
        <InfiniteProductCarousel products={others} />
      </section>
    </>
  );
};

export default ProductDetail;
