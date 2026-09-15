"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, CERTIFICATIONS } from "@/data/companyData";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowUpRight, 
  ExternalLink,
  MessageCircle,
  FileText
} from "lucide-react";

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-industrial-black border-t border-white/10 text-neutral-400 overflow-hidden">
      {/* Subtle top brass accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brass-500/60 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/abc-brass-logo.png"
                alt="Ashay Brass Components"
                width={352}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              Since 1990, ABC BRASS has been producing precision-machined brass fluid connectors, fittings, and bespoke OEM components in Jamnagar, Gujarat. Exporting 60–70% of production to international industrial markets.
            </p>

            {/* Quality Stamps */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.code}
                  className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-white/[0.04] border border-white/10 text-neutral-300 flex items-center gap-1"
                >
                  <ShieldCheck className="w-3 h-3 text-brass-400" />
                  {cert.code}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="px-5 py-2.5 rounded-xl bg-brass-500/15 border border-brass-500/40 text-brass-300 text-xs font-semibold hover:bg-brass-500 hover:text-black transition-all flex items-center gap-2"
              >
                <span>Request Technical Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brass-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brass-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brass-300 transition-colors">
                  Products Catalogue
                </Link>
              </li>
              <li>
                <Link href="/oem-solutions" className="hover:text-brass-300 transition-colors">
                  OEM Solutions
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-brass-300 transition-colors">
                  Manufacturing Facility
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-brass-300 transition-colors">
                  Quality Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brass-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Product Lines
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/pipe-fittings" className="hover:text-brass-300 transition-colors">
                  Pipe Fittings
                </Link>
              </li>
              <li>
                <Link href="/products/compressor-fittings" className="hover:text-brass-300 transition-colors">
                  Compressor Fittings
                </Link>
              </li>
              <li>
                <Link href="/products/hose-barb-adapters" className="hover:text-brass-300 transition-colors">
                  Hose Barb Adapters
                </Link>
              </li>
              <li>
                <Link href="/products/brass-tube-fittings" className="hover:text-brass-300 transition-colors">
                  Brass Tube Fittings
                </Link>
              </li>
              <li>
                <Link href="/products/pex-screw-fittings" className="hover:text-brass-300 transition-colors">
                  PEX Screw Fittings
                </Link>
              </li>
              <li>
                <Link href="/products/garden-fittings" className="hover:text-brass-300 transition-colors">
                  Garden Fittings
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Manufacturing & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Factory Location
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass-400 shrink-0 mt-1" />
                <span className="text-xs leading-relaxed text-neutral-300">
                  {COMPANY_INFO.address.street},<br />
                  {COMPANY_INFO.address.city} - 4, {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brass-400 shrink-0" />
                <a
                  href="mailto:sales@abcbrass.com"
                  className="text-xs text-brass-300 hover:underline"
                >
                  sales@abcbrass.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brass-400 shrink-0" />
                <span className="text-xs text-neutral-300">
                  +91 (0288) 273-0000
                </span>
              </div>

              {/* Department emails */}
              <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
                <p>Exports: <strong className="text-neutral-300">export@abcbrass.com</strong></p>
                <p>Factory: <strong className="text-neutral-300">factory@abcbrass.com</strong></p>
                <p>Inquiries: <strong className="text-neutral-300">inquiry@abcbrass.com</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} ABC BRASS. All rights reserved. Precision Brass Manufacturing & Exporter.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources" className="hover:text-brass-300 transition-colors">
              Technical Catalogue
            </Link>
            <Link href="/quality" className="hover:text-brass-300 transition-colors">
              Certifications
            </Link>
            <Link href="/contact" className="hover:text-brass-300 transition-colors">
              Plant Coordinates
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
