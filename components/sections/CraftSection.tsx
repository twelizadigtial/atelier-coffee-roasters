"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CraftIconThoughtfully,
  CraftIconIngredients,
  CraftIconComforting,
  CraftIconRichFlavor,
  CraftIconFreshPour,
} from "@/components/ui/SVGFilters";

export const CraftSection: React.FC = () => {
  return (
    <section className="relative min-h-[850px] lg:min-h-[950px] w-full flex items-center justify-center bg-[#FEFEF1] z-10 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center bg-[#FEFEF1]">
        <div
          className="absolute inset-x-0 top-0 h-[300px] z-10 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, #FEFEF1 0%, #FEFEF1 20%, rgba(254,254,241,0.8) 50%, transparent 100%)",
          }}
        />
        <img
          src="/assets/Section 3 BG-BW-pyzEn.webp"
          alt="Trench Coat Background"
          className="w-full h-full object-cover object-center hidden md:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 5%, black 25%, black 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 5%, black 25%, black 100%)",
          }}
        />
        <img
          src="/assets/features_bg_mobile-uB_nbH0I.webp"
          alt="Trench Coat Background Mobile"
          className="w-full h-full object-fill object-center block md:hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 5%, black 25%, black 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, transparent 5%, black 25%, black 100%)",
          }}
        />
      </div>

      <div className="relative z-auto max-w-[1100px] 2xl:max-w-[1300px] mx-auto w-full h-[800px] lg:h-[900px] flex items-center justify-center pointer-events-none lg:pt-[80px]">
        {/* MOBILE FEATURE BADGES */}
        {/* 1. Top Center (Real Ingredients) */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center z-20 w-[125px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-[7.2px] py-[5.4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center space-y-[1.8px] w-[125px] h-[72px]"
          >
            <div className="scale-[0.8] h-[20px] flex items-center justify-center">
              <CraftIconIngredients />
            </div>
            <span className="font-medium text-[14.24px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Real Ingredients
            </span>
          </motion.div>
        </div>

        {/* 2. Mid Left (Comforting) */}
        <div className="absolute left-[4.5%] top-[38%] flex md:hidden flex-col items-center z-20 w-[125px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-[7.2px] py-[5.4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center space-y-[1.8px] w-[125px] h-[72px]"
          >
            <div className="scale-[0.8] h-[20px] flex items-center justify-center">
              <CraftIconComforting />
            </div>
            <span className="font-medium text-[14.24px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Comforting
            </span>
          </motion.div>
        </div>

        {/* 3. Mid Right (Thoughtfully Crafted) */}
        <div className="absolute right-[4.5%] top-[38%] flex md:hidden flex-col items-center z-20 w-[125px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-[7.2px] py-[5.4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center space-y-[1.8px] w-[125px] h-[72px]"
          >
            <div className="scale-[0.8] h-[20px] flex items-center justify-center">
              <CraftIconThoughtfully />
            </div>
            <span className="font-medium text-[14.24px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Thoughtfully
              <br />
              crafted
            </span>
          </motion.div>
        </div>

        {/* 4. Bottom Left (Rich In Flavor) */}
        <div className="absolute left-[6.5%] top-[82%] flex md:hidden flex-col items-center z-20 w-[125px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-[7.2px] py-[5.4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center space-y-[1.8px] w-[125px] h-[72px]"
          >
            <div className="scale-[0.8] h-[20px] flex items-center justify-center">
              <CraftIconRichFlavor />
            </div>
            <span className="font-medium text-[14.24px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Rich In Flavor
            </span>
          </motion.div>
        </div>

        {/* 5. Bottom Right (Every Pour Freshly Made) */}
        <div className="absolute right-[6.5%] top-[82%] flex md:hidden flex-col items-center z-20 w-[125px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-[7.2px] py-[5.4px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center space-y-[1.8px] w-[125px] h-[72px]"
          >
            <div className="scale-[0.8] h-[20px] flex items-center justify-center">
              <CraftIconFreshPour />
            </div>
            <span className="font-medium text-[14.24px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Every pour
              <br />
              freshly made
            </span>
          </motion.div>
        </div>

        {/* DESKTOP FEATURE BADGES */}
        {/* 1. Top Center Node */}
        <div className="absolute top-[12%] lg:top-[12%] xl:top-[13%] left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center space-y-1.5 z-10 w-[155px] min-h-[85px]"
          >
            <CraftIconThoughtfully />
            <span className="font-medium text-[15px] text-center tracking-tight text-[#1170b6] mt-0.5 leading-tight">
              Thoughtfully
              <br />
              crafted
            </span>
          </motion.div>
        </div>

        {/* 2. Upper Left Node */}
        <div className="absolute md:left-[12%] lg:left-[18%] xl:left-[21%] md:top-[33%] lg:top-[32%] hidden md:flex flex-col items-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center space-y-1.5 z-10 w-[155px] min-h-[85px]"
          >
            <CraftIconIngredients />
            <span className="font-medium text-[15px] tracking-tight text-[#1170b6] text-center mt-0.5 leading-tight">
              Finest Ingredients
            </span>
          </motion.div>
        </div>

        {/* 3. Lower Left Node */}
        <div className="absolute md:left-[5%] lg:left-[8%] xl:left-[12%] md:top-[56%] lg:top-[54%] xl:top-[53%] hidden md:flex flex-col items-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center space-y-1.5 z-10 w-[155px] min-h-[85px]"
          >
            <CraftIconComforting />
            <span className="font-medium text-[15px] tracking-tight text-[#1170b6] text-center mt-0.5 leading-tight">
              Comforting
            </span>
          </motion.div>
        </div>

        {/* 4. Upper Right Node */}
        <div className="absolute right-auto md:right-[12%] lg:right-[18%] xl:right-[21%] md:top-[33%] lg:top-[32%] hidden md:flex flex-col items-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center space-y-1.5 z-10 w-[155px] min-h-[85px]"
          >
            <CraftIconRichFlavor />
            <span className="font-medium text-[15px] tracking-tight text-[#1170b6] text-center mt-0.5 leading-tight">
              Rich In Flavour
            </span>
          </motion.div>
        </div>

        {/* 5. Lower Right Node */}
        <div className="absolute right-auto md:right-[5%] lg:right-[8%] xl:right-[12%] md:top-[56%] lg:top-[54%] xl:top-[53%] hidden md:flex flex-col items-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative bg-white rounded-[16px] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center space-y-1.5 z-10 w-[155px] min-h-[85px]"
          >
            <CraftIconFreshPour />
            <span className="font-medium text-[15px] tracking-tight text-[#1170b6] text-center mt-0.5 leading-tight">
              Every pour
              <br />
              freshly made
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
