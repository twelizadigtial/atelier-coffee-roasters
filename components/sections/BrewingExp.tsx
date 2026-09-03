"use client";

import React, { useState, useEffect } from "react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { Sparkles, Droplets, Thermometer, Flame } from "lucide-react";

const BREWING_STEPS = [
  {
    step: "01",
    title: "High-Altitude Bean Sourcing",
    subtitle: "Direct-Trade Single Origins",
    desc: "We hand-select organic green beans cultivated above 1,800 meters in volcanic soil across Ethiopia, Colombia, and Kenya.",
    stats: "1,800m+ Elevation",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "02",
    title: "Micro-Batch Thermal Roasting",
    subtitle: "Custom Temperature Profiles",
    desc: "Slow roasted in small 5kg batches to achieve rich caramelization without burning subtle floral notes.",
    stats: "215°C Peak Roast",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "03",
    title: "Precision Conical Grinding",
    subtitle: "Micron-Level Uniformity",
    desc: "Ground on demand using titanium flat burrs set to exact particle sizes for optimum extraction balance.",
    stats: "250 Micron Particle",
    icon: Thermometer,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "04",
    title: "Golden Pressure Extraction",
    subtitle: "9-Bar Espresso & Pour Over",
    desc: "Extracted under 9 bars of pressure with 93.5°C filtered spring water for a velvety crema and rich body.",
    stats: "9 Bar • 28 Secs",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
  },
];

interface BrewingExpProps {
  progress?: MotionValue<number>;
}

export const BrewingExp: React.FC<BrewingExpProps> = ({ progress }) => {
  const [activeStep, setActiveStep] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fallbackProgress = useMotionValue(0.88);
  const p = progress || fallbackProgress;

  const current = BREWING_STEPS[activeStep];
  const Icon = current.icon;

  // Preserve EXACT Desktop entrance transforms (-80px / 80px), refine Tablet/Mobile transforms (-10px / 10px) to prevent overflow
  const leftWingX = useTransform(
    p,
    [0.65, 0.88, 0.98],
    isSmallScreen ? ["-10px", "0px", "-5px"] : ["-80px", "0px", "-20px"]
  );
  const rightWingX = useTransform(
    p,
    [0.65, 0.88, 0.98],
    isSmallScreen ? ["10px", "0px", "5px"] : ["80px", "0px", "20px"]
  );
  const sanctuaryScale = useTransform(p, [0.65, 0.88, 0.98], [0.92, 1, 0.97]);
  const textOpacity = useTransform(p, [0.65, 0.82, 0.98], [0.4, 1, 0.9]);

  return (
    <section id="brewing" className="py-16 sm:py-24 md:py-36 bg-[#1F1512] text-[#FDFBF7] relative overflow-hidden">
      {/* Ambient Roastery Lighting & Extraction Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] lg:w-[700px] h-[350px] sm:h-[550px] lg:h-[700px] bg-[#C88A58]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1350px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header Editorial Tagline */}
        <motion.div style={{ opacity: textOpacity }} className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block bg-[#C88A58]/20 text-[#C88A58] border border-[#C88A58]/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 shadow-sm">
            Craft Journey • Extraction Sanctuary
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            The Art Of Precision Extraction
          </h2>
        </motion.div>

        {/* CUP-CENTERED EDITORIAL SANCTUARY COMPOSITION */}
        <motion.div
          style={{ scale: sanctuaryScale }}
          className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[420px] sm:min-h-[480px]"
        >
          {/* LEFT EDITORIAL WING */}
          <motion.div
            style={{ x: leftWingX, opacity: textOpacity }}
            className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-6 text-left p-5 sm:p-8 bg-white/5 rounded-[24px] sm:rounded-[28px] border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-[#C88A58] text-white flex items-center justify-center shadow-lg">
              <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>

            <div>
              <span className="text-[10px] sm:text-xs font-bold text-[#C88A58] uppercase tracking-[0.2em] block mb-1">
                {current.subtitle}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {current.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed">
              {current.desc}
            </p>

            <div className="space-y-2 sm:space-y-3 pt-2 border-t border-white/10 text-xs font-medium text-white/70">
              <div className="flex justify-between">
                <span>Thermal Temperature:</span>
                <span className="font-bold text-[#C88A58]">93.5°C Target</span>
              </div>
              <div className="flex justify-between">
                <span>Pressure Profile:</span>
                <span className="font-bold text-[#C88A58]">9-Bar Continuous</span>
              </div>
              <div className="flex justify-between">
                <span>Extraction Time:</span>
                <span className="font-bold text-[#C88A58]">28 Seconds</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER CUP SPOTLIGHT SANCTUARY */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[260px] sm:min-h-[360px] pointer-events-none">
            <div className="w-[220px] sm:w-[280px] md:w-[320px] h-[220px] sm:h-[280px] md:h-[320px] rounded-full border-2 border-dashed border-[#C88A58]/40 flex items-center justify-center bg-black/20 shadow-inner relative">
              <div className="w-[170px] sm:w-[220px] md:w-[250px] h-[170px] sm:h-[220px] md:h-[250px] rounded-full border border-[#C88A58]/30 bg-[#C88A58]/5 flex flex-col items-center justify-end pb-4 sm:pb-6">
                <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-[0.25em] text-[#C88A58]">
                  Golden Extraction Pedestal
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL WING */}
          <motion.div
            style={{ x: rightWingX, opacity: textOpacity }}
            className="lg:col-span-4 relative rounded-[24px] sm:rounded-[28px] overflow-hidden border-2 border-white/15 h-[300px] sm:h-[380px] md:h-[440px] shadow-2xl group"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
              <span className="text-[10px] sm:text-xs font-bold text-[#C88A58] uppercase tracking-widest block mb-1">
                Extraction Benchmark
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Velvety Tiger Crema • Ethiopian Guji Heirloom
              </h4>
              <p className="text-[11px] sm:text-xs text-white/70 font-light mt-1">
                Micro-batch roasted daily in 5kg drums to preserve delicate jasmine and bergamot top notes.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* INTERACTIVE STEP SELECTOR PILLS (Touch-Friendly min 44px) */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {BREWING_STEPS.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border min-h-[48px] ${
                activeStep === idx
                  ? "bg-[#C88A58] text-white border-[#C88A58] shadow-lg"
                  : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10"
              }`}
            >
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#C88A58] mb-0.5 sm:mb-1">
                {s.step} STEP
              </div>
              <div className="font-serif font-bold text-xs sm:text-sm line-clamp-1">{s.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
