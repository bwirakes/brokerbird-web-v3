"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const painPoints = [
  {
    title: "The 40-Hour Grind",
    body: "Manual policy spreading steals your team's most productive weeks. Senior brokers become copy-paste operators while renewal deadlines pile up.",
    stat: "40 hrs per renewal",
    theme: {
      accent: "#3B82F6", // blue-500
      bg: "bg-blue-50",
      text: "text-blue-700",
      radial: "from-blue-50/40"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "The E&O Nightmare",
    body: "Every manual keystroke is a transcription risk. One error in a 200-page PDF becomes a multi-million dollar claim exposure.",
    stat: "High Risk Error",
    theme: {
      accent: "#EF4444", // red-500
      bg: "bg-red-50",
      text: "text-red-700",
      radial: "from-red-50/40"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Format Chaos",
    body: "Unstructured HR census dumps and inconsistent carrier PDFs make true like-for-like comparison nearly impossible for your team.",
    stat: "Inconsistent Data",
    theme: {
      accent: "#6366F1", // indigo-500
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      radial: "from-indigo-50/40"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Margin Compression",
    body: "Rising talent costs and shrinking commissions create a hard ceiling on your firm's ability to scale or grow profitably.",
    stat: "18 weeks lost/year",
    theme: {
      accent: "#F59E0B", // amber-500
      bg: "bg-amber-50",
      text: "text-amber-700",
      radial: "from-amber-50/40"
    },
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
];

export default function PainSection() {
  return (
    <section id="problem" className="bg-slate-50/50 pt-32 pb-16 sm:pt-48 sm:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-4 text-blue-600">
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
          >
            Your Best People Are <br className="hidden sm:block" /> Doing Data Entry
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">
            The modern benefits renewal process was designed for a world that no longer exists. The tools have not caught up, leading to margin compression across the industry.
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
              key={point.title}
              variants={cardReveal}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div 
                className="h-full bg-white rounded-[2.5rem] p-10 flex flex-col items-start text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative"
                style={{ borderTop: `4px solid ${point.theme.accent}` }}
              >
                {/* Subtle Radial Gradient */}
                <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-radial ${point.theme.radial} to-transparent opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10 w-full flex flex-col h-full">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className={`w-14 h-14 rounded-2xl ${point.theme.bg} flex items-center justify-center ${point.theme.text} mb-10 shadow-sm border border-slate-100 transition-transform`}
                  >
                    {point.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                    {point.title}
                  </h3>
                  
                  <p className="text-base text-slate-700 leading-relaxed mb-10 flex-grow">
                    {point.body}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-100 w-full">
                    <Badge className={`${point.theme.bg} ${point.theme.text} hover:${point.theme.bg} border-none text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl`}>
                      {point.stat}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
