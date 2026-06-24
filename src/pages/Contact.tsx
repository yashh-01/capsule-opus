import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { products } from "@/data/products";
import { SITE, waLink } from "@/lib/site";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within 24 hours.");
    }, 700);
  };

  return (
    <>
      <Helmet>
        <title>Contact CapsuleHaus — Get a Capsule House Quote</title>
        <meta name="description" content="Get a tailored quote for your CapsuleHaus prefab capsule house. Tell us about your site, model of interest and timeline." />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact CapsuleHaus" />
        <meta property="og:url" content="/contact" />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Contact</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">
            Build your <span className="text-neon">capsule space</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Tell us about your project. Our team will respond with a tailored
            quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid lg:grid-cols-5 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={100} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" maxLength={30} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={255} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" name="location" maxLength={120} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Interested model</Label>
              <select
                id="model"
                name="model"
                className="flex h-10 w-full rounded-md border border-input bg-input/40 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                defaultValue=""
              >
                <option value="" disabled>Select a model</option>
                <option value="undecided">Not sure yet</option>
                {products.map((p) => <option key={p.slug} value={p.slug}>{p.name}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} maxLength={1000} required />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={submitting}>
              {submitting ? "Sending…" : "Send Inquiry"}
            </Button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Phone", value: SITE.phone },
              { icon: Mail, label: "Email", value: SITE.email },
              { icon: MapPin, label: "Address", value: SITE.address },
            ].map((c) => (
              <div key={c.label} className="glass rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                  <c.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <a
              href={waLink("Hi CapsuleHaus, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover-lift"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Instant</div>
                <div className="font-medium">Chat on WhatsApp</div>
              </div>
            </a>

            <div className="glass rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="w-full h-full bg-grid relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                  <div className="text-center">
                    <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                    Map location
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
