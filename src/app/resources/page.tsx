import React from "react";
import { Metadata } from "next";
import { FileText, Download, ShieldCheck, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Resources & Downloads | ABC BRASS",
  description:
    "Download technical product catalogues, ISO & IATF quality certifications, thread compatibility charts, and brass metallurgy alloy comparison sheets.",
};

export default function ResourcesPage() {
  const downloadItems = [
    {
      title: "ABC BRASS Engineering Master Catalogue 2026",
      desc: "Complete 84-page technical manual covering all 10 brass component categories, dimensions, working pressures, and NPT/BSPP drawings.",
      format: "PDF • 14.8 MB",
      badge: "CORE CATALOGUE",
    },
    {
      title: "IATF 16949 & ISO 9001:2015 Quality Certificate Pack",
      desc: "Accredited certificates verifying quality management system compliance for automotive and precision industrial manufacturing.",
      format: "PDF • 2.4 MB",
      badge: "CERTIFICATE",
    },
    {
      title: "Thread Standard & Conversion Engineering Chart",
      desc: "Comprehensive conversion reference bridging NPT, BSPP (G), BSPT (R), Metric ISO, JIS, JIC 37°, and SAE ORB thread geometries.",
      format: "PDF • 1.1 MB",
      badge: "TECHNICAL DATA",
    },
    {
      title: "Brass Alloy Chemical & Mechanical Properties Guide",
      desc: "Metallurgical data sheets for CW614N (CuZn39Pb3), IS 319 Gr. 1, CZ121, DZR, and Lead-Free alloys including tensile strength and elongation.",
      format: "PDF • 1.9 MB",
      badge: "MATERIAL SPEC",
    },
  ];

  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              TECHNICAL DOCUMENTATION
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              ENGINEERING<br />
              <span className="text-metallic-brass">RESOURCES.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Access product catalogues, accredited quality certificates, international thread charts, and material compliance documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Direct Downloads & Technical Manuals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadItems.map((doc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-industrial-surface border border-white/10 hover:border-brass-500/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
                    {doc.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">{doc.format}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{doc.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{doc.desc}</p>
              </div>

              <a
                href={`mailto:sales@abcbrass.com?subject=Request%20Download:%20${encodeURIComponent(doc.title)}`}
                className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-brass-500 hover:text-black border border-white/10 hover:border-brass-500 text-neutral-200 text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Request Document / Direct Download</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Thread Compatibility Reference Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          International Thread Standard Compatibility
        </h2>
        <div className="p-6 rounded-2xl bg-industrial-surface border border-white/10 overflow-x-auto">
          <table className="w-full text-left text-xs font-mono text-neutral-300 min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 text-brass-300">
                <th className="pb-3">THREAD TYPE</th>
                <th className="pb-3">STANDARD CODE</th>
                <th className="pb-3">FLANK ANGLE</th>
                <th className="pb-3">SEALING MECHANISM</th>
                <th className="pb-3">TYPICAL APPLICATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-3 font-bold text-white">NPT (National Pipe Taper)</td>
                <td>ASME B1.20.1</td>
                <td>60°</td>
                <td>Thread interference / Dryseal</td>
                <td>US Hydraulics, Air, Plumbing</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">BSPP (Parallel G)</td>
                <td>ISO 228-1 / BS 2779</td>
                <td>55°</td>
                <td>O-ring or bonded washer face</td>
                <td>European industrial & pneumatic</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">BSPT (Taper R)</td>
                <td>ISO 7-1 / BS 21</td>
                <td>55°</td>
                <td>Tapered thread engagement</td>
                <td>UK, Asian fluid distribution</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">Metric ISO</td>
                <td>ISO 261 / DIN 13</td>
                <td>60°</td>
                <td>Chamfer seat or O-ring</td>
                <td>Automotive & Machinery</td>
              </tr>
              <tr>
                <td className="py-3 font-bold text-white">JIC 37° Flared</td>
                <td>SAE J514</td>
                <td>60° (37° flare)</td>
                <td>Metal-to-metal flare nose</td>
                <td>High-pressure mobile hydraulics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
