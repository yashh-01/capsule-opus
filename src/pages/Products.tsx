import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";
import { products, useCases } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const Products = () => {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.useCases.includes(filter as any))),
    [filter]
  );

  return (
    <>
      <Helmet>
        <title>Capsule House Models — All Prefab Capsule Homes | CapsuleHaus</title>
        <meta name="description" content="Explore all CapsuleHaus prefab capsule house models — luxury capsule homes, smart pods, resort suites, eco cabins and backyard office pods." />
        <link rel="canonical" href="/products" />
        <meta property="og:title" content="All Capsule House Models | CapsuleHaus" />
        <meta property="og:url" content="/products" />
      </Helmet>

      <section className="pt-32 pb-12">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Models</div>
          <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4">
            Every <span className="text-neon">capsule house</span> we build
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse the full CapsuleHaus range — from compact backyard pods to
            flagship two-level resort capsule villas. Filter by use case to find
            the right model for your project.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {["All", ...useCases.map((u) => u.label)].map((u) => (
              <button
                key={u}
                onClick={() => setFilter(u)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm transition-all",
                  filter === u
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </>
  );
};

export default Products;
