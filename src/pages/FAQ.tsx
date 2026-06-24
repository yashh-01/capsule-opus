import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is a capsule house?", a: "A capsule house is a prefabricated modular living pod with a futuristic aerodynamic shell, factory-built and installed turnkey on your site." },
  { q: "How much does a capsule house cost?", a: "CapsuleHaus models start at $18,900 for the Solace Office Pod and scale up to $72,000+ for our flagship Zenith Resort Capsule." },
  { q: "How long does delivery take?", a: "Manufacturing typically takes 6–10 weeks. On-site installation is usually completed within 1–3 days on a prepared foundation." },
  { q: "Are capsule houses permanent structures?", a: "Yes — our capsule houses are built as long-life structures with 10–15 year structural warranties. They can also be relocated if needed." },
  { q: "Can a capsule house be customized?", a: "Absolutely. Interior finishes, smart-tech packages, layout and exterior colors are all configurable at order time." },
  { q: "Are capsule houses suitable for cold climates?", a: "Yes. Cold-climate insulation packages, triple glazing and snow-rated roofs are available across the range." },
  { q: "Do I need a permit?", a: "Permit requirements vary by region. Office pods and small cabins often fall under permit-exempt thresholds, but we always recommend checking locally." },
  { q: "Can I install a capsule house off-grid?", a: "Yes — solar + battery packages are available, and several models are designed for fully off-grid installation." },
  { q: "What kind of foundation does it need?", a: "Most models can be installed on adjustable screw piles, concrete pads or steel skids. We provide full foundation specifications." },
  { q: "How do I get a quote?", a: "Use our Contact page or WhatsApp button — share your site, model of interest and timeline, and our team will respond with a tailored quote." },
];

const FAQ = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Capsule House FAQ — Pricing, Delivery, Customization | CapsuleHaus</title>
        <meta name="description" content="Answers to common questions about CapsuleHaus prefab capsule houses — pricing, delivery, installation, customization, climate suitability and more." />
        <link rel="canonical" href="/faq" />
        <meta property="og:title" content="Capsule House FAQ | CapsuleHaus" />
        <meta property="og:url" content="/faq" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">FAQ</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6">
            Capsule houses, <span className="text-neon">answered</span>
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="glass rounded-2xl px-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;
