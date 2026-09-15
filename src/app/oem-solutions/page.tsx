import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { OEM_WORKFLOW_STEPS, COMPANY_INFO } from "@/data/companyData";
import { ShieldCheck, ArrowRight, CheckCircle2, Wrench, Settings, Cog, Send, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "OEM & Custom Solutions | ABC BRASS — Bespoke Brass Contract Manufacturing",
  description:
    "End-to-end OEM and ODM contract manufacturing of precision brass fittings, connectors, and CNC turned components from blueprint to global shipment.",
};

export default function OemSolutionsPage() {
  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              CONTRACT ENGINEERING & OEM / ODM
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              BUILT AROUND YOUR<br />
              <span className="text-metallic-brass">EXACT BLUEPRINTS.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              We engineer custom brass components to strict OEM specifications. From foreign-to-domestic thread conversions to high-volume multi-spindle production.
            </p>
          </div>
        </div>
      </section>

      {/* OEM Capabilities Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
              ENGINEERING ADAPTABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Foreign & Domestic Thread Conversions
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              ABC BRASS specializes in the conversion of hydraulic adapters and precision fittings between international foreign and domestic thread geometries.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-4 rounded-xl bg-industrial-surface border border-white/10 space-y-1">
                <span className="text-brass-400 font-bold">FOREIGN THREADS:</span>
                <p className="text-neutral-300">BSPP, BSPT, JIS, Kobelco, Komatsu, DIN, GOST, Metric ISO</p>
              </div>
              <div className="p-4 rounded-xl bg-industrial-surface border border-white/10 space-y-1">
                <span className="text-brass-400 font-bold">AMERICAN / DOMESTIC:</span>
                <p className="text-neutral-300">NPT / Dryseal, JIC 37°, ORFS, SAE ORB, UNF / UNC</p>
              </div>
            </div>
            <p className="text-xs text-neutral-400">
              Raw brass rods sourced as per BSS, ISS, ASTM, DIN, and GOST standards in rounds, hex, square, flats, and custom profiles ranging from 1mm to 150mm.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-brass-500/30 shadow-2xl">
              <Image
                src="/images/cnc_machining_brass.jpg"
                alt="Precision CNC lathe turning brass workpiece"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-brass-300 font-mono font-bold">TOLERANCE CAPABILITY</span>
                <p className="text-neutral-300 mt-0.5">±0.01 mm standard • Down to ±0.005 mm on micro-turning stations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Manufacturing Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
            SYSTEMATIC STAGE EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 8-Stage OEM Production Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OEM_WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black font-mono text-metallic-brass">
                  {step.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-brass-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
