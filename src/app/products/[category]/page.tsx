import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES, ALL_PRODUCTS } from "@/data/productsData";
import ProductCatalog from "@/components/products/ProductCatalog";
import { ShieldCheck, ArrowLeft, Download, Send, CheckCircle2 } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-12">
      {/* Category Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-brass-300 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL CATEGORIES</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-industrial-charcoal border border-brass-500/30 overflow-hidden relative">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brass-500 text-black">
                {category.code}
              </span>
              <span className="text-xs font-mono text-brass-400 uppercase tracking-widest">
                PRODUCT LINE // {category.name}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {category.description}
            </p>

            {/* Quick Spec Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.highlightSpecs.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-neutral-200 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brass-400" />
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-black/60">
              <Image
                src={category.heroImage}
                alt={category.name}
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-xs font-mono text-brass-300">
                100% OPTICAL GAUGE TESTED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Catalog Component for this specific category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Available SKUs & Technical Models
          </h2>
          <p className="text-xs text-neutral-400">
            Select a model to view full technical specifications, dimensional limits, or request an instant RFQ.
          </p>
        </div>

        <ProductCatalog initialCategory={category.slug} />
      </section>
    </div>
  );
}
