"use client";

import React from "react";
import { WheatSparkleIcon } from "@/components/ui/SVGFilters";

export const RitualSection: React.FC = () => {
  return (
    <section
      id="ritual"
      className="relative min-h-screen lg:min-h-0 w-full flex flex-col lg:flex-row items-center justify-center overflow-hidden pb-[400px] sm:pb-[450px] lg:pb-32 pt-[100px] md:pt-[150px] lg:pt-[200px] bg-[#FEFEF1] border-t border-transparent z-20"
    >
      {/* Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/Section 2 BG-mfNpyt-Q.webp"
          alt="Ritual Background"
          className="w-full h-full object-cover object-left md:object-top opacity-90 hidden md:block"
        />
        <img
          src="/assets/ritual_bg_mobile-XxtP-Zd1.webp"
          alt="Ritual Background Mobile"
          className="w-full h-full object-fill object-center opacity-90 block md:hidden"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 relative z-10 gap-x-8">
        {/* Left Column (Spacing on Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 relative mt-10 md:mt-20 lg:mt-0 h-[400px] md:h-[500px] lg:h-[700px] w-full border border-transparent">
          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full" />
        </div>

        {/* Right Column Content */}
        <div className="flex flex-col lg:col-span-7 xl:col-span-7 w-full max-w-[950px] mx-auto lg:mx-0 lg:pl-8 xl:pl-12 mt-4 md:mt-10 lg:mt-0 lg:self-center px-6 sm:px-10 text-left items-start relative">
          {/* Desktop Content */}
          <div className="hidden md:flex flex-col items-start w-full">
            <div className="inline-flex items-center justify-center space-x-3 bg-[#EAE5DA] px-5 py-2 rounded-full w-max mb-6 lg:mb-14 text-[#4A3219]">
              <WheatSparkleIcon className="w-4 h-4 fill-current transform scale-x-[-1]" />
              <span className="text-[14px] font-medium tracking-wide">
                A little nostalgic. A little new.
              </span>
              <WheatSparkleIcon className="w-4 h-4 fill-current" />
            </div>

            <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[48px] text-[#2C1A0D] mb-6 lg:mb-10 leading-[1.1] tracking-tight font-bold">
              Milk, Reintroduced.
            </h2>

            <div className="space-y-6 text-[#2C1A0D] font-sans text-[15px] md:text-[17px] lg:text-[19px] leading-[1.6] max-w-[650px] opacity-90 pr-4 lg:pr-0">
              <p>
                Everybody grew up with milk. For many of us, it was part of our mornings, routines, and the small moments we never really thought twice about.
              </p>
              <p>
                At MYLK Co, we wanted to take something so familiar and make it feel new again, more refined, more interesting, and made for today. Just milk, reimagined for slower moments in the middle of the chaotic city.
              </p>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="block md:hidden w-full relative mt-[80px]">
            <div className="flex flex-col items-start">
              <div className="self-start inline-flex items-center justify-center space-x-2 bg-[#EAE5DA] px-3 py-1.5 rounded-full w-max mb-6 text-[#4A3219]">
                <WheatSparkleIcon className="w-3 h-3 fill-current transform scale-x-[-1]" />
                <span className="text-[10px] font-medium tracking-wide">
                  A Little Nostalgic. A Little New
                </span>
                <WheatSparkleIcon className="w-3 h-3 fill-current" />
              </div>

              <h2 className="font-serif text-[24px] text-[#2C1A0D] mb-6 leading-[1.1] tracking-tight font-bold">
                Milk, Reintroduced.
              </h2>

              <div className="text-[#2C1A0D] font-sans text-[12px] leading-[1.6] opacity-90 pr-4 flex flex-col gap-[10px]">
                <p>
                  Everybody grew up with milk. For many of us, it was part of our mornings, routines, and the small moments we never really thought twice about.
                </p>
                <p>
                  At MYLK Co, we wanted to take something so familiar and make it feel new again, more refined, more interesting, and made for today. Just milk, reimagined for slower moments in the middle of the chaotic city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
