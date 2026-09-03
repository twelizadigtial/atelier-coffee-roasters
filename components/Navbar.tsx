"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X as CloseIcon, Coffee, MapPin, Phone, ArrowUp, Menu as MenuIcon } from "lucide-react";
import { BlobButton } from "@/components/BlobButton";

const NAV_ITEMS = [
  { label: "HOME", id: "home" },
  { label: "OUR STORY", id: "story" },
  { label: "SIGNATURES", id: "featured" },
  { label: "COFFEE MENU", id: "menu" },
  { label: "BREWING", id: "brewing" },
  { label: "GALLERY", id: "gallery" },
  { label: "LOCATION", id: "location" },
  { label: "CONTACT", id: "contact" },
];

export const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showQuickDock, setShowQuickDock] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 200) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 350) {
      setShowQuickDock(true);
    } else {
      setShowQuickDock(false);
    }
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* TOP FLOATING HEADER NAVIGATION */}
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-3 md:top-6 left-0 right-0 z-[100] flex justify-center w-full px-4 md:px-10 pointer-events-none"
      >
        {/* Desktop Navbar Header */}
        <div className="hidden lg:flex w-full max-w-[1400px] h-[58px] items-center justify-between pointer-events-auto bg-[#FDFBF7]/95 backdrop-blur-md px-6 rounded-full border border-[#1F1512]/10 shadow-md">
          {/* Brand Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-9 h-9 rounded-full bg-[#1F1512] text-[#FDFBF7] flex items-center justify-center font-serif font-bold group-hover:bg-[#C88A58] transition-colors shadow-sm">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-[#1F1512] leading-none">
                ATELIER
              </span>
              <span className="font-sans font-bold text-[9px] tracking-[0.25em] text-[#C88A58] uppercase leading-tight">
                Coffee Roasters • NYC
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1 text-xs font-semibold text-[#1F1512]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`py-2 px-3 rounded-full uppercase tracking-wider transition-all min-h-[40px] flex items-center justify-center ${
                    isActive
                      ? "bg-[#1F1512] text-white font-bold shadow-sm"
                      : "hover:text-[#C88A58] hover:bg-[#FAF3EA]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Order Ahead CTA */}
          <div className="flex items-center space-x-3">
            <BlobButton
              variant="black"
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("menu");
              }}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider min-h-[42px]"
            >
              Order Online
            </BlobButton>
          </div>
        </div>

        {/* Mobile / Tablet Header Bar */}
        <div className="flex lg:hidden items-center justify-between w-full h-[52px] pointer-events-auto bg-[#FDFBF7]/95 backdrop-blur-md px-4 rounded-full border border-[#1F1512]/10 shadow-md">
          <div className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
            <div className="w-8 h-8 rounded-full bg-[#1F1512] text-[#FDFBF7] flex items-center justify-center font-serif font-bold text-sm">
              A
            </div>
            <span className="font-serif font-bold text-base text-[#1F1512] tracking-wide">
              ATELIER COFFEE
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-[#C88A58] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider min-h-[38px] flex items-center shadow-sm"
            >
              Menu
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full bg-[#1F1512] text-white flex items-center justify-center font-bold text-xs"
              aria-label="Open menu drawer"
            >
              <MenuIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* FLOATING QUICK DOCK SHORTCUT PILL (Bottom Right) */}
      <AnimatePresence>
        {showQuickDock && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-5 right-5 z-[90] flex items-center space-x-2 bg-[#1F1512] text-white p-1.5 rounded-full shadow-2xl border border-white/20 backdrop-blur-md"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C88A58] text-white flex items-center justify-center transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="px-4 py-2 rounded-full bg-[#C88A58] hover:bg-white hover:text-[#1F1512] text-white text-xs font-bold uppercase tracking-wider transition-all min-h-[40px] flex items-center space-x-1.5"
            >
              <Coffee className="w-4 h-4" />
              <span>Menu</span>
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C88A58] text-white flex items-center justify-center transition-colors"
              title="Location & Hours"
            >
              <MapPin className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN MOBILE & TABLET DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] bg-[#1F1512] text-[#FDFBF7] flex flex-col pointer-events-auto overflow-y-auto lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 h-[60px] shrink-0 relative z-10 w-full mb-4 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#C88A58] text-white flex items-center justify-center font-serif font-bold text-sm">
                  A
                </div>
                <span className="font-serif font-bold text-xl tracking-wider text-[#FDFBF7]">
                  ATELIER COFFEE
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-[#FDFBF7] bg-white/10 rounded-full"
                aria-label="Close menu"
              >
                <CloseIcon className="w-6 h-6 text-[#C88A58]" strokeWidth={2} />
              </button>
            </div>

            {/* Menu Drawer Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-2 relative z-10 py-6">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <div key={item.id} className="overflow-hidden py-1 border-b border-white/5">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{
                        delay: 0.1 + idx * 0.04,
                        duration: 0.5,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                    >
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        className={`font-serif text-2xl sm:text-3xl font-bold tracking-wide uppercase transition-colors flex items-center justify-between py-2 min-h-[48px] ${
                          isActive ? "text-[#C88A58]" : "text-[#FDFBF7] hover:text-[#C88A58]"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#C88A58]" />
                        )}
                      </a>
                    </motion.div>
                  </div>
                );
              })}

              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToSection("menu")}
                  className="w-full bg-[#C88A58] text-white py-4 rounded-full text-xs font-bold tracking-widest uppercase text-center min-h-[48px]"
                >
                  Explore Full Menu & Order
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full border border-white/30 text-white py-4 rounded-full text-xs font-bold tracking-widest uppercase text-center min-h-[48px]"
                >
                  Book Private Tasting
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pb-8 px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 border-t border-white/10 pt-4 gap-2">
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-[#C88A58]" />
                <span>535 Madison Ave, Midtown NYC</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Phone className="w-4 h-4 text-[#C88A58]" />
                <span>+1 (212) 555-0198</span>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
