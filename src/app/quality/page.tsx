import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { CERTIFICATIONS } from "@/data/companyData";
import { ShieldCheck, CheckCircle2, Award, Microscope, Gauge, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality & Certifications | ABC BRASS — IATF 16949 & ISO 9001",
  description:
    "Explore ABC BRASS's zero-defect quality management systems, IATF 16949 automotive certification, ISO 9001:2015 standards, and optical metrology testing laboratory in Jamnagar.",
};

export default function QualityPage() {
  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              ZERO-DEFECT METROLOGY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              QUALITY IS BUILT INTO<br />
              <span className="text-metallic-brass">EVERY COMPONENT.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              For decades, ABC BRASS has maintained certification under IATF 16949, ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and RoHS classifications for international quality standardization.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Accredited Management Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.code}
              className="p-8 rounded-2xl bg-industrial-surface border border-brass-500/30 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-brass-500/10 border border-brass-500/30 flex items-center justify-center text-brass-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white font-mono">{cert.code}</h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  VERIFIED AUDIT
                </span>
              </div>
              <h4 className="text-sm font-semibold text-brass-200">{cert.title}</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">{cert.scope}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrology Laboratory Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-brass-500/30 shadow-2xl">
              <Image
                src="/images/quality_assurance_lab.jpg"
                alt="Optical profile projector and CMM inspection lab"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <span className="text-brass-300 font-mono font-bold">METROLOGY LAB EQUIPMENT</span>
                <p className="text-neutral-300 mt-0.5">Mitutoyo Optical Projectors, Calibrated Thread Gauges & Burst Testers</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-brass-400 font-bold uppercase tracking-widest">
              INSPECTION INSTRUMENTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Test Instruments & Inspection Protocols
            </h2>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="p-4 rounded-xl bg-industrial-surface border border-white/5 space-y-1">
                <strong className="text-white block text-sm">Material Chemical Verification</strong>
                <p className="text-neutral-400">Optical emission spectrometer verifies Cu, Zn, Pb, Fe, and impurity ratios of every incoming brass lot before machining.</p>
              </div>
              <div className="p-4 rounded-xl bg-industrial-surface border border-white/5 space-y-1">
                <strong className="text-white block text-sm">Optical Profile Projection</strong>
                <p className="text-neutral-400">High-magnification contour comparison detects thread flank angle discrepancies and micro-burrs down to 0.005mm.</p>
              </div>
              <div className="p-4 rounded-xl bg-industrial-surface border border-white/5 space-y-1">
                <strong className="text-white block text-sm">Leakage & Pressure Burst Testing</strong>
                <p className="text-neutral-400">100% pneumatic bubble leak testing under dry nitrogen and hydrostatic burst testing up to 10,000 PSI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
