"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/companyData";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Download, 
  Factory, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("Pipe Fittings");
  const [quantity, setQuantity] = useState("5,000 - 25,000 pcs");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-industrial-dark min-h-screen py-12 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border border-brass-500/30 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-brass-500/20 text-brass-300 border border-brass-500/30">
              DIRECT FACTORY INQUIRY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              CONNECT WITH OUR<br />
              <span className="text-metallic-brass">ENGINEERING TEAM.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Located in western India&apos;s brass manufacturing hub. Send CAD blueprints, request volume pricing, or discuss OEM contract manufacturing directly with our plant specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Departmental Contacts & Plant Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-industrial-surface border border-white/10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase text-brass-400">CORPORATE HEADQUARTERS & FOUNDRY</span>
                <h3 className="text-2xl font-bold text-white mt-1">ABC BRASS</h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {COMPANY_INFO.address.street},<br />
                  {COMPANY_INFO.address.city} - 4, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                  <div>
                    <span className="text-neutral-400 text-[10px] font-mono">PRIMARY SALES DESK</span>
                    <p className="font-semibold text-brass-300">sales@abcbrass.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                  <div>
                    <span className="text-neutral-400 text-[10px] font-mono">PLANT OFFICE PHONE</span>
                    <p className="font-semibold text-white">+91 (0288) 273-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-brass-400 shrink-0" />
                  <div>
                    <span className="text-neutral-400 text-[10px] font-mono">WORKING HOURS (IST)</span>
                    <p className="text-neutral-300">Mon – Sat: 08:30 – 19:30</p>
                  </div>
                </div>
              </div>

              {/* Verified Department Directories */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase text-neutral-400">
                  VERIFIED DEPARTMENT EMAIL DIRECTORIES:
                </span>
                <div className="space-y-1.5 text-xs font-mono">
                  {COMPANY_INFO.departments.map((dept) => (
                    <div
                      key={dept.email}
                      className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between"
                    >
                      <span className="text-neutral-400 text-[11px]">{dept.name}:</span>
                      <a href={`mailto:${dept.email}`} className="text-brass-300 font-semibold hover:underline">
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-72 bg-black">
              <iframe
                title="ABC Brass Jamnagar Dared GIDC Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118080.0538965027!2d70.0150965!3d22.4707021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395764d3755b4e79%3A0xc331ad02e1b12b5!2sDared%2C%20Jamnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Technical Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-industrial-surface border border-brass-500/30 shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Transmitted</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Your technical inquiry has been assigned to our export engineering desk. We review prints and return formal price quotations within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-brass-500 text-black text-xs font-semibold hover:bg-brass-400"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Request a Technical Quotation</h3>
                    <p className="text-xs text-neutral-400">
                      Fill in the parameters below or attach your CAD drawing directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">NAME *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Full Name"
                        className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">COMPANY *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Organization Name"
                        className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">WORK EMAIL *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="buyer@engineering.com"
                        className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">PHONE / WHATSAPP *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
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
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. Germany"
                        className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">PRODUCT CATEGORY</label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                      >
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.slug} value={cat.name}>{cat.name}</option>
                        ))}
                        <option value="Custom OEM Machining">Custom OEM Machining</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1">BATCH VOLUME</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
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
                    <label className="block text-xs font-mono text-neutral-300 mb-1">TECHNICAL SPECIFICATIONS</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify material alloy (CW614N, CZ121, IS 319), thread requirements, tolerances, or testing protocols..."
                      className="w-full p-3 rounded-xl bg-industrial-black border border-white/10 text-white text-xs focus:outline-none focus:border-brass-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1">ATTACH CAD DRAWING (.PDF, .STEP, .DWG)</label>
                    <label className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-dashed border-white/20 hover:border-brass-500/50 bg-black/40 cursor-pointer text-xs text-neutral-300">
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

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Jamnagar Plant Direct • Strict NDA Assured</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brass-400 to-brass-600 text-black font-bold text-xs tracking-wider uppercase hover:from-brass-300 hover:to-brass-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brass-500/20"
                    >
                      <Send className="w-4 h-4" />
                      SUBMIT TECHNICAL RFQ
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
