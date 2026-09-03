"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, CheckCircle2, Loader2, Phone } from "lucide-react";
import { WheatSparkleIcon } from "@/components/ui/SVGFilters";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      form.reset();
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-[#FDFBF7] overflow-hidden flex items-center min-h-[85vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 w-full">
        {/* Left Info Column */}
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start pt-4 md:pt-0">
          <div className="inline-flex items-center space-x-2.5 bg-[#C88A58] text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full w-max mb-6 shadow-sm">
            <WheatSparkleIcon className="w-4 h-4 fill-current transform scale-x-[-1] text-[#FDFBF7]" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-[#FDFBF7]">
              Get In Touch
            </span>
            <WheatSparkleIcon className="w-4 h-4 fill-current text-[#FDFBF7]" />
          </div>

          <h2 className="font-serif text-[24px] sm:text-3xl md:text-[44px] lg:text-[50px] text-[#1F1512] font-bold leading-[1.15] mb-6">
            Inquiries, Event Catering & Private Tasting Reservations.
          </h2>

          <p className="text-[#1F1512]/80 text-sm sm:text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 font-light leading-relaxed px-2">
            Whether you are interested in wholesale roasts for your business, private coffee bar catering for events, or reserving a guided tasting, we’d love to connect.
          </p>

          <div className="grid grid-cols-1 gap-y-4 w-full max-w-md mx-auto lg:mx-0 text-left">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-[#FAF3EA] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1F1512] flex flex-shrink-0 items-center justify-center text-white">
                <MapPin className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <h5 className="text-[#1F1512] font-bold text-sm sm:text-base">Roastery Address</h5>
                <p className="text-[#1F1512]/70 text-xs sm:text-sm mt-0.5">
                  Christie’s Sculpture Garden, 535 Madison Ave, NYC 10022
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-[#FAF3EA] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1F1512] flex flex-shrink-0 items-center justify-center text-white">
                <Mail className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <h5 className="text-[#1F1512] font-bold text-sm sm:text-base">Email Inquiries</h5>
                <p className="text-[#1F1512]/70 text-xs sm:text-sm mt-0.5">hello@aurel-coffee.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-2xl border border-[#FAF3EA] shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1F1512] flex flex-shrink-0 items-center justify-center text-white">
                <Phone className="w-5 h-5 text-[#C88A58]" />
              </div>
              <div>
                <h5 className="text-[#1F1512] font-bold text-sm sm:text-base">Roastery Phone</h5>
                <p className="text-[#1F1512]/70 text-xs sm:text-sm mt-0.5">+1 (212) 555-0198</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card (Prevent iOS Input Zoom with text-base) */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-[#FAF3EA] max-w-[500px] w-full min-h-[460px] flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center text-center py-6 h-full"
                >
                  <div className="w-16 h-16 bg-[#FAF3EA] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C88A58]" />
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mb-3 tracking-wide">
                    Message Received
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base mb-8 px-2 leading-relaxed font-light">
                    Thank you for contacting Aurel Coffee Roasters. Our coffee concierge will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#1F1512] text-white font-bold tracking-wider px-8 py-3.5 rounded-full text-xs uppercase hover:bg-[#C88A58] transition-colors min-h-[48px]"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <h3 className="text-center font-serif font-bold text-lg sm:text-2xl mb-6 text-gray-900 tracking-wide">
                    Send Us A Message
                  </h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        className="w-full bg-[#FAF3EA] text-gray-800 placeholder-[#1F1512]/50 border-none rounded-xl px-4 py-3.5 text-base outline-none focus:ring-2 ring-[#C88A58]/40 transition min-h-[48px]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                        className="w-full bg-[#FAF3EA] text-gray-800 placeholder-[#1F1512]/50 border-none rounded-xl px-4 py-3.5 text-base outline-none focus:ring-2 ring-[#C88A58]/40 transition min-h-[48px]"
                      />
                    </div>
                    <div>
                      <select
                        name="inquiry_type"
                        className="w-full bg-[#FAF3EA] text-gray-800 border-none rounded-xl px-4 py-3.5 text-base outline-none focus:ring-2 ring-[#C88A58]/40 transition min-h-[48px]"
                      >
                        <option value="General">General Inquiry</option>
                        <option value="Tasting">Private Tasting Reservation</option>
                        <option value="Catering">Event Catering & Coffee Bar</option>
                        <option value="Wholesale">Wholesale Bean Supply</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message or Event Details"
                        rows={4}
                        required
                        className="w-full bg-[#FAF3EA] text-gray-800 placeholder-[#1F1512]/50 border-none rounded-xl px-4 py-3.5 text-base outline-none resize-none focus:ring-2 ring-[#C88A58]/40 transition min-h-[100px]"
                      />
                    </div>

                    {error && (
                      <p className="text-red-500 text-sm text-center font-medium">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1F1512] hover:bg-[#C88A58] disabled:bg-gray-400 text-white font-bold tracking-wider py-4 px-6 rounded-xl mt-2 transition-colors text-sm sm:text-base cursor-pointer disabled:cursor-not-allowed flex items-center justify-center uppercase min-h-[48px]"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center space-x-2">
                          <Loader2 className="animate-spin h-5 w-5 text-white" />
                          <span>SENDING INQUIRY...</span>
                        </span>
                      ) : (
                        "SUBMIT MESSAGE"
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
