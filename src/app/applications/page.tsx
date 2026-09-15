"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES_SERVED } from "@/data/companyData";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { 
  Car, 
  Droplets, 
  Wind, 
  Zap, 
  Pipette, 
  Gauge, 
  Flower2, 
  ThermometerSnowflake, 
  ShieldCheck, 
  Cog, 
  ArrowRight,
  Send
} from "lucide-react";

export default function ApplicationsPage() {
  const { openQuoteModal } = useQuoteModal();

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Car": return <Car className="w-6 h-6 text-brass-400" />;
      case "Droplets": return <Droplets className="w-6 h-6 text-brass-400" />;
      case "Wind": return <Wind className="w-6 h-6 text-brass-400" />;
      case "Zap": return <Zap className="w-6 h-6 text-brass-400" />;
      case "Pipette": return <Pipette className="w-6 h-6 text-brass-400" />;
      case "Gauge": return <Gauge className="w-6 h-6 text-brass-400" />;
      case "Flower2": return <Flower2 className="w-6 h-6 text-brass-400" />;
      case "ThermometerSnowflake": return <ThermometerSnowflake className="w-6 h-6 text-brass-400" />;
      default: return <Cog className="w-6 h-6 text-brass-400" />;
    }
  };

  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              CROSS-INDUSTRY ENGINEERING
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              INDUSTRIAL<br />
              <span className="text-metallic-brass">APPLICATIONS.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Discover how ABC BRASS fluid system connectors, compression fittings, and custom turned components empower mission-critical equipment across 12 major industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 12 Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((industry) => (
            <div
              key={industry.id}
              className="p-8 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:shadow-2xl hover:shadow-brass-500/10 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brass-500/10 border border-brass-500/30 flex items-center justify-center">
                    {getIndustryIcon(industry.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-brass-400 bg-brass-500/10 px-2.5 py-1 rounded border border-brass-500/20">
                    OEM VERIFIED
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-brass-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Typical Components */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">TYPICAL COMPONENTS:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.components.map((comp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-black/40 border border-white/10 text-neutral-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Operating Spec */}
                <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-xs text-neutral-300">
                  <span className="text-neutral-400 text-[10px] font-mono block uppercase">OPERATING SPECIFICATION:</span>
                  <p className="font-semibold text-brass-200 mt-0.5">{industry.specs}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openQuoteModal(industry.name + " Application")}
                  className="w-full py-2.5 rounded-xl bg-brass-500/15 hover:bg-brass-500 text-brass-300 hover:text-black border border-brass-500/40 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire for {industry.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
