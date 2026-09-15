"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuoteModal } from "@/context/QuoteModalContext";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import ProductInspector3D from "@/components/3d/ProductInspector3D";
import StatCounter from "@/components/ui/StatCounter";
import Timeline from "@/components/ui/Timeline";
import GlobalReachMap from "@/components/ui/GlobalReachMap";
import { 
  COMPANY_INFO, 
  COMPANY_STATS, 
  CERTIFICATIONS, 
  OEM_WORKFLOW_STEPS, 
  INDUSTRIES_SERVED, 
  WHY_ABC_BRASS 
} from "@/data/companyData";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  ShieldCheck, 
  CheckCircle2, 
  Factory, 
  Layers, 
  Cpu, 
  Compass, 
  Wrench, 
  Download, 
  Send, 
  FileText, 
  Clock, 
  Target, 
  Boxes, 
  Globe, 
  MapPin, 
  Mail, 
  Phone, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Car,
  Droplets,
  Wind,
  Zap,
  Pipette,
  Gauge,
  Flower2,
  ThermometerSnowflake,
  Cog
} from "lucide-react";

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRIES_SERVED[0].id);

  // Quick form state in Section 14
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryCompany, setInquiryCompany] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryCountry, setInquiryCountry] = useState("");
  const [inquiryCategory, setInquiryCategory] = useState("Pipe Fittings");
  const [inquiryQty, setInquiryQty] = useState("5,000 - 25,000 pcs");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Car": return <Car className="w-5 h-5 text-brass-400" />;
      case "Droplets": return <Droplets className="w-5 h-5 text-brass-400" />;
      case "Wind": return <Wind className="w-5 h-5 text-brass-400" />;
      case "Zap": return <Zap className="w-5 h-5 text-brass-400" />;
      case "Pipette": return <Pipette className="w-5 h-5 text-brass-400" />;
      case "Gauge": return <Gauge className="w-5 h-5 text-brass-400" />;
      case "Flower2": return <Flower2 className="w-5 h-5 text-brass-400" />;
      case "ThermometerSnowflake": return <ThermometerSnowflake className="w-5 h-5 text-brass-400" />;
      default: return <Cog className="w-5 h-5 text-brass-400" />;
    }
  };

  const getWhyIcon = (icon: string) => {
    switch (icon) {
      case "Clock": return <Clock className="w-6 h-6 text-brass-400" />;
      case "Target": return <Target className="w-6 h-6 text-brass-400" />;
      case "Boxes": return <Boxes className="w-6 h-6 text-brass-400" />;
      case "Layers": return <Layers className="w-6 h-6 text-brass-400" />;
      case "Factory": return <Factory className="w-6 h-6 text-brass-400" />;
      case "Globe": return <Globe className="w-6 h-6 text-brass-400" />;
      default: return <Sparkles className="w-6 h-6 text-brass-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO SECTION — CINEMATIC 3D EXPERIENCE
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-gradient-to-b from-industrial-black via-industrial-dark to-industrial-charcoal overflow-hidden pt-8 pb-16">
        {/* Three.js 3D Floating Brass Objects Canvas */}
        <Hero3DCanvas />

        {/* Ambient Dark Industrial Background Overlay */}
        <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
        <div className="absolute inset-0 radial-glow-brass pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-industrial-dark to-transparent z-20 pointer-events-none" />

        {/* Hero Content Layer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Plant Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-brass-500/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brass-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-widest text-brass-300 uppercase">
                EST. 1990 • JAMNAGAR, INDIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] uppercase font-sans">
              PRECISION IN <span className="text-metallic-brass">BRASS.</span><br />
              ENGINEERED FOR <span className="text-metallic-silver">INDUSTRY.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
              Since 1990, ABC BRASS has been manufacturing precision brass fittings, components and OEM solutions for demanding industrial applications worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brass-400 via-brass-500 to-brass-600 text-black font-bold text-xs sm:text-sm tracking-widest uppercase hover:from-brass-300 hover:to-brass-500 transition-all shadow-xl shadow-brass-500/25 flex items-center gap-2 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openQuoteModal()}
                className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-brass-500/30 text-white font-bold text-xs sm:text-sm tracking-widest uppercase backdrop-blur-md hover:border-brass-400 transition-all flex items-center gap-2"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-brass-400" />
              </button>
            </div>

            {/* Hero Sub-badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brass-400" />
                <span>IATF 16949 & ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-brass-400" />
                <span>50,000 Sq. Ft. Plant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brass-400" />
                <span>60–70% Global Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-80">
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 text-brass-400 animate-bounce" />
        </div>
      </section>

      {/* =========================================================================
          SECTION 01 — TRUST / COMPANY STATS
      ========================================================================= */}
      <section className="relative py-16 bg-industrial-dark border-y border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="space-y-2 p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-brass-500/20 transition-all text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-metallic-brass tracking-tight">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-neutral-400 line-clamp-2">
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 — ABOUT ABC BRASS (SPLIT SCREEN)
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-industrial-charcoal to-industrial-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Manufacturing Facility Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[440px] sm:h-[500px] rounded-2xl overflow-hidden border border-brass-500/30 shadow-2xl group">
                <Image
                  src="/images/brass_factory_floor.jpg"
                  alt="ABC Brass Jamnagar 50,000 sq ft manufacturing plant floor"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Plant Stat Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-industrial-charcoal/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-brass-400">
                      MANUFACTURING FACILITY
                    </span>
                    <h4 className="text-base font-bold text-white">
                      Jamnagar, Gujarat, India
                    </h4>
                    <p className="text-xs text-neutral-400">
                      50,000 Sq. Ft. • 125+ Skilled Workforce
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-brass-500/20 border border-brass-500/40 flex items-center justify-center text-brass-300">
                    <Factory className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Company Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
                  ESTABLISHED 1990 • 35+ YEARS OF EXCELLENCE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  ENGINEERING TRUST SINCE 1990
                </h2>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed">
                ABC BRASS was established in 1990 in Jamnagar, Gujarat and has grown from a small operation into a full-fledged 50,000 sq. ft. precision manufacturing facility serving both domestic engineering giants and demanding international OEM customers worldwide.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "35+ years manufacturing heritage",
                  "Manufacturer & Exporter (60–70% export)",
                  "Comprehensive OEM / ODM capabilities",
                  "Precision components down to ±0.01 mm",
                  "IATF 16949 & ISO 9001:2015 certified",
                  "10,000,000+ annual brass parts capacity",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-brass-500 hover:bg-brass-400 text-black font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-brass-500/20"
                >
                  <span>OUR JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/manufacturing"
                  className="px-6 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  INFRASTRUCTURE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — COMPANY JOURNEY (INTERACTIVE TIMELINE)
      ========================================================================= */}
      <section className="py-24 bg-industrial-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
                CHRONOLOGY OF INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                THE ABC BRASS JOURNEY
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-400 max-w-xs">
              Continuous modernization from a 1,000 sq. ft. workshop to a 50,000 sq. ft. global export powerhouse.
            </p>
          </div>

          {/* Timeline Interactive Component */}
          <Timeline />
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — PRODUCT UNIVERSE (10 CATEGORIES)
      ========================================================================= */}
      <section className="py-24 bg-industrial-dark relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
                PRODUCT UNIVERSE
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                PRECISION COMPONENTS.<br />
                BUILT FOR PERFORMANCE.
              </h2>
            </div>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-brass-500 hover:text-black border border-brass-500/30 text-brass-300 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2"
            >
              <span>VIEW FULL CATALOGUE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 10 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative p-5 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-brass-500/10"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-brass-400 font-bold">
                      {cat.code}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="relative w-full h-32 rounded-xl bg-industrial-black/60 overflow-hidden flex items-center justify-center p-2">
                    <Image
                      src={cat.heroImage}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-brass-300 transition-colors">
                    {cat.name}
                  </h3>

                  <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-brass-400 font-semibold group-hover:text-brass-300">
                  <span>VIEW PRODUCTS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — 3D PRODUCT SHOWCASE ("SEE THE PRECISION")
      ========================================================================= */}
      <section className="py-24 bg-gradient-to-b from-industrial-charcoal to-industrial-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              ENGINEERING INSPECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SEE THE PRECISION
            </h2>
            <p className="text-sm text-neutral-300">
              Interact with genuine CAD-derived brass components. Orbit in 3D, inspect micro-machined threads, toggle blueprint wireframes, and explore technical metrology tolerances.
            </p>
          </div>

          {/* Interactive 3D Product Metrology Viewer */}
          <ProductInspector3D />
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — OEM SOLUTIONS & 8-STAGE WORKFLOW
      ========================================================================= */}
      <section className="py-24 bg-industrial-dark relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
                CUSTOM CONTRACT MANUFACTURING
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                BUILT AROUND YOUR REQUIREMENTS
              </h2>
              <p className="text-sm text-neutral-300 pt-1">
                From initial 2D/3D print feasibility analysis through high-speed automated CNC turning, surface passivation, and global maritime logistics.
              </p>
            </div>
            <button
              onClick={() => openQuoteModal("Custom OEM Project")}
              className="px-6 py-3.5 rounded-xl bg-brass-500 hover:bg-brass-400 text-black font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-brass-500/20"
            >
              <span>DISCUSS YOUR OEM REQUIREMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 8-Step Manufacturing Workflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OEM_WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/30 transition-all duration-300 space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black font-mono text-metallic-brass">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-brass-500/40 group-hover:bg-brass-400 transition-colors" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-brass-200 transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — MANUFACTURING / INFRASTRUCTURE
      ========================================================================= */}
      <section className="py-24 bg-industrial-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              PLANT INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              FROM RAW MATERIAL TO PRECISION COMPONENT
            </h2>
          </div>

          {/* Infrastructure Imagery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "CNC Machining & Turning",
                desc: "Multi-axis single-point CNC turning centers ensuring micron-accurate concentricity and thread depth.",
                img: "/images/cnc_machining_brass.jpg",
              },
              {
                title: "Automated Production Floor",
                desc: "High-speed multi-spindle automatic lathes producing up to 10M+ brass parts per year.",
                img: "/images/brass_factory_floor.jpg",
              },
              {
                title: "Optical Metrology Lab",
                desc: "Mitutoyo profile projectors, digital calipers, and thread pitch micrometers in a temperature-controlled QA lab.",
                img: "/images/quality_assurance_lab.jpg",
              },
              {
                title: "Assembly & Packaging",
                desc: "Ultrasonic degreasing, O-ring insertion, VCI anti-rust wrapping, and export-ready palletization.",
                img: "/images/brass_industrial_assembly.jpg",
              },
            ].map((infra, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-industrial-surface h-[340px] flex flex-col justify-end p-6"
              >
                <Image
                  src={infra.img}
                  alt={infra.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="relative z-10 space-y-1.5">
                  <h4 className="text-base font-bold text-white group-hover:text-brass-300 transition-colors">
                    {infra.title}
                  </h4>
                  <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">
                    {infra.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — QUALITY & CERTIFICATIONS
      ========================================================================= */}
      <section className="py-24 bg-industrial-dark relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              ZERO-DEFECT METROLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              QUALITY IS NOT A CHECKPOINT.<br />
              IT IS BUILT INTO EVERY COMPONENT.
            </h2>
            <p className="text-sm text-neutral-300">
              Adhering to strict international automotive and industrial management systems.
            </p>
          </div>

          {/* Certifications Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.code}
                className="p-5 rounded-2xl bg-industrial-surface border border-brass-500/20 text-center space-y-2"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-brass-500/10 border border-brass-500/30 flex items-center justify-center text-brass-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-mono">{cert.code}</h4>
                <p className="text-xs text-neutral-400 leading-tight">{cert.title}</p>
                <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  VERIFIED AUDIT
                </span>
              </div>
            ))}
          </div>

          {/* 5-Stage QC Process Flow */}
          <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white tracking-wide">
              5-Stage Quality Assurance Protocol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
              {[
                { stage: "01", name: "Material Inspection", desc: "Chemical composition & spectrometer analysis of incoming raw brass rods." },
                { stage: "02", name: "Dimensional Inspection", desc: "Digital caliper and micrometer audits on turning stations every 30 minutes." },
                { stage: "03", name: "Thread Inspection", desc: "Go/No-Go calibrated thread gauges ensuring NPT/BSPP pitch perfection." },
                { stage: "04", name: "Performance Testing", desc: "Dry nitrogen pneumatic leak test and hydrostatic burst pressure verification." },
                { stage: "05", name: "Final QC & Dispatch", desc: "Visual surface check, ultrasonic cleaning, and VCI moisture barrier packaging." },
              ].map((q) => (
                <div key={q.stage} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <span className="font-mono text-brass-400 font-bold">{q.stage}</span>
                  <h4 className="font-semibold text-white">{q.name}</h4>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — INDUSTRIES WE SERVE
      ========================================================================= */}
      <section className="py-24 bg-industrial-charcoal relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              CROSS-SECTOR APPLICATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              INDUSTRIES WE SERVE
            </h2>
            <p className="text-sm text-neutral-300">
              Supplying high-reliability precision brass components to 12 primary industrial sectors.
            </p>
          </div>

          {/* Interactive Industry Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {INDUSTRIES_SERVED.map((ind) => {
              const isSelected = selectedIndustry === ind.id;
              return (
                <div
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? "bg-industrial-surface border-brass-500 shadow-xl shadow-brass-500/10"
                      : "bg-industrial-black/60 border-white/5 hover:border-white/20 hover:bg-industrial-surface/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10">
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-brass-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{ind.name}</h3>
                    <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Industry Component Drawer */}
          {(() => {
            const active = INDUSTRIES_SERVED.find((i) => i.id === selectedIndustry);
            if (!active) return null;
            return (
              <div className="p-6 rounded-2xl bg-industrial-surface border border-brass-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
                      SELECTED SECTOR
                    </span>
                    <h4 className="text-lg font-bold text-white">{active.name}</h4>
                  </div>
                  <p className="text-xs text-neutral-300">{active.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {active.components.map((c, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/50 border border-white/10 text-brass-200">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10 shrink-0 space-y-1 text-xs">
                  <span className="text-neutral-400 text-[10px] font-mono uppercase">SPECIFICATION HIGHLIGHT</span>
                  <p className="font-semibold text-brass-300">{active.specs}</p>
                  <button
                    onClick={() => openQuoteModal(active.name + " Components")}
                    className="mt-2 text-xs font-semibold text-white hover:text-brass-300 flex items-center gap-1"
                  >
                    <span>Inquire for {active.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — GLOBAL REACH (WORLD MAP)
      ========================================================================= */}
      <section className="py-24 bg-industrial-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              INTERNATIONAL SUPPLY FOOTPRINT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              ENGINEERED IN INDIA.<br />
              TRUSTED GLOBALLY.
            </h2>
            <p className="text-sm text-neutral-300">
              60–70% of ABC Brass manufacturing output is dispatched to overseas OEM partners and international distributors across major industrial corridors.
            </p>
          </div>

          {/* Interactive World Map */}
          <GlobalReachMap />
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — WHY ABC BRASS (6 VALUE PILLARS)
      ========================================================================= */}
      <section className="py-24 bg-industrial-dark relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              THE MANUFACTURING ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              WHY CHOOSE ABC BRASS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ABC_BRASS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 space-y-4 hover:shadow-xl hover:shadow-brass-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-brass-500/10 border border-brass-500/30 flex items-center justify-center">
                  {getWhyIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — PRODUCT APPLICATION (VISUAL COLLAGE)
      ========================================================================= */}
      <section className="py-24 bg-industrial-charcoal relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              FIELD IMPLEMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              PRECISION APPLIED IN CRITICAL SYSTEMS
            </h2>
            <p className="text-sm text-neutral-300">
              From heavy-duty air brake pneumatic loops to complex industrial hydraulic manifolds and precision electronic enclosures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/images/brass_industrial_assembly.jpg"
                alt="Automotive and pneumatic brake systems"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-brass-400 uppercase">HIGH PRESSURE SYSTEMS</span>
                <h4 className="text-lg font-bold text-white">Automotive & Fluid Manifolds</h4>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/images/brass_fittings_inspection.jpg"
                alt="High tolerance threaded couplings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-brass-400 uppercase">THREAD CONVERSIONS</span>
                <h4 className="text-lg font-bold text-white">Hydraulic & Refrigeration Lines</h4>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/images/cnc_machining_brass.jpg"
                alt="CNC turned brass components"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono text-brass-400 uppercase">BESPOKE BLUEPRINTS</span>
                <h4 className="text-lg font-bold text-white">Custom OEM Turned Parts</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13 — CATALOGUE DOWNLOAD CTA
      ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-industrial-black via-industrial-surface to-industrial-black relative border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-industrial-charcoal to-industrial-dark border border-brass-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brass-500/10 border border-brass-500/30 text-xs font-mono text-brass-300">
                <FileText className="w-3.5 h-3.5" />
                TECHNICAL CATALOGUE 2026 EDITION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                LOOKING FOR THE RIGHT COMPONENT?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Explore our complete product range, tolerance specifications, thread conversion charts, and material data sheets in one comprehensive technical manual.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/resources"
                  className="px-6 py-3.5 rounded-xl bg-brass-500 hover:bg-brass-400 text-black font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-lg shadow-brass-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD CATALOGUE</span>
                </Link>
                <button
                  onClick={() => openQuoteModal()}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </div>

            {/* 3D Floating Catalogue / Book Visual */}
            <div className="relative w-64 h-80 rounded-2xl bg-gradient-to-tr from-brass-600/30 via-industrial-surface to-brass-400/20 border-2 border-brass-500/40 p-6 flex flex-col justify-between shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brass-300">ABC BRASS</span>
                <span className="text-[10px] font-mono text-neutral-400">REV 2026.1</span>
              </div>
              <div className="space-y-2 text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-brass-500/20 border border-brass-500/40 flex items-center justify-center text-brass-300">
                  <BookOpenIcon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">ENGINEERING PRODUCT CATALOGUE</h4>
                <p className="text-[10px] text-neutral-400 font-mono">10 CATEGORIES • NPT/BSPP SPECS</p>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-mono text-brass-400 group-hover:underline">
                  CLICK TO VIEW ARCHIVE →
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14 — CONTACT & RFQ CENTER
      ========================================================================= */}
      <section id="contact-rfq" className="py-24 bg-industrial-dark relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brass-400">
              DIRECT PLANT INQUIRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              LET&apos;S BUILD THE RIGHT COMPONENT<br />
              FOR YOUR APPLICATION.
            </h2>
            <p className="text-sm text-neutral-300">
              Submit your technical inquiry or CAD drawing directly to our engineering team in Jamnagar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Contact Details & Department Contacts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-brass-400">HEADQUARTERS & MANUFACTURING</span>
                  <h4 className="text-xl font-bold text-white mt-1">ABC BRASS</h4>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {COMPANY_INFO.address.street},<br />
                    {COMPANY_INFO.address.city} - 4, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-[10px] font-mono">PRIMARY SALES INQUIRY</p>
                      <a href="mailto:sales@abcbrass.com" className="font-semibold text-brass-300 hover:underline">
                        sales@abcbrass.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                    <div>
                      <p className="text-neutral-400 text-[10px] font-mono">PLANT DESK</p>
                      <span className="font-semibold text-white">+91 (0288) 273-0000</span>
                    </div>
                  </div>
                </div>

                {/* Verified Department Contacts from existing site */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-400">DEPARTMENTAL DIRECTORIES:</span>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <p className="text-neutral-400">Exports:</p>
                      <p className="text-brass-300 truncate">export@abcbrass.com</p>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <p className="text-neutral-400">Factory:</p>
                      <p className="text-brass-300 truncate">factory@abcbrass.com</p>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <p className="text-neutral-400">Drawings:</p>
                      <p className="text-brass-300 truncate">inquiry@abcbrass.com</p>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <p className="text-neutral-400">Corporate:</p>
                      <p className="text-brass-300 truncate">info@abcbrass.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Factory Location Embed */}
              <div className="rounded-2xl overflow-hidden border border-white/10 h-64 relative bg-black">
                <iframe
                  title="ABC Brass Factory Jamnagar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118080.0538965027!2d70.0150965!3d22.4707021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395764d3755b4e79%3A0xc331ad02e1b12b5!2sDared%2C%20Jamnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Comprehensive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-industrial-surface border border-brass-500/30 shadow-2xl">
                {inquirySubmitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto">
                      Thank you. Our engineering team at the Jamnagar plant will review your specifications and reply with a formal technical quotation within 24 hours.
                    </p>
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-brass-500 text-black text-xs font-semibold hover:bg-brass-400 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">NAME *</label>
                        <input
                          type="text"
                          required
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          placeholder="Full Name"
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">COMPANY *</label>
                        <input
                          type="text"
                          required
                          value={inquiryCompany}
                          onChange={(e) => setInquiryCompany(e.target.value)}
                          placeholder="Company Name"
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">BUSINESS EMAIL *</label>
                        <input
                          type="email"
                          required
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="email@company.com"
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">PHONE / WHATSAPP *</label>
                        <input
                          type="tel"
                          required
                          value={inquiryPhone}
                          onChange={(e) => setInquiryPhone(e.target.value)}
                          placeholder="+1 / +49 / +91..."
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">DESTINATION COUNTRY *</label>
                        <input
                          type="text"
                          required
                          value={inquiryCountry}
                          onChange={(e) => setInquiryCountry(e.target.value)}
                          placeholder="e.g. Germany"
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">PRODUCT REQUIREMENT</label>
                        <select
                          value={inquiryCategory}
                          onChange={(e) => setInquiryCategory(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        >
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <option key={cat.slug} value={cat.name}>{cat.name}</option>
                          ))}
                          <option value="Custom OEM Machining">Custom OEM Machining</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-neutral-300 mb-1">ORDER VOLUME</label>
                        <select
                          value={inquiryQty}
                          onChange={(e) => setInquiryQty(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                        >
                          <option value="1,000 - 5,000 pcs (Pilot)">1,000 - 5,000 pcs (Pilot)</option>
                          <option value="5,000 - 25,000 pcs">5,000 - 25,000 pcs</option>
                          <option value="25,000 - 100,000 pcs">25,000 - 100,000 pcs</option>
                          <option value="100,000+ pcs">100,000+ pcs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">MESSAGE & SPECIFICATIONS</label>
                      <textarea
                        rows={3}
                        value={inquiryMsg}
                        onChange={(e) => setInquiryMsg(e.target.value)}
                        placeholder="Detail dimensions, threads (NPT/BSPP), material grade, or annual contract specifications..."
                        className="w-full p-3 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">UPLOAD BLUEPRINT / DRAWING (.PDF, .STEP, .DWG)</label>
                      <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-white/20 hover:border-brass-500/50 bg-black/40 cursor-pointer text-xs text-neutral-300">
                        <Download className="w-4 h-4 text-brass-400" />
                        <span>{fileName ? <strong className="text-brass-300">{fileName}</strong> : "Attach 2D/3D Drawing (Max 25MB)"}</span>
                        <input
                          type="file"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFileName(e.target.files[0].name);
                            }
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-400">ESTIMATED RESPONSE: &lt; 24 HOURS</span>
                      <button
                        type="submit"
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-brass-400 to-brass-600 text-black font-bold text-xs tracking-wider uppercase hover:from-brass-300 hover:to-brass-500 transition-all flex items-center gap-2 shadow-lg shadow-brass-500/20"
                      >
                        <Send className="w-4 h-4" />
                        SEND INQUIRY
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
