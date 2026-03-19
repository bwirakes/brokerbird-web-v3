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
    color: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "The E&O Nightmare",
    body: "Every manual keystroke is a transcription risk. One error in a 200-page PDF becomes a multi-million dollar claim.",
    stat: "High Risk Error",
    color: "red",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Format Chaos",
    body: "Unstructured HR census dumps and inconsistent carrier PDFs make true like-for-like comparison nearly impossible.",
    stat: "Inconsistent Data",
    color: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Margin Compression",
    body: "Rising talent costs and shrinking commissions create a hard ceiling on your ability to scale or grow.",
    stat: "18 weeks lost/year",
    color: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

const colorStyles: Record<string, string> = {
  blue: "bg-blue-50/50 border-blue-100 hover:border-blue-300 text-blue-600",
  red: "bg-red-50/50 border-red-100 hover:border-red-300 text-red-600",
  indigo: "bg-indigo-50/50 border-indigo-100 hover:border-indigo-300 text-indigo-600",
  amber: "bg-amber-50/50 border-amber-100 hover:border-amber-300 text-amber-600",
};

export default function PainSection() {
  return (
    <section id="problem" className="bg-white pt-32 pb-12 sm:pt-48 sm:pb-24 px-6 overflow-hidden">
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
            Your Best People Are <br className="hidden sm:block" /> Doing Data Entry
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed">
            The modern benefits renewal process was designed for a world that no longer exists. The tools have not caught up, leading to margin compression.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.num}
              variants={cardReveal}
              className="group"
            >
              <div className={`h-full rounded-[2.5rem] border p-8 sm:p-10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${colorStyles[point.color]}`}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-inherit">
                    {point.icon}
                  </div>
                  <span className="text-sm font-bold opacity-40">{point.num}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {point.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                  {point.body}
                </p>
                
                <div className="pt-6 border-t border-slate-200/50">
                  <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 border-slate-200 shadow-sm">
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
