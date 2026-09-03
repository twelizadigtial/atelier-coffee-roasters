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
    stiffness: 300,
    damping: 35,
    restDelta: 0.0001,
  });

  const progress = windowWidth < 1024 ? scrollYProgress : smoothProgress;

  // MULTI-BREAKPOINT RESPONSIVE CUP TRAJECTORY KEYFRAMES (STICKY VIEWPORT LANDING)
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLaptop = windowWidth >= 1024 && windowWidth < 1280;

  const transformX = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      "0px",
      "0px",
      isMobile || isTablet ? "0px" : isLaptop ? "220px" : "290px",
      "0px",
      "0px",
      "0px",
    ]
  );

  const transformY = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      isMobile ? "-10px" : "0px",
      isMobile ? "10px" : "0px",
      isMobile ? "0px" : "0px",
      isMobile ? "0px" : "0px",
      isMobile ? "20px" : "30px",
      isMobile ? "60px" : "80px",
    ]
  );

  const transformScale = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [
      isMobile ? 0.72 : isTablet ? 0.82 : isLaptop ? 0.92 : 1.0,
      isMobile ? 0.56 : isTablet ? 0.66 : 0.76,
      isMobile ? 0.58 : isTablet ? 0.70 : 0.80,
      isMobile ? 0.55 : isTablet ? 0.66 : 0.76,
      isMobile ? 0.55 : isTablet ? 0.66 : 0.76,
      0.0,
    ]
  );

  const transformRotate = useTransform(
    progress,
    [0, 0.28, 0.58, 0.88, 0.98, 1.0],
    [0, -4, isMobile || isTablet ? 0 : 8, 0, 0, 0]
  );

  // Cup remains 100% visible through the END of Craft Journey (0.98), fading out past Craft Journey
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
      "drop-shadow(0px 30px 20px rgba(0,0,0,0.35))",
      "drop-shadow(0px 35px 25px rgba(0,0,0,0.22))",
      "drop-shadow(0px 30px 25px rgba(0,0,0,0.38))",
      "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
    ]
  );

  return (
    <div className="bg-[#FDFBF7] font-sans min-h-screen text-[#1F1512] selection:bg-[#C88A58] selection:text-white overflow-x-hidden w-full max-w-full">
      <SVGFilters />
      <Navbar />

      {/* RESPONSIVE COFFEE JOURNEY PARTICLES */}
      <CoffeeJourneyParticles progress={smoothProgress} windowWidth={windowWidth} />

      {/* CONTINUOUS STORYTELLING TRAVELING CUP CONTAINER (Hero through END of Craft Journey) */}
      <div ref={travelRef} className="relative w-full overflow-visible">
        {/* STICKY VIEWPORT PINNED 3D CUP CONTAINER */}
        <div className="sticky top-0 h-screen w-full pointer-events-none z-[100] flex justify-center items-center overflow-visible -mb-[100vh]">
          <motion.div
            style={{
              x: transformX,
              y: transformY,
              scale: transformScale,
              rotate: transformRotate,
              opacity: transformOpacity,
            }}
            className="relative transform-gpu will-change-transform origin-center pointer-events-auto"
          >
            <motion.img
              src="/assets/custom_cup.png"
              className="h-[280px] sm:h-[360px] md:h-[440px] lg:h-[540px] xl:h-[600px] w-auto object-contain"
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

        {/* Stage 1: Hero Section */}
        <HeroSection progress={smoothProgress} />

        {/* Stage 2: Store Info Bar */}
        <div className="relative z-[95]">
          <StoreInfoBar progress={smoothProgress} />
        </div>

        {/* Stage 3: Our Story & Why Choose Us */}
        <AboutStory progress={smoothProgress} />

        {/* Stage 4: Craft Journey (Brewing & Roasting Experience) */}
        <BrewingExp progress={smoothProgress} />
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
