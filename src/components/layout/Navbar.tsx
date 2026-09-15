"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { PRODUCT_CATEGORIES } from "@/data/productsData";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Layers,
  Factory,
  Search
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PRODUCTS", href: "/products", hasMegaMenu: true },
    { name: "OEM SOLUTIONS", href: "/oem-solutions" },
    { name: "MANUFACTURING", href: "/manufacturing" },
    { name: "QUALITY", href: "/quality" },
    { name: "APPLICATIONS", href: "/applications" },
    { name: "RESOURCES", href: "/resources" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "glass-nav py-3.5 shadow-2xl shadow-black/60"
            : "bg-transparent py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/abc-brass-logo.png"
              alt="Ashay Brass Components"
              width={352}
              height={100}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMegaMenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors flex items-center gap-1 rounded-lg ${
                        isActive
                          ? "text-brass-300 bg-brass-500/10"
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? "rotate-180 text-brass-400" : ""
                        }`}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {megaMenuOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] pt-3 z-50">
                        <div className="p-6 rounded-2xl bg-industrial-charcoal/95 border border-industrial-border-brass backdrop-blur-xl shadow-2xl">
                          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                            <div>
                              <span className="text-[10px] font-mono uppercase tracking-wider text-brass-400">
                                ENGINEERING CATALOGUE
                              </span>
                              <h4 className="text-sm font-bold text-white">
                                Precision Brass Component Categories
                              </h4>
                            </div>
                            <Link
                              href="/products"
                              className="text-xs text-brass-300 hover:text-brass-200 flex items-center gap-1 font-semibold group"
                            >
                              Explore All Products
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <Link
                                key={cat.slug}
                                href={`/products/${cat.slug}`}
                                className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-brass-500/30 transition-all flex items-start gap-3 group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center shrink-0 text-brass-400 group-hover:text-brass-300 group-hover:scale-105 transition-all">
                                  <Layers className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-white group-hover:text-brass-300 transition-colors truncate">
                                      {cat.name}
                                    </span>
                                    <span className="text-[9px] font-mono text-neutral-400 shrink-0">
                                      {cat.code}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-neutral-400 line-clamp-1">
                                    {cat.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                            <span>Thread Standards: NPT, BSPP, BSPT, JIS, Metric, JIC, ORFS</span>
                            <span className="text-brass-400">10M+ Annual Component Output</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors rounded-lg ${
                    isActive
                      ? "text-brass-300 bg-brass-500/10 font-bold"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brass-400 via-brass-500 to-brass-600 text-black font-semibold text-xs tracking-wider uppercase hover:from-brass-300 hover:to-brass-500 transition-all shadow-lg shadow-brass-500/20 active:scale-95"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 rounded-lg bg-brass-500 text-black font-semibold text-xs uppercase"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[68px] z-40 xl:hidden bg-industrial-black/95 backdrop-blur-2xl border-t border-white/10 p-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-brass-500/10 border border-brass-500/30 text-xs text-brass-300 flex items-center justify-between">
              <span>Jamnagar Factory Direct OEM</span>
              <span className="font-mono">35+ Yrs Exp</span>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    pathname === link.href
                      ? "bg-brass-500 text-black font-bold"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brass-400 to-brass-600 text-black font-bold text-sm tracking-wide uppercase shadow-lg shadow-brass-500/25"
              >
                Request a Quote
              </button>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brass-400" />
                  <span>sales@abcbrass.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Factory className="w-4 h-4 text-brass-400" />
                  <span>Dared GIDC, Jamnagar, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
