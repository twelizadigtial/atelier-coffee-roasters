"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X as CloseIcon } from "lucide-react";
import { SIGNATURE_DRINKS, SignatureDrink } from "@/lib/menuData";
import { BlobButton } from "@/components/BlobButton";
import { AddOnsModal } from "@/components/AddOnsModal";

export const MenuSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [addOnsOpen, setAddOnsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"short" | "tall">("short");
  const [touchStartX, setTouchStartX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev === SIGNATURE_DRINKS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev === 0 ? SIGNATURE_DRINKS.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) handleNext();
    if (touchStartX - touchEndX < -50) handlePrev();
  };

  const currentDrink: SignatureDrink = SIGNATURE_DRINKS[activeIdx];

  // Animated variants for cup transitions
  const cupVariants = {
    enter: (custom: { direction: number; scale: number; offsetY: number }) => ({
      y: custom.direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: (custom.direction > 0 ? 0.6 : 1.2) * custom.scale,
      rotate: custom.direction > 0 ? 12 : -12,
      zIndex: 10,
    }),
    center: (custom: { direction: number; scale: number; offsetY: number }) => ({
      y: custom.offsetY,
      opacity: 1,
      scale: custom.scale,
      rotate: 0,
      zIndex: 5,
      transition: {
        y: { type: "spring", stiffness: 200, damping: 22 },
        scale: { type: "spring", stiffness: 200, damping: 22 },
        rotate: { type: "spring", stiffness: 200, damping: 22 },
        opacity: { duration: 0.3, ease: "easeOut" },
      },
    }),
    exit: (custom: { direction: number; scale: number; offsetY: number }) => ({
      y: custom.direction > 0 ? -1200 : 1200,
      opacity: 0,
      scale: (custom.direction > 0 ? 1.2 : 0.6) * custom.scale,
      rotate: custom.direction > 0 ? -10 : 10,
      zIndex: 1,
      transition: {
        y: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
        scale: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
        rotate: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
        opacity: { duration: 0.3, ease: "linear" },
      },
    }),
  };

  const titleVariants = {
    enter: { opacity: 0, scale: 0.95, y: 10 },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
    },
  };

  return (
    <section
      id="menu"
      className="relative z-20 -my-[18px] w-full h-[100svh] min-h-[800px] md:h-[120vh] md:min-h-[900px] overflow-hidden rounded-[18px] transition-colors duration-1000 flex flex-col items-center transform-gpu"
      style={{ backgroundColor: currentDrink.color }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Preload Assets */}
      <div style={{ display: "none" }} aria-hidden="true">
        {SIGNATURE_DRINKS.map((drink) => (
          <React.Fragment key={`preload-${drink.id}`}>
            <img src={drink.layer1Img} alt="" decoding="async" loading="eager" />
            <img
              src={isMobile && drink.layer2ImgMobile ? drink.layer2ImgMobile : drink.layer2Img}
              alt=""
              decoding="async"
              loading="eager"
            />
            <img src={drink.cupImg} alt="" decoding="async" loading="eager" />
          </React.Fragment>
        ))}
      </div>

      {/* Layer 1 Background Solid Artwork */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`layer1-${currentDrink.id}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            {isMobile ? (
              <div
                className="absolute top-1/2 left-1/2 overflow-hidden pointer-events-none origin-center"
                style={{
                  width: "max(120vh, 1000px)",
                  height: "100vw",
                  transform: "translate(-50%, -50%) rotate(90deg)",
                }}
              >
                <img
                  src={currentDrink.layer1Img}
                  className="w-full h-full object-cover object-center absolute inset-0 max-w-none transform-gpu will-change-transform"
                  alt="background solid"
                />
              </div>
            ) : (
              <img
                src={currentDrink.layer1Img}
                className="w-full h-full object-cover object-center absolute inset-0 max-w-none md:max-w-full transform-gpu will-change-transform"
                alt="background solid"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Layer 2 Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <AnimatePresence initial={false} custom={activeIdx}>
          <motion.div
            key={`layer2-wrapper-${currentDrink.id}`}
            className="absolute inset-0"
            custom={activeIdx}
            variants={{
              enter: { opacity: 0, zIndex: 1 },
              center: { opacity: 1, zIndex: 1, transition: { duration: 0.5 } },
              exit: { opacity: 0, zIndex: 0, transition: { duration: 0.5 } },
            }}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div className="absolute inset-0 overflow-hidden origin-center w-full h-full flex justify-center items-center pointer-events-none">
              <motion.img
                src={
                  isMobile && currentDrink.layer2ImgMobile
                    ? currentDrink.layer2ImgMobile
                    : currentDrink.layer2Img
                }
                custom={activeIdx}
                variants={{
                  enter: (i: number) => ({
                    scale: i % 2 === 0 ? 1.1 : 1.05,
                    rotate: i % 2 === 0 ? -8 : 8,
                  }),
                  center: (i: number) => ({
                    scale: i % 2 === 0 ? 1.05 : 1.1,
                    rotate: 0,
                    transition: { duration: 0.9, ease: [0.32, 0.72, 0, 1] },
                  }),
                  exit: { scale: 1.05, transition: { duration: 0.5 } },
                }}
                className="w-full h-full object-cover object-center max-w-none md:max-w-full origin-center absolute inset-0 transform-gpu will-change-transform"
                alt="floating elements"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Section Header */}
      <div className="absolute top-[5%] md:top-[8%] left-1/2 -translate-x-1/2 z-20 w-full flex flex-col items-center px-4 pointer-events-none text-[#5E4B3E] drop-shadow-sm">
        <h3 className="font-serif text-[28px] md:text-[38px] lg:text-[48px] text-[#5E4B3E] mb-1 font-normal">
          Our Signatures
        </h3>
        <p className="font-sans text-[12px] md:text-[14px] lg:text-[15px] font-[400] tracking-wide text-center px-2 text-[#5E4B3E] max-w-[280px] md:max-w-none">
          Crafted Blends Of Milk, Flavor, And Warmth.
        </p>
      </div>

      {/* Drink Title Banner */}
      <div className="absolute top-[16%] md:top-[20%] left-1/2 -translate-x-1/2 z-20 w-full flex justify-center px-[20px] md:px-[100px] pointer-events-none">
        <AnimatePresence custom={direction}>
          <motion.h2
            key={`title-${currentDrink.id}`}
            custom={direction}
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="font-serif whitespace-nowrap leading-[1.1] font-semibold text-[#5E4B3E] uppercase text-center w-full absolute text-[10.5vw] xs:text-[46px] sm:text-[64px] md:text-[90px] lg:text-[120px] xl:text-[150px]"
          >
            {currentDrink.name}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Center Cup Display */}
      <div className="absolute top-[14%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-[10px] md:-translate-y-1/2 md:mt-[40px] flex items-center justify-center w-full max-w-4xl h-[400px] md:h-[550px] z-20 pointer-events-none">
        <AnimatePresence
          custom={{
            direction,
            scale: currentDrink.cupScale || 1,
            offsetY: isMobile
              ? currentDrink.cupOffsetYMobile ?? currentDrink.cupOffsetY ?? 0
              : currentDrink.cupOffsetY || 0,
          }}
        >
          <motion.img
            key={`cup-${currentDrink.id}`}
            src={currentDrink.cupImg}
            custom={{
              direction,
              scale: currentDrink.cupScale || 1,
              offsetY: isMobile
                ? currentDrink.cupOffsetYMobile ?? currentDrink.cupOffsetY ?? 0
                : currentDrink.cupOffsetY || 0,
            }}
            variants={cupVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute h-[385px] sm:h-[495px] md:h-[550px] xl:h-[650px] object-contain drop-shadow-2xl z-[20] origin-top md:origin-bottom pointer-events-auto transform-gpu will-change-[transform,filter]"
            alt={currentDrink.name}
          />
        </AnimatePresence>
      </div>

      {/* Desktop Chevron Navigation Buttons */}
      <div className="hidden md:flex absolute top-[52%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-between w-full max-w-[650px] px-6 md:px-0 z-30 pointer-events-none">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-105 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] pointer-events-auto group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-[2px] transition-transform" />
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-105 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] pointer-events-auto group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-[2px] transition-transform" />
        </button>
      </div>

      {/* Bottom Information Controls */}
      <div className="absolute top-[58%] md:top-auto md:bottom-[8%] left-0 w-full px-6 md:px-[6%] lg:px-[8%] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end z-30 pointer-events-none pb-4 md:pb-0">
        {/* Drink Description & Price Info */}
        <div className="w-full md:w-1/3 text-center md:text-left pointer-events-auto flex flex-col items-center md:items-start mb-0 md:mb-12 h-[185px] md:h-auto flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${currentDrink.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center md:items-start w-full"
            >
              <h4 className="hidden md:block font-sans text-[24px] md:text-[28px] font-bold mb-5 text-[#5E4B3E] tracking-wider uppercase">
                {currentDrink.name}
              </h4>
              <div className="hidden md:block text-[13px] md:text-[14px] font-medium opacity-80 mb-4">
                (Served Hot or Iced: +$0.50)
              </div>
              <div className="md:hidden text-[13px] font-medium opacity-80 mb-3">
                (Served Hot or Iced: +$0.50)
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-x-12 md:gap-x-16 justify-center md:justify-start items-center text-[#5E4B3E] text-[16px] md:text-[17px] font-[500] mb-5 md:mb-6 w-max mx-auto md:mx-0">
                <span className="text-left text-[16px] md:text-[18px] font-[500]">Short 8 oz</span>
                <span className="text-right text-[16px] md:text-[18px] font-[600]">{currentDrink.priceShort}</span>
                <span className="text-left text-[16px] md:text-[18px] font-[500] mt-3 md:mt-2">Tall 12 oz</span>
                <span className="text-right text-[16px] md:text-[18px] font-[600] mt-3 md:mt-2">{currentDrink.priceTall}</span>
              </div>
              <p className="text-[#5E4B3E] text-[13.5px] md:text-[14px] whitespace-pre-line leading-[1.6] font-[400] md:font-normal opacity-90 text-center md:text-left mx-auto md:mx-0 max-w-[280px] md:max-w-[320px]">
                {currentDrink.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center Add ons CTA */}
        <div className="w-full md:w-1/3 flex justify-center items-center gap-4 mt-7 md:mt-0 pt-0 pointer-events-auto relative z-30 order-last md:order-none md:translate-y-12">
          <button
            onClick={handlePrev}
            className="flex md:hidden w-11 h-11 bg-white rounded-full items-center justify-center text-gray-800 hover:scale-105 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] group"
            aria-label="Previous signature"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-[2px] transition-transform" />
          </button>
          <a
            onClick={() => setAddOnsOpen(true)}
            className="blob-btn btn-blob-brown px-[32px] md:px-[34px] py-[14px] md:py-[12px] rounded-full text-[14px] md:text-[16px] font-semibold md:font-bold shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:scale-105 min-w-[140px] inline-flex items-center justify-center tracking-wide"
          >
            <span className="relative z-10">Add ons</span>
            <span className="blob-btn__inner" aria-hidden="true">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
              </span>
            </span>
          </a>
          <button
            onClick={handleNext}
            className="flex md:hidden w-11 h-11 bg-white rounded-full items-center justify-center text-gray-800 hover:scale-105 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] group"
            aria-label="Next signature"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-[2px] transition-transform" />
          </button>
        </div>

        {/* Size Selection Toggle Buttons */}
        <div className="hidden md:flex w-full md:w-1/3 flex-row md:flex-col justify-end items-end gap-3 pointer-events-auto mb-6 md:mb-12">
          <a
            onClick={() => setSelectedSize("short")}
            className={`blob-btn btn-blob-brown ${
              selectedSize === "short"
                ? "bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                : "bg-white/40 text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] border border-white/50"
            } px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-xs font-bold w-[110px] md:w-[124px] whitespace-nowrap tracking-wide`}
          >
            <span className="relative z-10">8 oz (Short)</span>
            <span className="blob-btn__inner" aria-hidden="true">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
              </span>
            </span>
          </a>
          <a
            onClick={() => setSelectedSize("tall")}
            className={`blob-btn btn-blob-brown ${
              selectedSize === "tall"
                ? "bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]"
                : "bg-white/40 text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] border border-white/50"
            } px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-xs font-bold w-[110px] md:w-[124px] whitespace-nowrap tracking-wide`}
          >
            <span className="relative z-10">12 oz (Tall)</span>
            <span className="blob-btn__inner" aria-hidden="true">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
                <span className="blob-btn__blob" />
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Add Ons Modal */}
      <AddOnsModal isOpen={addOnsOpen} onClose={() => setAddOnsOpen(false)} />
    </section>
  );
};
