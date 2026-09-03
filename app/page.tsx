"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import { SVGFilters } from "@/components/ui/SVGFilters";
import { CoffeeJourneyParticles } from "@/components/ui/CoffeeJourneyParticles";
import { HeroSection } from "@/components/sections/HeroSection";
import { StoreInfoBar } from "@/components/sections/StoreInfoBar";
import { AboutStory } from "@/components/sections/AboutStory";
import { BrewingExp } from "@/components/sections/BrewingExp";
import { FeaturedCoffee } from "@/components/sections/FeaturedCoffee";
import { FullMenuSection } from "@/components/sections/FullMenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { LocationHours } from "@/components/sections/LocationHours";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Traveling Cup Container Target (Covering Hero through END of Craft Journey)
  const travelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: travelRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 36,
    restDelta: 0.0001,
  });

  const progress = windowWidth < 1024 ? scrollYProgress : smoothProgress;

  // BREAKPOINT CATEGORIZATION
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024 && windowWidth < 1280;

  // CONTINUOUS 3D CUP MOTION TRAJECTORY (Hero -> Store Info Bar -> Story -> Craft Journey)
  const transformX = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      "0px",
      "0px",
      isMobile || isTablet ? "0px" : isLaptop ? "220px" : "300px",
      "0px",
      "0px",
      "0px",
    ]
  );

  const transformY = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      isMobile ? "-15px" : isTablet ? "-10px" : "0px",
      isMobile ? "380px" : isTablet ? "430px" : isLaptop ? "460px" : "480px",
      isMobile ? "940px" : isTablet ? "1060px" : isLaptop ? "1120px" : "1180px",
      isMobile ? "1680px" : isTablet ? "1850px" : isLaptop ? "1980px" : "2080px",
      isMobile ? "1740px" : isTablet ? "1910px" : isLaptop ? "2040px" : "2140px",
      isMobile ? "1860px" : isTablet ? "2030px" : isLaptop ? "2180px" : "2300px",
    ]
  );

  const transformScale = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      isMobile ? 0.75 : isTablet ? 0.88 : 1.0,
      isMobile ? 0.58 : isTablet ? 0.68 : 0.78,
      isMobile ? 0.60 : isTablet ? 0.72 : 0.82,
      isMobile ? 0.55 : isTablet ? 0.66 : 0.78,
      isMobile ? 0.55 : isTablet ? 0.66 : 0.78,
      0.0,
    ]
  );

  const transformRotate = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [0, -5, isMobile || isTablet ? 0 : 10, 0, 0, 0]
  );

  // Cup remains visible through middle & end of Craft Journey (0.88 - 0.98), fading out past Craft Journey
  const transformOpacity = useTransform(
    progress,
    [0, 0.88, 0.96, 1.0],
    [1, 1, 1, 0]
  );

  const transformShadow = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 1.0],
    [
      "drop-shadow(0px 25px 35px rgba(0,0,0,0.06))",
      "drop-shadow(0px 30px 20px rgba(0,0,0,0.4))",
      "drop-shadow(0px 35px 25px rgba(0,0,0,0.22))",
      "drop-shadow(0px 30px 25px rgba(0,0,0,0.38))",
      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
    ]
  );

  return (
    <div className="bg-[#FDFBF7] font-sans min-h-screen text-[#1F1512] selection:bg-[#C88A58] selection:text-white overflow-x-hidden w-full max-w-full">
      <SVGFilters />
      <Navbar />

      {/* RESPONSIVE COFFEE JOURNEY PARTICLES (WORKING PERFECTLY) */}
      <CoffeeJourneyParticles progress={smoothProgress} windowWidth={windowWidth} />

      {/* CONTINUOUS STORYTELLING TRAVELING CUP CONTAINER (Hero through END of Craft Journey) */}
      <div ref={travelRef} className="relative w-full overflow-visible">
        {/* Stage 1: Hero Section */}
        <HeroSection progress={smoothProgress}>
          {/* Continuous Traveling 3D Coffee Cup Object */}
          <div className="w-full flex justify-center">
            <motion.div
              style={{
                x: transformX,
                y: transformY,
                scale: transformScale,
                rotate: transformRotate,
                opacity: transformOpacity,
                zIndex: 120,
              }}
              className="relative transform-gpu will-change-transform origin-center cursor-pointer pointer-events-auto mt-0"
            >
              <motion.img
                src="/assets/custom_cup.png"
                className="h-[320px] sm:h-[400px] md:h-[480px] lg:h-[580px] xl:h-[630px] w-auto object-contain will-change-transform"
                alt="Atelier Coffee Cup"
                style={{
                  filter:
                    windowWidth < 1024
                      ? "drop-shadow(0px 20px 30px rgba(0,0,0,0.18))"
                      : transformShadow,
                }}
                whileHover={windowWidth < 1024 ? undefined : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </motion.div>
          </div>
        </HeroSection>

        {/* Stage 2: Store Info Bar */}
        <div className="relative z-[10]">
          <StoreInfoBar progress={smoothProgress} />
        </div>

        {/* Stage 3: Our Story & Why Choose Us */}
        <div className="relative z-[10]">
          <AboutStory progress={smoothProgress} />
        </div>

        {/* Stage 4: Craft Journey (Brewing & Roasting Experience) */}
        <div className="relative z-[10]">
          <BrewingExp progress={smoothProgress} />
        </div>
      </div>

      {/* NORMAL WEBSITE BEHAVIOR AFTER CRAFT JOURNEY */}

      {/* Signature Coffees Carousel */}
      <FeaturedCoffee />

      {/* Full Coffee & Pastry Menu */}
      <FullMenuSection />

      {/* Atmosphere Gallery */}
      <GallerySection />

      {/* Location & Operating Hours */}
      <LocationHours />

      {/* Contact & Private Tastings */}
      <ContactSection />

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
