import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: Props) => {
  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group block hover-lift glass rounded-3xl overflow-hidden shadow-card ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.cover}
          alt={`${product.name} — ${product.tagline}`}
          loading="lazy"
          width={1024}
          height={768}
          className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-[11px] font-medium tracking-wider uppercase text-primary">
          {product.useCases[0]}
        </div>
        <div className="absolute top-3 right-3 glass-strong rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display font-semibold text-lg leading-tight">
            {product.name}
          </h3>
          <span className="text-primary text-sm font-medium whitespace-nowrap">
            {product.startingPrice}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.tagline}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border/60">
          <span>{product.size}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span>{product.capacity}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
