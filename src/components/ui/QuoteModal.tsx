"use client";

import React, { useState, useEffect } from "react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import { COMPANY_INFO } from "@/data/companyData";
import { X, Upload, CheckCircle2, ShieldCheck, Send, FileText, Building2, User, Mail, Phone, Globe } from "lucide-react";

export default function QuoteModal() {
  const { isOpen, preselectedProduct, closeQuoteModal } = useQuoteModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    quantity: "5,000 - 25,000 pcs",
    alloy: "CW614N (Standard Free Cutting)",
    threadStandard: "NPT / ASME B1.20.1",
    message: "",
  });

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiry regarding: ${preselectedProduct}\n`,
      }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRfqNumber(generatedRfq);
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFileName(null);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-2xl bg-industrial-charcoal border border-brass-500/30 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-industrial-surface">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-brass-500/20 text-brass-300 border border-brass-500/30">
                OEM / EXPORT RFQ
              </span>
              <span className="text-xs text-neutral-400">JAMNAGAR FACILITY DIRECT</span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Request a Technical Quotation
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Inquiry Successfully Transmitted</h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto">
                Your technical request has been routed to our Engineering & Export Sales division.
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-black/50 border border-brass-500/30 text-xs font-mono text-brass-300 mt-2">
                REFERENCE CODE: <strong className="text-white">{rfqNumber}</strong>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-industrial-surface border border-white/10 text-xs text-neutral-400 text-left space-y-1">
              <p className="font-semibold text-white">Next Steps:</p>
              <p>• Engineering feasibility and price estimate will be dispatched within 24 hours.</p>
              <p>• For immediate urgent revisions, email: <strong className="text-brass-300">sales@abcbrass.com</strong></p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="px-6 py-2.5 rounded-xl bg-brass-500 text-black font-semibold text-sm hover:bg-brass-400 transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {preselectedProduct && (
              <div className="p-3 rounded-lg bg-brass-500/10 border border-brass-500/30 text-xs text-brass-300 flex items-center justify-between">
                <span>Selected Item: <strong className="text-white">{preselectedProduct}</strong></span>
                <span className="font-mono text-[10px] bg-brass-500/20 px-2 py-0.5 rounded">ATTACHED TO INQUIRY</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Company / Organization *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Fluid Technologies GmbH"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Business Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="m.vance@apexfluid.com"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Phone / WhatsApp (with country code) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 170 000000"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Destination Country / Market *
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="Germany / United States / India"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Product Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
                >
                  <option value="">Select Category (or Custom OEM)</option>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                  <option value="Custom OEM Machining">Custom OEM / Blueprint Machining</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Estimated Batch / Annual Qty
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500"
                >
                  <option value="1,000 - 5,000 pcs (Pilot)">1,000 - 5,000 pcs (Pilot)</option>
                  <option value="5,000 - 25,000 pcs">5,000 - 25,000 pcs</option>
                  <option value="25,000 - 100,000 pcs">25,000 - 100,000 pcs</option>
                  <option value="100,000+ pcs (High Volume)">100,000+ pcs (High Volume)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Brass Alloy
                </label>
                <select
                  value={formData.alloy}
                  onChange={(e) => setFormData({ ...formData, alloy: e.target.value })}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500"
                >
                  <option value="CW614N (CuZn39Pb3)">CW614N (CuZn39Pb3)</option>
                  <option value="IS 319 Grade 1">IS 319 Grade 1</option>
                  <option value="CZ121 Free Cutting">CZ121 Free Cutting</option>
                  <option value="Lead-Free Eco Brass">Lead-Free Eco Brass (RoHS)</option>
                  <option value="DZR (Anti-Dezincification)">DZR (Anti-Dezincification)</option>
                  <option value="Customer Specified">Per Drawing Specification</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Thread Standard
                </label>
                <select
                  value={formData.threadStandard}
                  onChange={(e) => setFormData({ ...formData, threadStandard: e.target.value })}
                  className="w-full px-2.5 py-2 text-xs rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500"
                >
                  <option value="NPT / Dryseal">NPT / Dryseal</option>
                  <option value="BSPP (Parallel)">BSPP (Parallel G)</option>
                  <option value="BSPT (Taper R)">BSPT (Taper R)</option>
                  <option value="Metric ISO">Metric ISO</option>
                  <option value="JIS / Komatsu">JIS / Komatsu</option>
                  <option value="JIC 37° / SAE ORB">JIC 37° / SAE ORB</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Technical Requirements / Tolerances / Scope
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention specific dimensions, tolerances (e.g. ±0.01mm), surface plating (nickel/chrome), packaging requirements..."
                className="w-full p-3 text-sm rounded-lg bg-industrial-black border border-white/10 text-white focus:outline-none focus:border-brass-500 transition-colors"
              />
            </div>

            {/* CAD File Upload Area */}
            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                Upload 2D / 3D Blueprint Drawing (.PDF, .STEP, .DWG, .IGS)
              </label>
              <label className="flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-white/15 hover:border-brass-500/50 bg-black/30 cursor-pointer transition-colors">
                <Upload className="w-5 h-5 text-brass-400 mb-1" />
                <span className="text-xs text-neutral-300">
                  {fileName ? (
                    <strong className="text-brass-300">{fileName} (Attached)</strong>
                  ) : (
                    "Click to attach CAD drawing or drag file here (Max 25 MB)"
                  )}
                </span>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.step,.stp,.dwg,.dxf,.igs,.iges,.zip"
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected • Jamnagar Direct Factory Quote</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brass-400 to-brass-500 text-black font-semibold text-sm hover:from-brass-300 hover:to-brass-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brass-500/20"
              >
                <Send className="w-4 h-4" />
                Submit Technical RFQ
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
