"use client";

import React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface CoffeeJourneyParticlesProps {
  progress: MotionValue<number>;
  windowWidth: number;
}

export const CoffeeJourneyParticles: React.FC<CoffeeJourneyParticlesProps> = ({
  progress,
  windowWidth,
}) => {
  const isMobile = windowWidth < 768;

  // 1. HERO & STORE INFO BAR: FLOATING COFFEE BEANS (0.0 to 0.45)
  const bean1X = useTransform(progress, [0, 0.25, 0.45], ["-120px", "-40px", "60px"]);
  const bean1Y = useTransform(progress, [0, 0.25, 0.45], ["40px", "220px", "420px"]);
  const bean1Rotate = useTransform(progress, [0, 0.45], [15, 140]);
  const bean1Opacity = useTransform(progress, [0, 0.1, 0.4, 0.5], [0, 0.9, 0.9, 0]);

  const bean2X = useTransform(progress, [0, 0.25, 0.45], ["140px", "80px", "-40px"]);
  const bean2Y = useTransform(progress, [0, 0.25, 0.45], ["120px", "300px", "480px"]);
  const bean2Rotate = useTransform(progress, [0, 0.45], [-20, -180]);
  const bean2Opacity = useTransform(progress, [0.05, 0.18, 0.42, 0.5], [0, 0.95, 0.95, 0]);

  const bean3X = useTransform(progress, [0.1, 0.3, 0.5], ["-160px", "-20px", "80px"]);
  const bean3Y = useTransform(progress, [0.1, 0.3, 0.5], ["180px", "400px", "600px"]);
  const bean3Rotate = useTransform(progress, [0.1, 0.5], [45, 210]);
  const bean3Opacity = useTransform(progress, [0.1, 0.25, 0.45, 0.55], [0, 0.85, 0.85, 0]);

  // 2. ROASTING SPARKS & EMBERS (0.35 to 0.70)
  const ember1Y = useTransform(progress, [0.35, 0.55, 0.7], ["650px", "880px", "1100px"]);
  const ember1X = useTransform(progress, [0.35, 0.55, 0.7], ["-80px", "40px", "-20px"]);
  const ember1Opacity = useTransform(progress, [0.35, 0.45, 0.65, 0.72], [0, 0.9, 0.9, 0]);

  const ember2Y = useTransform(progress, [0.38, 0.58, 0.72], ["720px", "940px", "1180px"]);
  const ember2X = useTransform(progress, [0.38, 0.58, 0.72], ["100px", "-50px", "60px"]);
  const ember2Opacity = useTransform(progress, [0.38, 0.48, 0.68, 0.75], [0, 0.85, 0.85, 0]);

  // 3. MILK & LATTE FLUID SWIRLS (0.55 to 0.88)
  const milkOpacity = useTransform(progress, [0.55, 0.68, 0.85, 0.92], [0, 0.85, 0.85, 0]);
  const milkY = useTransform(progress, [0.55, 0.75, 0.92], ["1100px", "1500px", "1900px"]);
  const milkScale = useTransform(progress, [0.55, 0.75, 0.9], [0.85, 1.05, 0.9]);

  // 4. STEAM & EXTRACTION DROPLETS IN CRAFT JOURNEY (0.75 to 0.98)
  const steamOpacity = useTransform(progress, [0.0, 0.2, 0.75, 0.98], [0.8, 0.3, 0.9, 0]);
  const steamY = useTransform(progress, [0.75, 0.95], ["-30px", "-70px"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99] overflow-hidden">
      {/* --- A. HERO STEAM AROMA (Top) --- */}
      <motion.div
        style={{ opacity: steamOpacity, y: steamY }}
        className="absolute top-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="opacity-70 blur-[1px]">
          <motion.path
            d="M30 90 Q 20 60, 40 40 T 30 10"
            stroke="rgba(200,138,88,0.4)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M30 90 Q 20 60, 40 40 T 30 10", "M30 90 Q 40 60, 20 40 T 40 10", "M30 90 Q 20 60, 40 40 T 30 10"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M60 95 Q 75 65, 55 45 T 70 15"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M60 95 Q 75 65, 55 45 T 70 15", "M60 95 Q 50 65, 70 45 T 55 15", "M60 95 Q 75 65, 55 45 T 70 15"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M90 90 Q 80 60, 95 40 T 85 10"
            stroke="rgba(200,138,88,0.35)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            animate={{ d: ["M90 90 Q 80 60, 95 40 T 85 10", "M90 90 Q 100 60, 80 40 T 95 10", "M90 90 Q 80 60, 95 40 T 85 10"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </motion.div>

      {/* --- B. FLOATING COFFEE BEANS (Hero & Store Info Bar) --- */}
      {/* Bean 1 (Foreground Left) */}
      <motion.div
        style={{
          x: bean1X,
          y: bean1Y,
          rotate: bean1Rotate,
          opacity: bean1Opacity,
        }}
        className="absolute top-0 left-1/2 -ml-24"
      >
        <svg width={isMobile ? "32" : "48"} height={isMobile ? "24" : "36"} viewBox="0 0 48 36" fill="none">
          <path
            d="M24 2C12 2 2 10 2 18C2 26 12 34 24 34C36 34 46 26 46 18C46 10 36 2 24 2Z"
            fill="#2A1D18"
            stroke="#1F1512"
            strokeWidth="2"
          />
          <path d="M10 18 Q 24 10 38 18" stroke="#C88A58" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Bean 2 (Background Right) */}
      <motion.div
        style={{
          x: bean2X,
          y: bean2Y,
          rotate: bean2Rotate,
          opacity: bean2Opacity,
        }}
        className="absolute top-0 left-1/2 -ml-4"
      >
        <svg width={isMobile ? "26" : "38"} height={isMobile ? "20" : "28"} viewBox="0 0 38 28" fill="none" className="blur-[0.5px]">
          <path
            d="M19 2C9 2 2 8 2 14C2 20 9 26 19 26C29 26 36 20 36 14C36 8 29 2 19 2Z"
            fill="#3A2822"
            stroke="#1F1512"
            strokeWidth="1.5"
          />
          <path d="M8 14 Q 19 8 30 14" stroke="#A37248" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Bean 3 (Foreground Right Parallax) */}
      <motion.div
        style={{
          x: bean3X,
          y: bean3Y,
          rotate: bean3Rotate,
          opacity: bean3Opacity,
        }}
        className="absolute top-0 left-1/2 ml-16"
      >
        <svg width={isMobile ? "28" : "42"} height={isMobile ? "22" : "32"} viewBox="0 0 42 32" fill="none">
          <path
            d="M21 2C10 2 2 9 2 16C2 23 10 30 21 30C32 30 40 23 40 16C40 9 32 2 21 2Z"
            fill="#1F1512"
            stroke="#C88A58"
            strokeWidth="1"
          />
          <path d="M9 16 Q 21 9 33 16" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* --- C. ROASTING EMBERS & SPARKLES (Our Story Section) --- */}
      <motion.div
        style={{ x: ember1X, y: ember1Y, opacity: ember1Opacity }}
        className="absolute top-0 left-1/2 flex items-center space-x-2"
      >
        <div className="w-3 h-3 rounded-full bg-[#C88A58] shadow-[0_0_12px_#C88A58]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
      </motion.div>

      <motion.div
        style={{ x: ember2X, y: ember2Y, opacity: ember2Opacity }}
        className="absolute top-0 left-1/2 flex items-center space-x-2"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
        <div className="w-2 h-2 rounded-full bg-[#C88A58]" />
      </motion.div>

      {/* --- D. FLOWING MILK / LATTE RIBBONS (Brewing & Craft Section) --- */}
      <motion.div
        style={{
          y: milkY,
          opacity: milkOpacity,
          scale: milkScale,
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl flex justify-center pointer-events-none"
      >
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none" className="opacity-60">
          <path
            d="M 50 180 C 120 40, 280 160, 350 20"
            stroke="url(#milkGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 30 150 C 150 100, 250 80, 370 160"
            stroke="url(#milkGradient2)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="milkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDFBF7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FAF3EA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C88A58" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="milkGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C88A58" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#FDFBF7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FAF3EA" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};
