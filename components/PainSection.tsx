"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const painPoints = [
  {
    num: "01",
    title: "The 40-Hour Grind",
    body: "Manual policy spreading steals your team's most productive weeks. Senior brokers become copy-paste operators.",
    stat: "40 hrs per renewal",
  },
  {
    num: "02",
    title: "The E&O Nightmare",
    body: "Every manual keystroke is a transcription risk. One error in a 200-page PDF becomes a multi-million dollar claim.",
    stat: "High Risk Error",
  },
  {
    num: "03",
    title: "Format Chaos",
    body: "Unstructured HR census dumps and inconsistent carrier PDFs make true like-for-like comparison nearly impossible.",
    stat: "Inconsistent Data",
  },
  {
    num: "04",
    title: "Margin Compression",
    body: "Rising talent costs and shrinking commissions create a hard ceiling on your ability to scale or grow.",
    stat: "18 weeks lost/year",
  },
];

export default function PainSection() {
  return (
    <section id="problem" className="bg-white py-32 sm:py-48 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-4">
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
          >
            Your Best People Are Doing Data Entry
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed">
            The modern benefits renewal process was designed for a world that no longer exists. The tools have not caught up, leading to margin compression.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.num}
              variants={cardReveal}
              className="flex justify-center"
            >
              <div className="bg-slate-50 w-full max-w-[320px] aspect-square rounded-full border border-slate-200 p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-200 transition-all group relative">
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-900 shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                    {point.num}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                  {point.body}
                </p>
                <div className="mt-auto">
                  <Badge variant="secondary" className="bg-white text-[10px] font-bold uppercase tracking-wider text-blue-600 border-slate-200 px-3 py-1">
                    {point.stat}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
