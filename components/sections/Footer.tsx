"use client";

import React from "react";
import { Mail, MapPin, Instagram, Facebook, Clock, ArrowUp } from "lucide-react";
import { StarSparkleIcon } from "@/components/ui/SVGFilters";

const QUICK_LINKS = [
  { label: "Home", id: "home" },
  { label: "Our Story", id: "story" },
  { label: "Roaster's Choice", id: "featured" },
  { label: "Coffee & Bakery Menu", id: "menu" },
  { label: "Brewing Experience", id: "brewing" },
  { label: "Gallery", id: "gallery" },
  { label: "Location & Hours", id: "location" },
  { label: "Contact & Tasting", id: "contact" },
];

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1F1512] w-full pt-16 md:pt-24 pb-12 px-6 md:px-12 rounded-t-[36px] md:rounded-t-[54px] text-white overflow-hidden relative mt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start w-full">
          <div className="font-serif">
            <h2 className="text-[26px] md:text-[36px] flex items-center leading-none tracking-wide text-white font-bold">
              ATELIER COFFEE
              <StarSparkleIcon className="w-5 h-5 ml-1.5 inline-block text-[#C88A58] -translate-y-2" />
            </h2>
            <p className="text-xs md:text-sm mt-3 tracking-wide text-center md:text-left text-white/70 font-light leading-relaxed">
              Artisanal Micro-Batch Roastery & Sanctuary located at Christie's Sculpture Garden in Midtown Manhattan, NYC.
            </p>
          </div>

          <div className="mt-6 flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("home")}
              className="bg-white/10 hover:bg-[#C88A58] text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center space-x-1.5 transition-colors uppercase tracking-wider min-h-[44px]"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back To Top</span>
            </button>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs font-bold mb-4 tracking-widest uppercase text-[#C88A58]">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-white/80 font-light">
            {QUICK_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="hover:text-[#C88A58] transition-colors py-1 inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Operating Hours Column */}
        <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs font-bold mb-4 tracking-widest uppercase text-[#C88A58]">
            Roastery Hours
          </h4>
          <div className="space-y-3 text-xs md:text-sm text-white/80 font-light">
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-[#C88A58] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Mon – Fri:</span>
                <span>7:00 AM – 7:00 PM</span>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-[#C88A58] flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-white">Sat – Sun:</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Location Column */}
        <div className="md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs font-bold mb-4 tracking-widest uppercase text-[#C88A58]">
            Social & Location
          </h4>
          <div className="flex space-x-3 justify-center md:justify-start mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C88A58] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C88A58] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
          </div>
          <p className="text-xs text-white/60 font-light leading-relaxed">
            535 Madison Ave, NYC 10022
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 font-light">
        <p>© {new Date().getFullYear()} Atelier Coffee Roasters. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0 tracking-wide">
          Crafted with <span className="text-red-400">❤️</span> for Specialty Coffee Lovers
        </p>
      </div>
    </footer>
  );
};
