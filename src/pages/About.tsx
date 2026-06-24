import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import interior1 from "@/assets/interior-1.jpg";

const steps = [
  { n: "01", title: "Consultation", text: "We learn about your site, goals, timeline and budget." },
  { n: "02", title: "Customization", text: "Choose model, finishes, smart-tech and exterior treatment." },
  { n: "03", title: "Manufacturing", text: "Your capsule is built off-site in our controlled facility." },
  { n: "04", title: "Delivery", text: "We coordinate logistics and ship to your site, anywhere." },
  { n: "05", title: "Installation", text: "Turnkey installation in 1–3 days, ready to live in." },
];

const About = () => (
  <>
    <Helmet>
      <title>About CapsuleHaus — Futuristic Prefab Capsule Houses</title>
      <meta name="description" content="CapsuleHaus is a futuristic prefab capsule house brand engineering premium capsule homes, smart pods and modular cabins for modern living." />
      <link rel="canonical" href="/about" />
      <meta property="og:title" content="About CapsuleHaus" />
      <meta property="og:url" content="/about" />
    </Helmet>

    <section className="pt-32 pb-12">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">About</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-6 leading-[1.05]">
            Engineering the <span className="text-neon">future of living</span>
          </h1>
          <p className="text-muted-foreground mb-4">
            CapsuleHaus designs and manufactures futuristic prefab capsule houses for
            people, resorts and tourism operators who want premium living in compact,
            beautiful spaces. Every capsule is built around a precision steel chassis,
            composite shell and hospitality-grade interior — delivered turnkey.
          </p>
          <p className="text-muted-foreground">
            We exist to make premium architecture faster to build, easier to install
            and more sustainable to operate — without compromising on craft.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild variant="hero"><Link to="/products">Explore Models</Link></Button>
            <Button asChild variant="neon"><Link to="/contact">Talk to Us</Link></Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong shadow-elegant">
          <img src={interior1} alt="Premium capsule house interior" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-12 text-center">
          From consult to <span className="text-gradient">keys-in-hand</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative glass rounded-2xl p-6 hover-lift">
              <div className="absolute -top-3 left-6 text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-primary text-primary-foreground">{s.n}</div>
              <h3 className="font-display font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid md:grid-cols-3 gap-6 text-center">
        {[
          ["8+", "Capsule models"],
          ["12+", "Countries shipped"],
          ["10y", "Structural warranty"],
        ].map(([k, v]) => (
          <div key={k} className="glass rounded-3xl p-10">
            <div className="font-display text-5xl text-shine font-semibold">{k}</div>
            <div className="text-sm text-muted-foreground mt-2">{v}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
