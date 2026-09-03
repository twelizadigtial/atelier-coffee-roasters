"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { X as CloseIcon, Coffee, ShoppingBag } from "lucide-react";
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

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

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
        <div className="hidden lg:flex w-full max-w-[1400px] h-[54px] items-center justify-between pointer-events-auto bg-[#FDFBF7]/90 backdrop-blur-md px-6 rounded-full border border-[#1F1512]/10 shadow-sm">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-8 h-8 rounded-full bg-[#1F1512] text-[#FDFBF7] flex items-center justify-center font-serif font-bold">
              A
            </div>
            <span className="font-serif font-bold text-xl tracking-wider text-[#1F1512]">
              AUREL <span className="font-light text-xs tracking-widest text-[#C88A58] uppercase block leading-none">Coffee Roasters</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4 text-[13px] font-medium text-[#1F1512]">
            {NAV_ITEMS.slice(0, 6).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="hover:text-[#C88A58] transition-colors py-1 px-2 uppercase tracking-wider text-xs font-semibold"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Visit / Order CTA */}
          <div className="flex items-center space-x-3">
            <BlobButton
              variant="black"
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("menu");
              }}
              className="px-5 py-2 text-[12px] font-semibold uppercase tracking-wider"
            >
              Order Online
            </BlobButton>
          </div>
        </div>

        {/* Mobile Header Bar */}
        <div className="flex lg:hidden items-center justify-between w-full h-[50px] pointer-events-auto bg-[#FDFBF7]/95 backdrop-blur-md px-4 rounded-full border border-[#1F1512]/10 shadow-sm">
          <div className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
            <div className="w-7 h-7 rounded-full bg-[#1F1512] text-[#FDFBF7] flex items-center justify-center font-serif font-bold text-xs">
              A
            </div>
            <span className="font-serif font-bold text-base text-[#1F1512] tracking-wide">
              AUREL
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("menu")}
              className="bg-[#C88A58] text-white text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Menu
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 rounded-full bg-[#1F1512] text-white flex items-center justify-center font-bold text-xs"
              aria-label="Open menu"
            >
              <Coffee className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[150] bg-[#1F1512] text-[#FDFBF7] flex flex-col pointer-events-auto overflow-hidden lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 h-[50px] shrink-0 relative z-10 w-full mb-8 border-b border-white/10">
              <span className="font-serif font-bold text-xl tracking-wider text-[#FDFBF7]">
                AUREL COFFEE
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-end text-[#FDFBF7]"
                aria-label="Close menu"
              >
                <CloseIcon className="w-8 h-8 text-[#C88A58]" strokeWidth={2} />
              </button>
            </div>

            {/* Menu Drawer Links */}
            <div className="flex-1 flex flex-col justify-center px-6 gap-2 relative z-10">
              {NAV_ITEMS.map((item, idx) => (
                <div key={item.id} className="overflow-hidden pt-1">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      delay: 0.2 + idx * 0.06,
                      duration: 0.7,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="font-serif text-[8vw] font-normal tracking-wide text-[#FDFBF7] uppercase hover:text-[#C88A58] transition-colors block"
                    >
                      {item.label}
                    </a>
                  </motion.div>
                </div>
              ))}

              <div className="pt-6">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="inline-block bg-[#C88A58] text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase"
                >
                  Book Private Tasting
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="pb-8 px-6 flex justify-between items-center text-xs text-white/60 border-t border-white/10 pt-4">
              <span>535 Madison Ave, New York</span>
              <span>Open Daily 7 AM - 7 PM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
