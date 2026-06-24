import { Link } from "react-router-dom";
import { SITE } from "@/lib/site";
import { products } from "@/data/products";

const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-neon opacity-60" />
      <div className="container py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary shadow-glow flex items-center justify-center font-display font-bold text-primary-foreground">
              C
            </div>
            <span className="font-display font-semibold text-lg">{SITE.name}</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            {SITE.name} designs and builds futuristic prefab capsule houses — premium
            capsule homes, smart pod cabins, resort suites, eco stays and backyard
            office pods, delivered turnkey worldwide.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">
            Explore
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-primary">All Models</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">
            Models
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="hover:text-primary">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container pb-10 text-xs text-muted-foreground">
        Keywords: capsule house, capsule homes, prefab capsule house, modular capsule home,
        luxury prefab cabin, smart pod house, resort capsule cabin.
      </div>
    </footer>
  );
};

export default Footer;
