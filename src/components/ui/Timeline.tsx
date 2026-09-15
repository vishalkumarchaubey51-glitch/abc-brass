"use client";

import React, { useState } from "react";
import { TIMELINE_DATA, TimelineMilestone } from "@/data/companyData";
import { Award, ChevronRight, ChevronLeft, Calendar, Sparkles } from "lucide-react";

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeMilestone = TIMELINE_DATA[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : TIMELINE_DATA.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < TIMELINE_DATA.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full space-y-8">
      {/* Horizontal Milestone Nodes track */}
      <div className="relative py-6 overflow-x-auto no-scrollbar">
        {/* Continuous Brass track line */}
        <div className="absolute top-[42px] left-8 right-8 h-[2px] bg-gradient-to-r from-brass-500/10 via-brass-500/40 to-brass-500/10 z-0" />

        <div className="flex items-center justify-between min-w-[760px] px-8 relative z-10">
          {TIMELINE_DATA.map((item, idx) => {
            const isCurrent = idx === activeIdx;
            return (
              <div
                key={item.year}
                onClick={() => setActiveIdx(idx)}
                className="flex flex-col items-center cursor-pointer group transition-transform"
              >
                {/* Year Label */}
                <span
                  className={`text-xs font-mono font-bold mb-2 transition-colors ${
                    isCurrent ? "text-brass-300 scale-110" : "text-neutral-400 group-hover:text-white"
                  }`}
                >
                  {item.year}
                </span>

                {/* Animated Node Circle */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? "bg-brass-500 text-black ring-8 ring-brass-500/20 scale-125 shadow-lg shadow-brass-500/40"
                      : "bg-industrial-charcoal border-2 border-brass-500/40 group-hover:border-brass-400 group-hover:scale-110"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? "bg-black" : "bg-brass-400"
                    }`}
                  />
                </div>

                {/* Tag pill */}
                <span
                  className={`text-[10px] font-mono mt-2 transition-colors ${
                    isCurrent ? "text-brass-400 font-semibold" : "text-neutral-400 group-hover:text-neutral-300"
                  }`}
                >
                  {item.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Milestone Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-industrial-surface via-industrial-charcoal to-industrial-black border border-brass-500/30 shadow-2xl overflow-hidden">
        {/* Background watermark of the year */}
        <div className="absolute right-4 bottom-2 text-7xl sm:text-9xl font-mono font-black text-white/[0.03] select-none pointer-events-none">
          {activeMilestone.year}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brass-500 text-black">
                {activeMilestone.year}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-brass-300/80">
                MILESTONE // {activeMilestone.tag}
              </span>
            </div>

            <h4 className="text-2xl font-bold text-white tracking-wide">
              {activeMilestone.title}
            </h4>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {activeMilestone.description}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/[0.05] hover:bg-brass-500/20 text-neutral-300 hover:text-brass-300 border border-white/10 hover:border-brass-500/40 transition-all"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-neutral-400 px-2">
              {activeIdx + 1} / {TIMELINE_DATA.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/[0.05] hover:bg-brass-500/20 text-neutral-300 hover:text-brass-300 border border-white/10 hover:border-brass-500/40 transition-all"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
