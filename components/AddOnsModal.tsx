"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X as CloseIcon } from "lucide-react";
import { ADD_ONS_DATA } from "@/lib/menuData";

interface AddOnsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddOnsModal: React.FC<AddOnsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-12 w-full max-w-[600px] shadow-2xl relative text-[#5E4B3E]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#5E4B3E]/40 hover:text-[#5E4B3E]/80 transition-colors p-1"
              aria-label="Close add-ons modal"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-8 md:gap-10 font-sans text-[#5E4B3E]">
              {/* Milk & Boosters */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 md:gap-10">
                {/* Milk Choices */}
                <div className="flex-1">
                  <h4 className="font-bold mb-4 tracking-wide text-[15px] md:text-[17px] uppercase text-[#5E4B3E] border-b border-[#e2dcd9] pb-2">
                    CHOOSE MILK
                  </h4>
                  <ul className="space-y-3 text-[15px] md:text-[16px] font-normal text-[#5E4B3E]">
                    {ADD_ONS_DATA.milkChoices.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span className="opacity-90">{item.name}</span>
                        <span className="opacity-80 font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Boosters */}
                <div className="flex-1">
                  <h4 className="font-bold mb-4 tracking-wide text-[15px] md:text-[17px] uppercase text-[#5E4B3E] border-b border-[#e2dcd9] pb-2">
                    ADD-ONS
                  </h4>
                  <ul className="space-y-3 text-[15px] md:text-[16px] font-normal text-[#5E4B3E]">
                    {ADD_ONS_DATA.boosters.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-center">
                        <span className="opacity-90">{item.name}</span>
                        <span className="opacity-80 font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bakery Items */}
              <div className="border-t border-[#e2dcd9] pt-6">
                <h4 className="font-bold mb-4 tracking-wide text-[15px] md:text-[17px] uppercase text-[#5E4B3E] pb-2 border-b border-[#e2dcd9]">
                  FRESHLY BAKED PASTRIES
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[15px] md:text-[16px] font-normal text-[#5E4B3E]">
                  {ADD_ONS_DATA.bakery.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center bg-[#F2ECE4]/40 p-2.5 rounded-xl">
                      <span className="opacity-90">{item.name}</span>
                      <span className="opacity-80 font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={onClose}
                  className="w-full bg-[#5D403A] text-white py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#4A3219] transition-colors"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
