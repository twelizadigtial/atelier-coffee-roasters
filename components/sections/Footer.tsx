"use client";

import React from "react";
import { Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { StarSparkleIcon } from "@/components/ui/SVGFilters";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F1512] w-full pt-16 md:pt-24 pb-12 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[60px] text-white overflow-hidden relative mt-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start w-full">
          <div className="font-serif">
            <h2 className="text-[28px] md:text-[40px] flex items-center leading-none tracking-wide text-white font-bold">
              AUREL COFFEE
              <StarSparkleIcon className="w-5 h-5 ml-1.5 inline-block text-[#C88A58] -translate-y-2" />
            </h2>
            <p className="text-sm md:text-base mt-3 tracking-wide text-center md:text-left text-white/70 font-light">
              Artisanal Single-Origin Roastery & Café • Midtown Manhattan, NYC
            </p>
          </div>
        </div>

        {/* Operating Hours Column */}
        <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs md:text-sm font-bold mb-5 tracking-widest uppercase text-[#C88A58]">
            Roastery Hours
          </h4>
          <div className="space-y-3 text-xs md:text-sm text-white/80 font-light">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#C88A58]" />
              <span>Monday – Friday: 7:00 AM – 7:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#C88A58]" />
              <span>Saturday – Sunday: 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Contact & Social Column */}
        <div className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xs md:text-sm font-bold mb-5 tracking-widest uppercase text-[#C88A58]">
            Connect With Us
          </h4>
          <div className="flex space-x-3 justify-center md:justify-start mb-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C88A58] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#C88A58] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-white/60">535 Madison Ave, New York, NY 10022</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/60 font-light">
        <p>© {new Date().getFullYear()} Aurel Coffee Roasters. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0 tracking-wide">
          Crafted with <span className="text-red-400">❤️</span> for Specialty Coffee Lovers
        </p>
      </div>
    </footer>
  );
};
