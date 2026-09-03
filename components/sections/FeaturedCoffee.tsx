"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SIGNATURE_COFFEES } from "@/lib/coffeeData";
import { BlobButton } from "@/components/BlobButton";
import { AddOnsModal } from "@/components/AddOnsModal";

export const FeaturedCoffee: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"short" | "tall">("short");

  const currentDrink = SIGNATURE_COFFEES[activeIdx];

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === SIGNATURE_COFFEES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? SIGNATURE_COFFEES.length - 1 : prev - 1));
  };

  const isDarkBg = currentDrink.color === "#1F1512";

  return (
    <section
      id="featured"
      className="relative z-20 w-full min-h-[85vh] md:min-h-screen overflow-hidden transition-colors duration-1000 flex flex-col items-center justify-between py-12 md:py-16 border-t border-b border-[#FAF3EA]"
      style={{ backgroundColor: currentDrink.color }}
    >
      {/* Dynamic Floating Ingredient Parallax Background (Matching Reference Image) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDrink.id + "-bg"}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.85, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
        >
          <img
            src={currentDrink.bgElementImg}
            alt="Floating Coffee Ingredients"
            className="w-full h-full object-cover opacity-75 blur-[0.5px]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-[#C88A58]/20 rounded-full blur-3xl opacity-80 transition-all duration-700" />
      </div>

      {/* Section Header Tagline */}
      <div className="relative z-20 w-full flex flex-col items-center px-4 text-center">
        <span className="inline-flex items-center space-x-1.5 bg-white/90 backdrop-blur-sm text-[#C88A58] border border-[#FAF3EA] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>Crafted Blends Of Milk, Flavor, And Warmth</span>
        </span>
        <h2
          className={`font-serif text-[28px] md:text-[42px] lg:text-[48px] font-bold ${
            isDarkBg ? "text-white" : "text-[#1F1512]"
          }`}
        >
          Signature Coffee Creations
        </h2>
      </div>

      {/* Giant Drink Headline Banner */}
      <div className="relative z-20 w-full flex justify-center px-4 my-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.h3
            key={currentDrink.id + "-title"}
            initial={{ opacity: 0, y: direction > 0 ? 30 : -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction > 0 ? -30 : 30, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className={`font-serif whitespace-nowrap leading-[1.1] font-extrabold text-center w-full text-[7.5vw] xs:text-[40px] sm:text-[56px] md:text-[80px] lg:text-[100px] ${
              isDarkBg ? "text-white" : "text-[#1F1512]"
            }`}
          >
            {currentDrink.name}
          </motion.h3>
        </AnimatePresence>
      </div>

      {/* 3D Beverage Showcase Display (Matching Reference Image Composition) */}
      <div className="relative z-20 w-full max-w-5xl flex items-center justify-between px-6 md:px-12 my-2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1F1512] hover:scale-110 transition-all shadow-xl pointer-events-auto z-30 group border border-[#FAF3EA]"
          aria-label="Previous beverage"
        >
          <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform text-[#1F1512]" />
        </button>

        {/* High-Resolution 3D Beverage Render Container */}
        <div className="flex-1 flex justify-center items-center py-2">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentDrink.id + "-drink"}
              initial={{
                y: direction > 0 ? 70 : -70,
                opacity: 0,
                scale: 0.85,
                rotate: direction > 0 ? 6 : -6,
              }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
              exit={{
                y: direction > 0 ? -70 : 70,
                opacity: 0,
                scale: 0.85,
                rotate: direction > 0 ? -6 : 6,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="relative flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
            >
              <div className="relative w-[280px] sm:w-[380px] md:w-[480px] lg:w-[560px] h-[280px] sm:h-[360px] md:h-[440px] flex items-center justify-center">
                <img
                  src={currentDrink.drinkImg}
                  alt={currentDrink.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.22)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#1F1512] hover:scale-110 transition-all shadow-xl pointer-events-auto z-30 group border border-[#FAF3EA]"
          aria-label="Next beverage"
        >
          <ChevronRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform text-[#1F1512]" />
        </button>
      </div>

      {/* Info Controls (Preserving 100% Existing Layout & Structure) */}
      <div className="relative z-20 w-full max-w-5xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h4
            className={`font-sans text-[20px] md:text-[24px] font-bold tracking-wide uppercase mb-1 ${
              isDarkBg ? "text-white" : "text-[#1F1512]"
            }`}
          >
            {currentDrink.name}
          </h4>
          <div
            className={`flex items-center justify-center md:justify-start space-x-6 font-semibold text-base md:text-lg mb-3 ${
              isDarkBg ? "text-[#C88A58]" : "text-[#C88A58]"
            }`}
          >
            <span>Short 8 oz: <strong>{currentDrink.priceShort}</strong></span>
            <span>Tall 12 oz: <strong>{currentDrink.priceTall}</strong></span>
          </div>
          <p
            className={`text-[13px] md:text-[14px] leading-relaxed max-w-sm mx-auto md:mx-0 font-light ${
              isDarkBg ? "text-white/80" : "text-[#1F1512]/80"
            }`}
          >
            {currentDrink.desc}
          </p>
        </div>

        <div className="w-full md:w-1/3 flex justify-center">
          <BlobButton
            variant="blue"
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 text-sm font-bold shadow-md min-w-[150px]"
          >
            Customize Drink
          </BlobButton>
        </div>

        <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-center md:justify-end items-center md:items-end gap-3">
          <button
            onClick={() => setSelectedSize("short")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold w-[130px] transition-all shadow-sm ${
              selectedSize === "short"
                ? "bg-[#1F1512] text-white shadow-md"
                : "bg-white/80 text-[#1F1512] border border-[#FAF3EA]"
            }`}
          >
            8 oz (Short)
          </button>
          <button
            onClick={() => setSelectedSize("tall")}
            className={`px-6 py-2.5 rounded-full text-xs font-bold w-[130px] transition-all shadow-sm ${
              selectedSize === "tall"
                ? "bg-white text-[#1F1512] shadow-md border border-[#1F1512]"
                : "bg-white/80 text-[#1F1512] border border-[#FAF3EA]"
            }`}
          >
            12 oz (Tall)
          </button>
        </div>
      </div>

      <AddOnsModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
