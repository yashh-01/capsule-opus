import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  reverse?: boolean;
}

/**
 * Infinite, CSS-driven horizontal marquee. Pauses on hover.
 * Cards remain individually clickable.
 */
const InfiniteProductCarousel = ({ products, reverse }: Props) => {
  const doubled = [...products, ...products];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-6 w-max ${reverse ? "marquee-reverse" : "marquee"}`}
        style={{ willChange: "transform" }}
      >
        {doubled.map((p, i) => (
          <div key={`${p.slug}-${i}`} className="w-[300px] md:w-[360px] shrink-0">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteProductCarousel;
