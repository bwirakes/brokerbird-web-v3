"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const UploadUI = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-6 relative group">
    <div className="absolute inset-4 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 opacity-50 transition-all group-hover:bg-white group-hover:opacity-100" />
    <motion.div 
      animate={{ y: [0, -6, 0] }} 
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="w-12 h-16 sm:w-14 sm:h-20 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center mb-3 relative z-10"
    >
      <div className="w-5 h-0.5 sm:h-1 bg-red-100 rounded-full mb-1.5 sm:mb-2" />
      <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-slate-100 rounded-full mb-1 sm:mb-1.5" />
      <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-slate-100 rounded-full mb-1 sm:mb-1.5" />
      <div className="w-4 sm:w-5 h-0.5 sm:h-1 bg-slate-100 rounded-full" />
      <div className="absolute bottom-1 sm:bottom-2 bg-red-50 text-red-600 text-[6px] sm:text-[8px] font-bold px-1 sm:px-1.5 py-0.5 rounded">
        PDF
      </div>
    </motion.div>
    <p className="text-[10px] sm:text-xs font-medium text-slate-500 z-10">Drag & drop files</p>
    <p className="text-[8px] sm:text-[10px] text-slate-400 mt-0.5 z-10">.pdf, .docx, .xlsx</p>
  </div>
);

const ExtractUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-[2rem] border border-slate-200 p-6 flex flex-col justify-center gap-3 transition-all">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
      <div className="text-[10px] sm:text-xs font-semibold text-blue-600">Extracting 142 fields...</div>
    </div>
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col gap-1 sm:gap-1.5 bg-white p-2 sm:p-3 rounded-lg border border-slate-100 shadow-sm">
        <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-slate-200 rounded" />
        <motion.div 
          initial={{ width: "0%" }} 
          whileInView={{ width: i === 1 ? "80%" : i === 2 ? "60%" : "40%" }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          className="h-1.5 sm:h-2 bg-blue-100 rounded" 
        />
      </div>
    ))}
  </div>
);

const CompareUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-[2rem] border border-slate-200 p-6 flex flex-col justify-center relative transition-all">
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-slate-200" />
        <div className="w-10 sm:w-12 h-1.5 sm:h-2 bg-slate-300 rounded" />
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-indigo-200" />
        <div className="w-10 sm:w-12 h-1.5 sm:h-2 bg-indigo-300 rounded" />
      </div>
    </div>
    
    <div className="flex flex-col gap-1.5 sm:gap-2.5">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg border border-slate-100 shadow-sm text-[10px] sm:text-xs font-medium text-slate-700">$10,000</div>
        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg border border-slate-100 shadow-sm text-[10px] sm:text-xs font-medium text-slate-700">$15,000</div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 relative">
        <div className="absolute -left-1.5 sm:-left-2 top-1 sm:top-2 bottom-1 sm:bottom-2 w-[2px] bg-blue-500 rounded-full" />
        <div className="bg-blue-50 p-1.5 sm:p-2.5 rounded-lg border border-blue-100 text-[10px] sm:text-xs font-medium text-blue-800">Included</div>
        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg border border-slate-100 shadow-sm text-[10px] sm:text-xs font-medium text-slate-400 line-through">Excluded</div>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg border border-slate-100 shadow-sm text-[10px] sm:text-xs font-medium text-slate-700">100%</div>
        <div className="bg-white p-1.5 sm:p-2.5 rounded-lg border border-slate-100 shadow-sm text-[10px] sm:text-xs font-medium text-slate-700">80%</div>
      </div>
    </div>
  </div>
);

const steps = [
  {
    title: "Connect documents",
    body: "Drop in any PDF or HR census file. Integrations built-in.",
    ui: <UploadUI />,
    theme: {
      accent: "#3B82F6", // blue-500
      bg: "bg-blue-50",
      text: "text-blue-700",
      radial: "from-blue-50/40"
    }
  },
  {
    title: "AI gets to work",
    body: "BrokerBird extracts complex fields with inline citations instantly.",
    ui: <ExtractUI />,
    theme: {
      accent: "#6366F1", // indigo-500
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      radial: "from-indigo-50/40"
    }
  },
  {
    title: "Compare & present",
    body: "What used to take 40 hours is now a perfect 30-minute side-by-side.",
    ui: <CompareUI />,
    theme: {
      accent: "#F59E0B", // amber-500
      bg: "bg-amber-50",
      text: "text-amber-700",
      radial: "from-amber-50/40"
    }
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-32 sm:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center md:text-left mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-4 text-center md:text-left">
            HOW IT WORKS
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
          >
            Automation for mission-critical operations
            <br className="hidden sm:block" />
            <span className="text-slate-400 font-medium">
              Innovate your workflow from the ground up
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={cardReveal} 
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div 
                className="h-full bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 min-h-[480px] overflow-hidden relative"
                style={{ borderTop: `4px solid ${step.theme.accent}` }}
              >
                {/* Subtle Radial Gradient */}
                <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-radial ${step.theme.radial} to-transparent opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10 w-full flex flex-col h-full">
                  <div className="mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[280px] mx-auto">{step.body}</p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex-grow flex items-center justify-center overflow-hidden transition-transform"
                  >
                    {step.ui}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

