"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/galleryData";
import { Sparkles, Maximize2 } from "lucide-react";

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const categories = ["All", "Brewing Process", "Latte Art", "Café Interior", "Pastries"];

  const filtered =
    activeFilter === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#FAF3EA] relative z-20">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-white text-[#C88A58] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atmosphere & Artistry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1512] mb-3">
            Aurel Gallery
          </h2>
          <p className="text-sm md:text-base text-[#1F1512]/70 font-light">
            A glimpse inside our Midtown Manhattan roastery and daily craft.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? "bg-[#1F1512] text-white shadow-md"
                  : "bg-white/80 text-[#1F1512]/70 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImg(item.image)}
                className="relative rounded-[24px] overflow-hidden group cursor-pointer h-[320px] shadow-md border border-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-bold text-[#C88A58] uppercase tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-xl font-bold">{item.title}</h4>
                  <Maximize2 className="w-5 h-5 absolute top-6 right-6 text-white/80" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <img src={selectedImg} alt="Gallery Preview" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
