"use client";

import React from "react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { MapPin, Instagram, Clock } from "lucide-react";
import { BlobButton } from "@/components/BlobButton";

interface StoreInfoBarProps {
  progress?: MotionValue<number>;
}

export const StoreInfoBar: React.FC<StoreInfoBarProps> = ({ progress }) => {
  const fallbackProgress = useMotionValue(0.28);
  const p = progress || fallbackProgress;

  // Cup-First Dual-Wing Portal Split Reactions
  const leftPanelX = useTransform(p, [0.12, 0.28, 0.44], ["0px", "-65px", "-35px"]);
  const rightPanelX = useTransform(p, [0.12, 0.28, 0.44], ["0px", "65px", "35px"]);
  const leftRotate = useTransform(p, [0.12, 0.28, 0.44], [0, -2.5, -1]);
  const rightRotate = useTransform(p, [0.12, 0.28, 0.44], [0, 2.5, 1]);
  const centerGapWidth = useTransform(p, [0.12, 0.28, 0.44], ["0px", "160px", "110px"]);
  const cardScale = useTransform(p, [0.12, 0.28, 0.44], [0.94, 1, 0.96]);
  const centerPillY = useTransform(p, [0.12, 0.28, 0.44], ["0px", "18px", "10px"]);

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-[85] w-full block h-auto -mt-[40px] md:-mt-[120px] lg:-mt-[160px] px-4 md:px-12">
      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Dual-Wing Menu Portal Split Layout */}
        <motion.div
          style={{ scale: cardScale }}
          className="w-full flex flex-col md:flex-row items-center justify-center relative z-10"
        >
          {/* LEFT WING PANEL (535 Madison Ave Location) */}
          <motion.div
            style={{ x: leftPanelX, rotate: leftRotate }}
            className="flex-1 w-full md:w-auto bg-[#1F1512] text-[#FDFBF7] rounded-[20px] md:rounded-l-[32px] md:rounded-r-[10px] p-6 md:py-11 md:px-11 shadow-[0_24px_50px_rgba(0,0,0,0.25)] border border-white/10 relative overflow-hidden transition-all duration-300"
          >
            <div className="flex items-center justify-between md:justify-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#C88A58]/20 flex items-center justify-center flex-shrink-0 border border-[#C88A58]/30">
                  <MapPin className="w-5 h-5 text-[#C88A58]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88A58] font-bold block">
                    Sanctuary Location
                  </span>
                  <span className="font-serif text-sm md:text-lg text-white font-semibold block mt-0.5">
                    535 Madison Ave, New York, NY
                  </span>
                </div>
              </div>

              <div className="hidden lg:block text-right">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block">
                  Provenence
                </span>
                <span className="text-xs text-white/80 font-light">Midtown Manhattan</span>
              </div>
            </div>
          </motion.div>

          {/* DYNAMIC CENTER PEDESTAL GAP FOR 3D CUP LANDING */}
          <motion.div
            style={{ width: centerGapWidth }}
            className="hidden md:flex flex-shrink-0 items-center justify-center relative h-32 pointer-events-none transition-all"
          >
            <div className="w-full h-full rounded-full border border-dashed border-[#C88A58]/40 flex flex-col items-center justify-center bg-black/15 shadow-inner px-2">
              <span className="text-[9px] uppercase font-extrabold tracking-[0.25em] text-[#C88A58]/90 text-center">
                Aurel Pedestal
              </span>
            </div>
          </motion.div>

          {/* RIGHT WING PANEL (Operating Hours & Instagram) */}
          <motion.div
            style={{ x: rightPanelX, rotate: rightRotate }}
            className="flex-1 w-full md:w-auto bg-[#1F1512] text-[#FDFBF7] rounded-[20px] md:rounded-r-[32px] md:rounded-l-[10px] p-6 md:py-11 md:px-11 shadow-[0_24px_50px_rgba(0,0,0,0.25)] border border-white/10 relative overflow-hidden transition-all duration-300 mt-3 md:mt-0"
          >
            <div className="flex items-center justify-between md:justify-end gap-4">
              <div className="hidden lg:block text-left">
                <span className="text-[10px] uppercase tracking-widest text-white/50 block">
                  Social Channel
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#C88A58] underline font-light"
                >
                  @aurel.coffeeroasters
                </a>
              </div>

              <div className="flex items-center gap-3 text-right">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C88A58] font-bold block">
                    Roastery Hours
                  </span>
                  <span className="font-serif text-sm md:text-lg text-white font-semibold block mt-0.5">
                    7 AM - 7 PM | Open 7 Days A Week
                  </span>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#C88A58]/20 flex items-center justify-center flex-shrink-0 border border-[#C88A58]/30">
                  <Clock className="w-5 h-5 text-[#C88A58]" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CENTER FLOATING "EXPLORE FULL COFFEE MENU" CTA BUTTON */}
        <motion.div
          style={{ y: centerPillY }}
          className="relative z-30 flex justify-center -mt-4 md:-mt-6 pointer-events-auto"
        >
          <BlobButton
            variant="blue"
            onClick={scrollToMenu}
            className="text-[11px] md:text-xs font-bold tracking-widest px-8 md:px-12 py-3.5 md:py-4 rounded-full uppercase shadow-[0_12px_32px_rgba(200,138,88,0.35)] border border-white/20"
          >
            Explore Full Coffee Menu
          </BlobButton>
        </motion.div>
      </div>
    </div>
  );
};
