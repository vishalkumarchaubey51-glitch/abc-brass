import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { COMPANY_INFO, COMPANY_STATS, TIMELINE_DATA } from "@/data/companyData";
import Timeline from "@/components/ui/Timeline";
import StatCounter from "@/components/ui/StatCounter";
import { ShieldCheck, Factory, CheckCircle2, ArrowRight, Award, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ABC BRASS — 35+ Years of Precision Engineering Heritage",
  description:
    "Founded in 1990 in Jamnagar, Gujarat, ABC BRASS has grown from a 1,000 sq. ft. workshop into a 50,000 sq. ft. high-precision manufacturing and export facility.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none bg-tech-grid" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              COMPANY PROFILE & HERITAGE
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              ENGINEERING TRUST<br />
              <span className="text-metallic-brass">SINCE 1990.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Located in western India in Jamnagar, Gujarat — the brass hub of the nation — ABC BRASS combines three and a half decades of metallurgical craftsmanship with modern multi-axis CNC manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
              JAMNAGAR, GUJARAT, INDIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From 1,000 Sq. Ft. Workshop to Global Exporter
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              ABC BRASS started in 1990 with only 1,000 square feet and 10 dedicated craftsmen. Through unrelenting focus on precision, reliable delivery, and competitive engineering, the company expanded systematically to become a premier OEM supplier.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Today, ABC BRASS operates across a 50,000 sq. ft. modern production plant with a skilled workforce of 125 people, delivering over 10 million precision brass components annually to domestic OEMs and overseas customers across Europe, the Americas, and Asia.
            </p>

            {/* Quality Statement Box */}
            <div className="p-6 rounded-2xl bg-industrial-surface border-l-4 border-brass-500 space-y-2">
              <h3 className="text-xs font-mono uppercase text-brass-300 font-bold">
                Quality Policy Statement
              </h3>
              <p className="text-xs text-neutral-300 italic leading-relaxed">
                &ldquo;The highest quality in everything we do. Every product we manufacture... every design improvement or innovation we create... every material we choose... every decision we make is driven by safety and performance. Safe, durable products save money, save time, and protect industrial investments.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[460px] rounded-2xl overflow-hidden border border-brass-500/30 shadow-2xl">
              <Image
                src="/images/brass_factory_floor.jpg"
                alt="ABC Brass 50,000 sq ft production floor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-industrial-black/90 border border-white/10 text-xs">
                <p className="text-brass-300 font-mono font-bold">PLANT METRICS // JAMNAGAR</p>
                <p className="text-neutral-300 mt-0.5">50,000 Sq. Ft. • 125 Personnel • 10M+ Annual Units</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 grid grid-cols-2 md:grid-cols-5 gap-6 text-center sm:text-left">
          {COMPANY_STATS.map((s, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl font-black font-mono text-metallic-brass">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs font-bold text-white uppercase font-mono">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
            HISTORICAL TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Corporate Milestones
          </h2>
        </div>
        <Timeline />
      </section>
    </div>
  );
}
