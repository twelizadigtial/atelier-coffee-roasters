"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

interface HeroSectionProps {
  children?: React.ReactNode;
  progress?: MotionValue<number>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ children, progress }) => {
  const localRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: localScroll } = useScroll({
    target: localRef,
    offset: ["start start", "end start"],
  });

  const smoothLocal = useSpring(localScroll, {
    stiffness: 300,
    damping: 35,
    restDelta: 0.0001,
  });

  const p = progress || smoothLocal;

  // Cup-First Editorial Headline Split Reactions
  const line1LeftX = useTransform(p, [0, 0.25], ["0px", "-140px"]);
  const line1RightX = useTransform(p, [0, 0.25], ["0px", "140px"]);
  const line2Y = useTransform(p, [0, 0.25], ["0px", "80px"]);
  const headlineScale = useTransform(p, [0, 0.25], [1, 1.08]);
  const textOpacity = useTransform(p, [0, 0.22], [1, 0.35]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={localRef}
      id="home"
      className="relative w-full flex flex-col items-center justify-start overflow-visible bg-[#FDFBF7] min-h-[90vh] md:min-h-screen pt-8 md:pt-14 px-4 sm:px-6"
    >
      {/* Background Soft Coffee Radial */}
      <div className="absolute inset-0 z-0 bg-radial from-[#FAF3EA] via-[#FDFBF7] to-[#F5ECE1] opacity-90 pointer-events-none" />

      {/* Roasted Amber Glow */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[950px] h-[250px] sm:h-[360px] bg-[#C88A58]/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Foreground Content */}
      <div className="relative z-[90] w-full flex flex-col items-center pt-4 sm:pt-[8%] lg:pt-[4%] pb-2 mt-[20px] md:mt-0">
        {/* Mobile Quick Pills */}
        <div className="flex md:hidden items-center justify-between w-full max-w-[340px] px-2 mb-6 pointer-events-auto gap-2">
          <button
            onClick={() => scrollToSection("story")}
            className="flex-1 text-center border border-[#1F1512]/30 bg-white/80 text-[#1F1512] py-2.5 px-3 rounded-full text-xs font-bold tracking-wider transition-all min-h-[44px] shadow-sm flex items-center justify-center uppercase"
          >
            Story
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="flex-1 text-center border border-[#1F1512]/30 bg-white/80 text-[#1F1512] py-2.5 px-3 rounded-full text-xs font-bold tracking-wider transition-all min-h-[44px] shadow-sm flex items-center justify-center uppercase"
          >
            Signatures
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="flex-1 text-center border border-[#1F1512]/30 bg-white/80 text-[#1F1512] py-2.5 px-3 rounded-full text-xs font-bold tracking-wider transition-all min-h-[44px] shadow-sm flex items-center justify-center uppercase"
          >
            Menu
          </button>
        </div>

        {/* Top Tagline Badge */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none z-20 mb-3 text-center"
        >
          <span className="inline-block bg-[#1F1512] text-[#FDFBF7] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] px-3.5 py-1.5 rounded-full shadow-md">
            Specialty Coffee Sanctuary
          </span>
        </motion.div>

        {/* Cup-First Editorial Typography Frame */}
        <motion.div
          style={{ scale: headlineScale, opacity: textOpacity }}
          className="w-full pointer-events-none flex flex-col items-center justify-center z-20 relative px-2 text-center select-none"
        >
          <div className="font-serif text-[#1F1512] tracking-tight font-extrabold text-[40px] xs:text-[54px] sm:text-[76px] md:text-[105px] lg:text-[135px] leading-[0.85] uppercase flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-8">
            <motion.span style={{ x: line1LeftX }} className="inline-block">
              ATEL
            </motion.span>
            <motion.span style={{ x: line1RightX }} className="inline-block">
              IER
            </motion.span>
          </div>

          <motion.div style={{ y: line2Y }} className="flex flex-col items-center mt-2">
            <div className="font-serif italic font-normal text-[#C88A58] text-base sm:text-2xl md:text-3xl lg:text-4xl tracking-wide px-2">
              Artisanal Micro-Roasts & Craft Brews
            </div>

            <div className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#1F1512]/70 uppercase mt-2 max-w-md px-2">
              535 Madison Avenue • Midtown Manhattan, NYC
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Cup Container Slot */}
        <div className="w-full flex-1 flex justify-center items-start relative z-10 -mt-[40px] sm:-mt-[60px] md:-mt-[90px] lg:-mt-[110px]">
          {children}
        </div>
      </div>
    </section>
  );
};
