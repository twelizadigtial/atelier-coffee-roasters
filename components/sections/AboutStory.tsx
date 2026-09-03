"use client";

import React from "react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";
import { Coffee, ShieldCheck, Flame, HeartHandshake } from "lucide-react";
import { WheatSparkleIcon } from "@/components/ui/SVGFilters";

interface AboutStoryProps {
  progress?: MotionValue<number>;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ progress }) => {
  const fallbackProgress = useMotionValue(0.58);
  const p = progress || fallbackProgress;

  // Cup-First Story Layout Reactions
  const leftX = useTransform(p, [0.38, 0.58, 0.78], ["-70px", "0px", "-35px"]);
  const rightX = useTransform(p, [0.38, 0.58, 0.78], ["70px", "0px", "35px"]);

  return (
    <section
      id="story"
      className="relative w-full py-24 md:py-36 bg-[#FDFBF7] border-t border-transparent z-20 overflow-hidden"
    >
      {/* Background Soft Coffee Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#FAF3EA] rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F5ECE1] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
        {/* Story Section Grid Framing Cup Destination */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div style={{ x: leftX }} className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2.5 bg-[#FAF3EA] px-4 py-1.5 rounded-full text-[#C88A58] text-xs font-bold uppercase tracking-widest mb-6">
              <WheatSparkleIcon className="w-4 h-4 fill-current transform scale-x-[-1]" />
              <span>Our Roastery Story</span>
              <WheatSparkleIcon className="w-4 h-4 fill-current" />
            </div>

            <h2 className="font-serif text-[32px] sm:text-[46px] md:text-[54px] text-[#1F1512] font-bold leading-[1.08] tracking-tight mb-6">
              Crafted For Slower Moments In A Fast-Paced City.
            </h2>

            <div className="space-y-5 text-[#1F1512]/80 font-sans text-base sm:text-lg leading-relaxed font-light">
              <p>
                Founded in Midtown Manhattan, Atelier Coffee Roasters was created with a single intent: to elevate the everyday coffee ritual into a sensory experience of pure luxury.
              </p>
              <p>
                We source exclusively single-origin, high-altitude Arabica beans from organic micro-lots in Colombia, Ethiopia, and Guatemala. Every batch is micro-roasted in-house to unlock unique flavor notes of jasmine, wild bergamot, dark chocolate, and toasted almond.
              </p>
            </div>
          </motion.div>

          {/* Story Visual Card with Uploaded Roastery Image */}
          <motion.div style={{ x: rightX }} className="lg:col-span-6 relative flex flex-col items-end">
            <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/assets/roastery_story.jpg"
                alt="Micro-Batch Roasted Coffee Beans & Powder"
                className="w-full h-[400px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1512]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C88A58]">
                  Handcrafted Pour Over Ritual
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold mt-1">
                  Precision Extraction • 93°C Water • 18g Dose
                </h3>
              </div>
            </div>

            {/* Cup Landing Spot Frame Indicator */}
            <div className="hidden lg:flex items-center space-x-2 mt-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FAF3EA] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C88A58]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F1512]">
                Artisanal Pour-Over Cup Nook
              </span>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1F1512] mb-3">
              Why Choose Atelier Coffee?
            </h3>
            <p className="text-sm md:text-base text-[#1F1512]/70 font-light">
              Four uncompromising principles that set our roastery apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[20px] border border-[#FAF3EA] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF3EA] text-[#C88A58] flex items-center justify-center mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#1F1512] text-lg mb-2">Direct Trade</h4>
              <p className="text-xs md:text-sm text-[#1F1512]/70 font-light leading-relaxed">
                Ethically sourced directly from high-altitude smallholder farms paying fair wages above market rates.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[20px] border border-[#FAF3EA] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF3EA] text-[#C88A58] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#1F1512] text-lg mb-2">Micro-Batch Roasting</h4>
              <p className="text-xs md:text-sm text-[#1F1512]/70 font-light leading-relaxed">
                Roasted in small 5kg batches every morning to guarantee peak flavor profile and aroma freshness.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[20px] border border-[#FAF3EA] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF3EA] text-[#C88A58] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#1F1512] text-lg mb-2">Master Extraction</h4>
              <p className="text-xs md:text-sm text-[#1F1512]/70 font-light leading-relaxed">
                Every espresso shot is weighed and timed for 28-second extraction precision by certified baristas.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[20px] border border-[#FAF3EA] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF3EA] text-[#C88A58] flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-[#1F1512] text-lg mb-2">Artisanal Bakery</h4>
              <p className="text-xs md:text-sm text-[#1F1512]/70 font-light leading-relaxed">
                Freshly baked French croissants, fruit tarts, and tiramisu prepared daily by our pastry chef.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
