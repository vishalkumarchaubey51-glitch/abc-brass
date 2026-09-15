import React from "react";
import { Metadata } from "next";
import ProductCatalog from "@/components/products/ProductCatalog";
import { PRODUCT_CATEGORIES } from "@/data/productsData";

export const metadata: Metadata = {
  title: "Precision Products Catalogue | ABC BRASS",
  description:
    "Explore precision brass pipe fittings, hose barbs, compressor valves, tube connectors, and custom OEM turned components. Complete NPT, BSPP, BSPT and Metric specifications.",
};

export default function ProductsPage() {
  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              ENGINEERING PRODUCT DATABASE
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              PRECISION COMPONENTS CATALOGUE
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Browse standard and custom precision-machined brass components. Filter by category, alloy grade, thread standard (NPT/BSPP/Metric), or industrial application.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Engineering Product Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductCatalog />
      </section>
    </div>
  );
}
