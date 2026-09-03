"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FULL_MENU_ITEMS, CoffeeItem } from "@/lib/coffeeData";
import { Sparkles, Star } from "lucide-react";

const CATEGORIES = [
  "All",
  "Espresso",
  "Americano",
  "Cappuccino",
  "Latte",
  "Mocha",
  "Cold Coffee",
  "Specialty Coffee",
  "Tea",
  "Pastries",
  "Desserts",
] as const;

export const FullMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? FULL_MENU_ITEMS
      : FULL_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FDFBF7] relative z-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-[#FAF3EA] text-[#C88A58] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Café & Bakery Menu</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1F1512] mb-3">
            Crafted Coffee & Artisanal Food
          </h2>
          <p className="text-xs sm:text-base text-[#1F1512]/70 font-light px-2">
            Every drink is brewed to order using micro-roasted single-origin beans.
          </p>
        </div>

        {/* Category Tabs Bar (Touch-Friendly min 44px) */}
        <div className="flex items-center justify-start md:justify-center space-x-2 overflow-x-auto pb-4 mb-10 hide-scrollbar px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all min-h-[44px] flex items-center justify-center ${
                activeCategory === cat
                  ? "bg-[#1F1512] text-white shadow-md"
                  : "bg-[#FAF3EA] text-[#1F1512]/80 hover:bg-[#F5ECE1]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[24px] overflow-hidden border border-[#FAF3EA] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Item Image */}
                  <div className="relative h-[180px] sm:h-[210px] w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                    {item.popular && (
                      <span className="absolute top-3 left-3 bg-[#C88A58] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </span>
                    )}

                    {item.origin && (
                      <span className="absolute bottom-3 left-3 text-white text-xs font-medium tracking-wide">
                        {item.origin} • {item.roastLevel} Roast
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-[#1F1512]">
                        {item.name}
                      </h3>
                      <div className="text-right flex-shrink-0">
                        <span className="font-bold text-[#C88A58] text-sm sm:text-base md:text-lg block">
                          {item.priceShort}
                        </span>
                        {item.priceTall !== item.priceShort && (
                          <span className="text-[10px] sm:text-[11px] text-[#1F1512]/60 font-medium block">
                            Tall: {item.priceTall}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1F1512]/75 font-light leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 flex items-center justify-between border-t border-[#FAF3EA] mt-2">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#C88A58] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <button className="text-xs font-bold text-[#1F1512] hover:text-[#C88A58] transition-colors uppercase tracking-wider py-2 min-h-[44px] flex items-center">
                    Add To Order +
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
