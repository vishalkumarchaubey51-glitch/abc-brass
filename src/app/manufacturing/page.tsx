import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { COMPANY_INFO, COMPANY_STATS } from "@/data/companyData";
import { Factory, Cog, Wrench, ShieldCheck, Box, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing & Infrastructure | ABC BRASS Jamnagar Plant",
  description:
    "Explore ABC BRASS's 50,000 sq. ft. precision manufacturing plant in Jamnagar, Gujarat. Equipped with CNC turning centers, multi-spindle automatics, and optical metrology labs.",
};

export default function ManufacturingPage() {
  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              INFRASTRUCTURE & CAPACITY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              50,000 SQ. FT.<br />
              <span className="text-metallic-brass">MANUFACTURING COMPLEX.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Located in Dared G.I.D.C., Jamnagar, Gujarat — engineered for 10M+ annual components with precision CNC turning, high-speed automated lathes, and automated finishing lines.
            </p>
          </div>
        </div>
      </section>

      {/* Machinery & Process Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
            FACILITY HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Integrated Production Floor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brass-500/10 border border-brass-500/30 flex items-center justify-center text-brass-300">
              <Cog className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">CNC Turning & Multi-Spindle Automatics</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Equipped with high-precision single-point CNC lathes, multi-spindle automats, dedicated thread chasing stations, and specialized knurling machines capable of handling rod diameters from 1mm up to 150mm.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Thread Chasing: NPT, BSPP, BSPT, Metric, JIS, JIC 37°</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Knurling Capabilities: Diamond, Helical, Straight Knurl</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Capacity: 10,000,000+ brass parts annually</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brass-500/10 border border-brass-500/30 flex items-center justify-center text-brass-300">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Surface Finishing & Export Packaging</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              In-house ultrasonic degreasing, natural chemical passivation, electro-nickel plating, chrome plating, and tin coating ensuring superior corrosion resistance under harsh environmental conditions.
            </p>
            <div className="space-y-2 pt-2 text-xs font-mono text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Ultrasonic Degreasing: Zero residual cutting oil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Plating: Nickel, Chrome, Tin, and Zinc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brass-400 shrink-0" />
                <span>Packaging: VCI anti-corrosion barrier & export pallets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Plant Tour Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h3 className="text-xl font-bold text-white tracking-wide">
          Inside the Jamnagar Facility
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/brass_factory_floor.jpg"
              alt="50,000 sq ft manufacturing bay"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/cnc_machining_brass.jpg"
              alt="CNC turning center in action"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/images/quality_assurance_lab.jpg"
              alt="Optical measurement laboratory"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
