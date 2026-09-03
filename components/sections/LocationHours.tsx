"use client";

import React from "react";
import { MapPin, Clock, Calendar, Mail, Phone, ExternalLink } from "lucide-react";
import { BlobButton } from "@/components/BlobButton";

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#1F1512] text-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-block bg-[#C88A58]/20 text-[#C88A58] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Visit Our Sanctuary
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Location & Hours
            </h2>

            <p className="text-base text-white/80 font-light leading-relaxed mb-8">
              Conveniently located at Christie's Sculpture Garden in Midtown Manhattan, our roastery sanctuary is open 7 days a week for slow morning coffee rituals and afternoon espresso pauses.
            </p>

            <div className="space-y-6 w-full mb-8">
              {/* Address Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C88A58] text-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">Roastery Address</h4>
                  <p className="text-sm text-white/80 font-light mt-1">
                    Christie’s Sculpture Garden at 535 Madison Avenue, New York, NY 10022
                  </p>
                  <a
                    href="https://maps.app.goo.gl/o2UTj51fRAp8BrpT8?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#C88A58] font-bold uppercase tracking-wider mt-2 hover:underline"
                  >
                    <span>Get Directions On Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C88A58] text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="font-serif font-bold text-lg text-white">Operating Hours</h4>
                  <div className="mt-2 space-y-1 text-sm text-white/80 font-light">
                    <div className="flex justify-between border-b border-white/10 pb-1">
                      <span>Monday – Friday:</span>
                      <span className="font-semibold text-white">7:00 AM – 7:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Saturday – Sunday:</span>
                      <span className="font-semibold text-white">8:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BlobButton
              variant="blue"
              href="https://maps.app.goo.gl/o2UTj51fRAp8BrpT8?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm font-bold uppercase tracking-wider"
            >
              Get Directions
            </BlobButton>
          </div>

          {/* Right Visual Image & Cupping Experience Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] overflow-hidden border-4 border-white/15 shadow-2xl h-[420px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Café Interior 535 Madison Ave"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-xs font-bold text-[#C88A58] uppercase tracking-widest">
                  Private Cupping Sessions
                </span>
                <h3 className="font-serif text-2xl font-bold mt-1">
                  Book A Single-Origin Tasting Experience
                </h3>
                <p className="text-xs md:text-sm text-white/80 font-light mt-2 leading-relaxed">
                  Join our Head Roaster for a guided 45-minute cupping tour exploring bean origins, flavor notes, and extraction techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
