"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ALL_PRODUCTS, PRODUCT_CATEGORIES, ProductItem } from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { 
  Search, 
  Filter, 
  Download, 
  Send, 
  ExternalLink, 
  Layers, 
  Check, 
  X, 
  FileText, 
  ShieldCheck, 
  Gauge, 
  Thermometer, 
  Maximize2 
} from "lucide-react";

interface ProductCatalogProps {
  initialCategory?: string;
}

export default function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const { openQuoteModal } = useQuoteModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [selectedThread, setSelectedThread] = useState<string>("all");
  const [selectedApplication, setSelectedApplication] = useState<string>("all");
  const [activeSpecProduct, setActiveSpecProduct] = useState<ProductItem | null>(null);

  // Extract unique materials & threads for filter dropdowns
  const materialsList = useMemo(() => {
    const set = new Set<string>();
    ALL_PRODUCTS.forEach((p) => {
      if (p.material.includes("CW614N")) set.add("CW614N (CuZn39Pb3)");
      if (p.material.includes("CZ121")) set.add("CZ121 Free Cutting");
      if (p.material.includes("IS 319")) set.add("IS 319 Grade 1");
      if (p.material.includes("Lead-Free") || p.material.includes("DZR")) set.add("DZR / Lead-Free Brass");
    });
    return Array.from(set);
  }, []);

  const threadList = useMemo(() => {
    return ["NPT / Dryseal", "BSPP (Parallel)", "BSPT (Taper)", "Metric ISO", "UNF / JIC Flare"];
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      // Category match
      if (selectedCategory !== "all" && item.categorySlug !== selectedCategory) {
        return false;
      }

      // Material match
      if (selectedMaterial !== "all") {
        const mat = selectedMaterial.split(" ")[0];
        if (!item.material.toLowerCase().includes(mat.toLowerCase())) {
          return false;
        }
      }

      // Thread match
      if (selectedThread !== "all") {
        const th = selectedThread.split(" ")[0];
        if (!item.threadType.toLowerCase().includes(th.toLowerCase())) {
          return false;
        }
      }

      // Application match
      if (selectedApplication !== "all") {
        if (!item.application.toLowerCase().includes(selectedApplication.toLowerCase())) {
          return false;
        }
      }

      // Search match
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchSku = item.sku.toLowerCase().includes(q);
        const matchDesc = item.shortDescription.toLowerCase().includes(q);
        const matchMat = item.material.toLowerCase().includes(q);
        const matchThread = item.threadType.toLowerCase().includes(q);
        return matchName || matchSku || matchDesc || matchMat || matchThread;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedMaterial, selectedThread, selectedApplication]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedMaterial("all");
    setSelectedThread("all");
    setSelectedApplication("all");
  };

  return (
    <div className="w-full space-y-8">
      {/* Search & Filter Control Hub */}
      <div className="p-6 rounded-2xl bg-industrial-surface border border-industrial-border-brass shadow-xl space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Live Search Input */}
          <div className="relative w-full lg:max-w-md">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by SKU, thread, alloy (e.g. PF-HN-01, NPT, CW614N)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brass-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Stats & Active Filter Count */}
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 w-full lg:w-auto justify-between lg:justify-end">
            <span>
              SHOWING: <strong className="text-brass-300">{filteredProducts.length}</strong> / {ALL_PRODUCTS.length} SKUS
            </span>
            {(selectedCategory !== "all" || selectedMaterial !== "all" || selectedThread !== "all" || searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-xs text-brass-400 hover:underline flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Multi-Dimensional Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-white/10">
          {/* Category Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-industrial-black border border-white/10 text-xs text-white focus:outline-none focus:border-brass-500"
            >
              <option value="all">All Categories (10)</option>
              {PRODUCT_CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Material Alloy Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Material Alloy
            </label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-industrial-black border border-white/10 text-xs text-white focus:outline-none focus:border-brass-500"
            >
              <option value="all">All Brass Alloys</option>
              {materialsList.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Thread Standard Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Thread Standard
            </label>
            <select
              value={selectedThread}
              onChange={(e) => setSelectedThread(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-industrial-black border border-white/10 text-xs text-white focus:outline-none focus:border-brass-500"
            >
              <option value="all">All Thread Standards</option>
              {threadList.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Application Filter */}
          <div>
            <label className="block text-[11px] font-mono uppercase text-neutral-400 mb-1">
              Target Application
            </label>
            <select
              value={selectedApplication}
              onChange={(e) => setSelectedApplication(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-industrial-black border border-white/10 text-xs text-white focus:outline-none focus:border-brass-500"
            >
              <option value="all">All Applications</option>
              <option value="Hydraulic">Hydraulics & Pressure</option>
              <option value="Automotive">Automotive & Truck</option>
              <option value="Refrigeration">HVAC & Refrigeration</option>
              <option value="Pneumatic">Pneumatics & Air Lines</option>
              <option value="Plumbing">Potable Water & Plumbing</option>
              <option value="Solar">Solar & Electrical</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-industrial-surface border border-white/10 space-y-3">
          <p className="text-neutral-400 text-sm">No standard brass components matched your filter criteria.</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-lg bg-brass-500 text-black text-xs font-semibold"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-brass-500/10"
            >
              {/* Product Visual Container */}
              <div className="relative w-full h-56 bg-industrial-black/80 overflow-hidden p-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={280}
                  className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                {/* SKU Badge */}
                <div className="absolute top-6 left-6 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-brass-500/30 text-[10px] font-mono text-brass-300">
                  {product.sku}
                </div>

                {/* Quick inspect overlay button */}
                <button
                  onClick={() => setActiveSpecProduct(product)}
                  className="absolute bottom-6 right-6 p-2 rounded-lg bg-industrial-charcoal/90 text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                  title="View Technical Data Sheet"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Product Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brass-400 font-semibold">
                    {product.categoryName}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-brass-200 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-2 pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-300">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">MATERIAL:</span>
                    <span className="font-semibold text-neutral-200 truncate max-w-[170px]">{product.material}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">THREAD:</span>
                    <span className="font-semibold text-brass-300 truncate max-w-[170px]">{product.threadType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">MAX PRESSURE:</span>
                    <span className="font-semibold text-emerald-400">{product.workingPressure}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                  <button
                    onClick={() => setActiveSpecProduct(product)}
                    className="flex-1 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
                  >
                    Datasheet
                  </button>
                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="flex-1 py-2 rounded-xl bg-brass-500 hover:bg-brass-400 text-black text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-brass-500/10"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Technical Data Sheet Spec Modal */}
      {activeSpecProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-industrial-charcoal border border-brass-500/30 shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-industrial-surface">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brass-500/20 text-brass-300 border border-brass-500/30">
                    {activeSpecProduct.sku}
                  </span>
                  <span className="text-xs text-neutral-400">{activeSpecProduct.categoryName}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{activeSpecProduct.name}</h3>
              </div>
              <button
                onClick={() => setActiveSpecProduct(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Spec Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-black/60 border border-white/10">
                  <Image
                    src={activeSpecProduct.image}
                    alt={activeSpecProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[11px] font-mono text-brass-300">
                    JAMNAGAR OPTICAL CAD // VERIFIED
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-mono text-neutral-400 uppercase tracking-wider">
                    Engineering Specifications
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between">
                      <span className="text-neutral-400">Material Standard:</span>
                      <strong className="text-white">{activeSpecProduct.material}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between">
                      <span className="text-neutral-400">Thread Standards:</span>
                      <strong className="text-brass-300">{activeSpecProduct.threadType}</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between">
                      <span className="text-neutral-400">Standard Sizes:</span>
                      <span className="text-neutral-200">{activeSpecProduct.sizes.join(", ")}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between">
                      <span className="text-neutral-400">Operating Limits:</span>
                      <span className="text-emerald-400 font-semibold">{activeSpecProduct.workingPressure}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex justify-between">
                      <span className="text-neutral-400">Thermal Envelope:</span>
                      <span className="text-amber-300">{activeSpecProduct.temperatureRange}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Engineering Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Quality & Manufacturing Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {activeSpecProduct.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2">
                      <Check className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/resources"
                  className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4 text-brass-400" />
                  <span>Download Full Technical Catalogue (.PDF)</span>
                </a>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setActiveSpecProduct(null);
                      openQuoteModal(activeSpecProduct.name);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brass-500 hover:bg-brass-400 text-black text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-brass-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Request Quote for this SKU
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
