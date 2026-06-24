import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Hammer, Snowflake, Cpu, Sun, Wrench, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfiniteProductCarousel from "@/components/InfiniteProductCarousel";
import { products, useCases } from "@/data/products";
import { SITE, waLink } from "@/lib/site";
import hero from "@/assets/hero-capsule.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import modelHorizon from "@/assets/model-horizon.jpg";
import modelTerra from "@/assets/model-terra.jpg";
import modelAero from "@/assets/model-aero.jpg";

const whyItems = [
  { icon: Hammer, title: "Fast Installation", text: "Most capsule models install in 1–3 days on a prepared site." },
  { icon: Snowflake, title: "Premium Insulation", text: "R-28+ thermal performance for year-round comfort." },
  { icon: Cpu, title: "Smart Interiors", text: "Integrated climate, lighting and entertainment systems." },
  { icon: ShieldCheck, title: "Weather-Resistant", text: "Engineered composite shells rated for harsh climates." },
  { icon: Sparkles, title: "Customizable Design", text: "Tailored finishes, layouts and smart-tech packages." },
  { icon: Wrench, title: "Low Maintenance", text: "Prefab construction designed to last with minimal upkeep." },
];

const galleryPreview = [interior1, modelHorizon, interior2, modelAero, interior3, modelTerra];

const faqs = [
  { q: "What is a capsule house?", a: "A capsule house is a prefabricated modular living pod with a futuristic aerodynamic shell, built off-site and installed turnkey." },
  { q: "How long does delivery and installation take?", a: "Manufacturing typically takes 6–10 weeks. On-site installation is usually completed within 1–3 days." },
  { q: "Can capsule houses be customized?", a: "Yes — finishes, smart systems, layout and exterior color can all be customized per order." },
  { q: "Are capsule houses suitable for all climates?", a: "Our capsule houses are engineered for harsh climates, with insulation packages for cold, hot, humid and coastal sites." },
];

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: "/",
    telephone: SITE.phone,
    email: SITE.email,
    address: { "@type": "PostalAddress", streetAddress: SITE.address },
  };

  return (
    <>
      <Helmet>
        <title>CapsuleHaus — Futuristic Capsule Houses for Modern Living</title>
        <meta name="description" content="Futuristic prefab capsule houses, smart pod cabins and luxury modular homes for resorts, backyards, eco stays and tourism. Turnkey delivery worldwide." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="CapsuleHaus — Futuristic Capsule Houses" />
        <meta property="og:description" content="Premium prefab capsule houses, smart pod cabins and modular capsule homes — turnkey delivered." />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary">
              <Sparkles className="w-3.5 h-3.5" /> Prefab · Modular · Futuristic
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
              <span className="text-shine">Futuristic Capsule</span>
              <br />
              <span className="text-gradient">Houses for Modern Living</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              {SITE.name} designs and builds premium prefab capsule houses — luxury
              capsule homes, smart pod cabins, resort suites and backyard office
              pods, delivered turnkey to any site.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/products">Explore Models <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="neon" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div><strong className="text-foreground text-base block">8+</strong>Capsule models</div>
              <div><strong className="text-foreground text-base block">1–3d</strong>Install time</div>
              <div><strong className="text-foreground text-base block">10y</strong>Structure warranty</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong shadow-elegant">
              <img
                src={hero}
                alt="Premium futuristic capsule house glowing at twilight"
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="glass-strong rounded-2xl p-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Featured</div>
                  <div className="font-display font-semibold">Nova Capsule S1</div>
                </div>
                <Link
                  to="/products/nova-capsule-s1"
                  className="glass-strong rounded-full px-4 py-2 text-sm text-primary"
                >
                  View Details →
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-accent/30 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* AUTO-SCROLL SHOWCASE */}
      <section className="py-20">
        <div className="container mb-10 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Showroom</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold max-w-2xl">
              Discover our <span className="text-neon">capsule models</span>
            </h2>
          </div>
          <Button asChild variant="glass" size="lg">
            <Link to="/products">View All Models <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
        <InfiniteProductCarousel products={products} />
        <div className="mt-8">
          <InfiniteProductCarousel products={[...products].reverse()} reverse />
        </div>
      </section>

      {/* CATEGORIES / USE CASES */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Use Cases</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              Built for <span className="text-gradient">every premium space</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u, i) => (
              <motion.div
                key={u.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary/20 border border-primary/20 flex items-center justify-center text-primary text-sm font-semibold mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{u.label}</h3>
                <p className="text-sm text-muted-foreground">{u.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Why CapsuleHaus</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              Engineered for <span className="text-neon">premium living</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyItems.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow mb-4">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Gallery</div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold">
                Inside the <span className="text-gradient">capsule world</span>
              </h2>
            </div>
            <Button asChild variant="glass"><Link to="/gallery">Open Gallery <ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPreview.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl glass ${i === 0 ? "md:row-span-2 md:col-span-1 aspect-square md:aspect-auto" : "aspect-square"}`}
              >
                <img src={src} alt={`Capsule house gallery image ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1.2s]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">FAQ</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold">
              Capsule houses, <span className="text-neon">answered</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass rounded-2xl p-6">
                <h3 className="font-display font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="neon"><Link to="/faq">All Questions <ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-hero opacity-70" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <Sun className="w-10 h-10 text-primary mx-auto" />
              <h2 className="font-display text-3xl md:text-5xl font-semibold">
                Ready to build your <span className="text-neon">capsule space?</span>
              </h2>
              <p className="text-muted-foreground">
                Tell us about your site, your style and your timeline — we'll quote
                a capsule house tailored to your project.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild variant="hero" size="lg"><Link to="/contact">Send Inquiry</Link></Button>
                <Button asChild variant="glass" size="lg">
                  <a href={waLink("Hi CapsuleHaus, I'd like to start a capsule house project.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
