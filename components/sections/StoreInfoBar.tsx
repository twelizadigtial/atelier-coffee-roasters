"use client";

import React from "react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { BlobButton } from "@/components/BlobButton";

interface StoreInfoBarProps {
  progress?: MotionValue<number>;
}

export const StoreInfoBar: React.FC<StoreInfoBarProps> = ({ progress }) => {
  const fallbackProgress = useMotionValue(0.28);
  const p = progress || fallbackProgress;

  // Dual-Wing Portal Opening as Cup Arrives in Pedestal
  const leftWingX = useTransform(p, [0.08, 0.28, 0.48], ["-60px", "0px", "-30px"]);
  const rightWingX = useTransform(p, [0.08, 0.28, 0.48], ["60px", "0px", "30px"]);
  const cardScale = useTransform(p, [0.08, 0.28, 0.48], [0.94, 1, 0.96]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="info" className="py-12 md:py-20 bg-[#FAF3EA] border-t border-b border-[#FAF3EA] relative z-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 relative z-10">
        {/* DUAL-WING EDITORIAL MENU PORTAL FRAMING THE CENTRAL CUP PEDESTAL */}
        <motion.div
          style={{ scale: cardScale }}
          className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          {/* LEFT WING PANEL */}
          <motion.div
            style={{ x: leftWingX }}
            className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-8 shadow-xl border border-white flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="inline-block bg-[#C88A58]/20 text-[#C88A58] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-3">
                Storefront & Atelier
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1512] leading-tight">
                Explore Full Coffee & Pastry Menu
              </h3>
              <p className="text-xs sm:text-sm text-[#1F1512]/75 font-light leading-relaxed mt-2">
                Discover our seasonal micro-lot pour-overs, house espresso blends, artisanal croissants, and desserts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <BlobButton
                variant="black"
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </BlobButton>

              <div className="flex items-center space-x-2 text-xs text-[#1F1512]/80 font-medium px-2">
                <Clock className="w-4 h-4 text-[#C88A58] flex-shrink-0" />
                <span>Open 7 AM - 7 PM Daily</span>
              </div>
            </div>
          </motion.div>

          {/* CENTRAL CUP PEDESTAL GAP FRAME */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center relative min-h-[140px] lg:min-h-[220px] pointer-events-none">
            <div className="w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rounded-full border-2 border-dashed border-[#C88A58]/40 flex items-center justify-center bg-white/40 shadow-inner relative">
              <div className="w-[140px] sm:w-[170px] h-[140px] sm:h-[170px] rounded-full border border-[#C88A58]/30 bg-[#C88A58]/5 flex flex-col items-center justify-end pb-4">
                <span className="text-[9px] uppercase font-extrabold tracking-[0.2em] text-[#C88A58]">
                  Pedestal Spot
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT WING PANEL */}
          <motion.div
            style={{ x: rightWingX }}
            className="lg:col-span-5 bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-8 shadow-xl border border-white flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="inline-block bg-[#1F1512] text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-3">
                Manhattan Sanctuary
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1512] leading-tight">
                Christie’s Sculpture Garden
              </h3>
              <p className="text-xs sm:text-sm text-[#1F1512]/75 font-light leading-relaxed mt-2">
                535 Madison Avenue, Midtown Manhattan, NYC 10022. Experience peaceful coffee seating surrounded by fine art.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[#1F1512]/10">
              <div className="flex items-center space-x-2 text-xs text-[#1F1512]/80 font-medium">
                <MapPin className="w-4 h-4 text-[#C88A58] flex-shrink-0" />
                <span>535 Madison Ave, NYC</span>
              </div>

              <a
                href="https://maps.app.goo.gl/o2UTj51fRAp8BrpT8?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#C88A58] uppercase tracking-wider hover:underline flex items-center space-x-1"
              >
                <span>Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
