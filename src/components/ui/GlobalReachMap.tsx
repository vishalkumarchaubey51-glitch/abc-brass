"use client";

import React, { useState } from "react";
import { Globe, Navigation, Ship, ShieldCheck, CheckCircle2, ArrowUpRight } from "lucide-react";

interface ExportRoute {
  id: string;
  destination: string;
  type: string;
  transitHub: string;
  leadTime: string;
  standards: string;
  x: number;
  y: number;
}

const EXPORT_ROUTES: ExportRoute[] = [
  {
    id: "europe",
    destination: "European OEM Markets",
    type: "International Export",
    transitHub: "Rotterdam / Hamburg / Antwerp",
    leadTime: "18–22 Days Ocean Freight",
    standards: "CW614N, RoHS, DIN, BSPP / Metric",
    x: 480,
    y: 200,
  },
  {
    id: "north-america",
    destination: "North American Industrial Tier-1",
    type: "International Export",
    transitHub: "New York / Los Angeles / Houston",
    leadTime: "24–28 Days Ocean Freight",
    standards: "ASME B1.20.1 NPT, SAE J246, J513, ASTM",
    x: 230,
    y: 220,
  },
  {
    id: "middle-east",
    destination: "Middle East & Gulf Industrial",
    type: "International Export",
    transitHub: "Jebel Ali / Dammam",
    leadTime: "4–6 Days Direct Sea Transit",
    standards: "BSPP, NPT, IS 319, Gas & Water Spec",
    x: 580,
    y: 270,
  },
  {
    id: "asia-pacific",
    destination: "East Asia & Pacific OEM",
    type: "International Export",
    transitHub: "Singapore / Busan / Yokohama",
    leadTime: "12–16 Days Direct Sea Transit",
    standards: "JIS, Metric, Kobelco, Komatsu Threads",
    x: 820,
    y: 290,
  },
  {
    id: "domestic",
    destination: "Domestic Indian OEM Centers",
    type: "Domestic OEM",
    transitHub: "Pune / Chennai / NCR / Gujarat Industrial Corridor",
    leadTime: "24–48 Hours Road Transit",
    standards: "IS 319, IATF 16949, Direct Line Feed",
    x: 650,
    y: 315,
  },
];

export default function GlobalReachMap() {
  const [activeRoute, setActiveRoute] = useState<ExportRoute>(EXPORT_ROUTES[0]);

  // Jamnagar Hub Coordinates on SVG Canvas (approx center)
  const hubX = 645;
  const hubY = 300;

  return (
    <div className="w-full space-y-6">
      {/* Map Interactive Container */}
      <div className="relative w-full h-[460px] md:h-[520px] rounded-2xl bg-industrial-black border border-industrial-border-brass overflow-hidden shadow-2xl">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        {/* Technical Radar rings around Jamnagar */}
        <div
          style={{ left: `${(hubX / 1000) * 100}%`, top: `${(hubY / 500) * 100}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-48 h-48 rounded-full border border-brass-500/20 animate-ping opacity-25" />
          <div className="w-96 h-96 rounded-full border border-brass-500/10 -translate-x-24 -translate-y-24" />
        </div>

        {/* SVG World Canvas */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="brassBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ecd078" stopOpacity="1" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Simplified Stylized World Continents */}
          {/* North America */}
          <path
            d="M140,110 Q210,100 270,140 Q310,210 260,280 Q200,320 180,260 Q140,220 120,160 Z"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          {/* South America */}
          <path
            d="M260,300 Q330,320 320,400 Q280,470 240,420 Q230,350 260,300 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          {/* Europe */}
          <path
            d="M450,110 Q540,100 550,160 Q520,200 460,210 Q420,170 450,110 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="1"
          />
          {/* Africa */}
          <path
            d="M460,220 Q540,210 560,290 Q540,400 480,420 Q440,340 450,260 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          {/* Asia & India */}
          <path
            d="M570,120 Q750,100 860,180 Q840,300 750,330 Q680,360 620,320 Q580,240 570,120 Z"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="1"
          />
          {/* Australia */}
          <path
            d="M800,360 Q880,350 890,410 Q840,450 790,430 Q780,390 800,360 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />

          {/* Dynamic Curved Transmission Arcs from Jamnagar to Export Hubs */}
          {EXPORT_ROUTES.map((route) => {
            const isSelected = activeRoute.id === route.id;
            // Bezier control point arched upwards
            const midX = (hubX + route.x) / 2;
            const midY = Math.min(hubY, route.y) - 60;

            return (
              <g key={route.id}>
                {/* Background arc */}
                <path
                  d={`M${hubX},${hubY} Q${midX},${midY} ${route.x},${route.y}`}
                  fill="none"
                  stroke={isSelected ? "#d4af37" : "rgba(212, 175, 55, 0.25)"}
                  strokeWidth={isSelected ? "2.5" : "1.2"}
                  strokeDasharray={isSelected ? "none" : "4 4"}
                  filter={isSelected ? "url(#glow)" : undefined}
                />

                {/* Animated pulse dot along the active route */}
                {isSelected && (
                  <circle r="3.5" fill="#ffffff">
                    <animateMotion
                      path={`M${hubX},${hubY} Q${midX},${midY} ${route.x},${route.y}`}
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                {/* Destination Node */}
                <circle
                  cx={route.x}
                  cy={route.y}
                  r={isSelected ? 6 : 4}
                  fill={isSelected ? "#d4af37" : "#8c6c22"}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  onClick={() => setActiveRoute(route)}
                />
              </g>
            );
          })}

          {/* Jamnagar Manufacturing Hub Pulse Node */}
          <circle cx={hubX} cy={hubY} r="9" fill="#d4af37" filter="url(#glow)" />
          <circle cx={hubX} cy={hubY} r="4" fill="#000000" />
          <text
            x={hubX - 8}
            y={hubY + 22}
            fill="#d4af37"
            fontSize="10"
            fontFamily="monospace"
            fontWeight="bold"
          >
            JAMNAGAR (HQ & PLANT)
          </text>
        </svg>

        {/* Bottom Destination Selector Pills */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar z-20">
          {EXPORT_ROUTES.map((route) => (
            <button
              key={route.id}
              onClick={() => setActiveRoute(route)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all ${
                activeRoute.id === route.id
                  ? "bg-brass-500 text-black font-bold shadow-lg shadow-brass-500/25 scale-105"
                  : "bg-industrial-charcoal/90 text-neutral-300 border border-white/10 hover:border-brass-500/30"
              }`}
            >
              {route.destination}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Route Telemetry Card */}
      <div className="p-6 rounded-2xl bg-industrial-surface border border-brass-500/20 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">DESTINATION REGION</span>
            <h4 className="text-base font-bold text-white mt-0.5">{activeRoute.destination}</h4>
            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono bg-brass-500/20 text-brass-300 border border-brass-500/30">
              {activeRoute.type}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">LOGISTICS SEAPORTS</span>
            <p className="text-xs font-semibold text-neutral-200 mt-1 flex items-center gap-1.5">
              <Ship className="w-3.5 h-3.5 text-brass-400" />
              {activeRoute.transitHub}
            </p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Via Mundra / Nhava Sheva Ports</p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">ESTIMATED TRANSIT</span>
            <p className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              {activeRoute.leadTime}
            </p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Full container & LCL consolidation</p>
          </div>

          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">COMPLIANCE & THREADS</span>
            <p className="text-xs font-semibold text-brass-300 mt-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brass-400" />
              {activeRoute.standards}
            </p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Standard & custom drawings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
