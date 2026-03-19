"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const featuresData = [
  {
    id: "ai-renewals",
    pill: "01 · AI Renewals Engine",
    pillColor: "bg-orange-100 text-orange-700",
    title: "3-minute policy extraction",
    description: "Upload any carrier PDF. AI extracts all limits, exclusions, deductibles, and conditions into a structured, comparable format in under 3 minutes.",
    graphicBg: "from-amber-100 via-orange-50 to-rose-100",
    Graphic: () => (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }} 
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, default: { duration: 0.3 } }}
        className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-card shadow-soft border border-white/50 border-t-[3px] border-t-orange-400 p-6 opacity-95 relative"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <div className="w-24 h-4 bg-slate-200 rounded" />
            <div className="w-12 h-4 bg-slate-100 rounded" />
          </div>
          {[1, 2, 3].map(i => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-orange-100" />
                <div className="w-32 h-3 bg-slate-200 rounded" />
              </div>
              <div className="w-16 h-3 bg-slate-100 rounded" />
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -right-6 top-24 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> AI Agent Extracted
        </motion.div>
      </motion.div>
    )
  },
  {
    id: "claims",
    pill: "02 · Claims Analytics",
    pillColor: "bg-teal-100 text-teal-800",
    title: "Turn raw data into strategy",
    description: "Transform raw claims exports into loss ratios, top diagnoses, and health program insights — the strategic counsel that makes you indispensable to HR clients.",
    graphicBg: "from-emerald-50 via-teal-50 to-cyan-100",
    Graphic: () => (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }} 
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, default: { duration: 0.3 } }}
        className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-card shadow-soft border border-white/50 border-t-[3px] border-t-teal-400 p-6 flex flex-col gap-6 relative"
      >
        <div className="flex items-end gap-3 h-32 border-b border-slate-100 pb-2">
          {[40, 70, 45, 90, 60, 85].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }} 
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex-1 bg-teal-200 rounded-t-sm hover:bg-teal-400 transition-colors"
            />
          ))}
        </div>
        <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-4 border border-slate-100">
           <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white shadow-sm" />
           <div>
             <div className="w-20 h-3 bg-slate-200 rounded mb-2" />
             <div className="w-32 h-2 bg-slate-100 rounded" />
           </div>
        </div>
      </motion.div>
    )
  },
  {
    id: "census",
    pill: "03 · Census Transformation",
    pillColor: "bg-indigo-100 text-indigo-700",
    title: "Carrier-ready in minutes",
    description: "Auto-map messy HR employee lists into any carrier format. Eliminate the 20% gap rate and the 2-day reconciliation cycle that kills your timeline.",
    graphicBg: "from-indigo-50 via-blue-50 to-violet-100",
    Graphic: () => (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [-4, 6, -4] }} 
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }, default: { duration: 0.3 } }}
        className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-card shadow-soft border border-white/50 border-t-[3px] border-t-indigo-400 p-6 relative"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="px-3 py-1 bg-slate-100 rounded-md text-[10px] font-bold text-slate-500 uppercase">Raw Upload</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-[10px] font-bold uppercase">Carrier Format</div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="w-16 h-2 bg-slate-300 rounded" />
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "2rem" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-0.5 bg-indigo-200"
              />
              <div className="w-16 h-2 bg-indigo-300 rounded" />
            </div>
          ))}
        </div>
      </motion.div>
    )
  },
  {
    id: "evidence",
    pill: "04 · The Evidence Layer",
    pillColor: "bg-slate-100 text-slate-700",
    title: "Operationalise accuracy at scale",
    description: "You don't need to double-check the AI's work to trust it. BrokerBird builds an Evidence Layer into every extraction, guaranteeing E&O protection by linking every single data point directly back to the source document.",
    graphicBg: "from-slate-900 to-blue-950",
    Graphic: () => (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [5, -5, 5] }} 
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ y: { repeat: Infinity, duration: 5, ease: "easeInOut" }, default: { duration: 0.3 } }}
        className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-card shadow-2xl border border-white/20 border-t-[3px] border-t-blue-400 p-6 flex flex-col gap-4 relative"
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-2">
           <div className="text-sm font-bold text-white">Extracted Output</div>
           <div className="px-2 py-0.5 bg-green-500/20 text-green-300 text-[10px] font-bold rounded uppercase tracking-wide">Verified</div>
        </div>
        <div className="flex justify-between items-center bg-blue-500/20 p-3 rounded-lg border border-blue-400/30 relative">
          <div className="absolute -left-2 top-1/2 -mt-1.5 w-3 h-3 rounded-full border-2 border-blue-400 bg-slate-900" />
          <span className="text-xs font-semibold text-blue-200">Out-of-Network Limit</span>
          <span className="text-sm font-bold text-white">$5,000</span>
        </div>
        <svg className="absolute -left-8 top-1/2 w-8 h-12 hidden sm:block" style={{ overflow: "visible" }}>
          <path d="M 0 48 C 16 48, 16 0, 32 0" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="3 3"/>
        </svg>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -left-4 sm:-left-8 -top-8 bg-slate-800 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-slate-700 w-48 z-20"
        >
          <div className="text-[10px] text-slate-400 mb-1">Source PDF: Page 47</div>
          <div className="h-2 w-full bg-slate-700 rounded mb-1.5"/>
          <div className="h-2 w-3/4 bg-blue-500/50 rounded"/>
        </motion.div>
      </motion.div>
    )
  }
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="bg-white pt-24 pb-32 sm:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-24 max-w-3xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-4">
            The Solution
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            From Analog Grind to
            <br className="hidden sm:block" />
            <span className="text-slate-400 font-medium tracking-normal">
              Digital Workflow
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-xl text-slate-500 leading-relaxed mx-auto">
            One platform that handles every step of the renewal cycle, transforming raw documents into strategic insights.
          </motion.p>
        </motion.div>

        {/* Dropbox Sign-style Accordion Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Accordion Menu */}
          <div className="flex flex-col border-t border-slate-200">
            {featuresData.map((feature, idx) => {
              const isActive = activeFeature === idx;
              return (
                <div 
                  key={feature.id}
                  className="border-b border-slate-200 relative"
                >
                  <button
                    onClick={() => setActiveFeature(idx)}
                    className="w-full text-left py-8 flex items-center justify-between group focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex flex-col items-start gap-4 pr-8">
                      {isActive && (
                        <motion.div 
                          layoutId="activePill"
                          className={`inline-flex items-center justify-center px-3 py-1 ${feature.pillColor} font-semibold text-[10px] tracking-wider uppercase rounded-full`}
                        >
                          {feature.pill}
                        </motion.div>
                      )}
                      
                      <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Chevron */}
                    <motion.div 
                      animate={{ rotate: isActive ? 180 : 0 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:bg-slate-50'}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </button>
                  
                  {/* Expanded Body Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg text-slate-600 leading-relaxed pb-8 pr-0 lg:pr-12">
                          {feature.description}
                        </p>
                        
                        {/* Mobile graphic display */}
                        <div className="block lg:hidden w-full aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] bg-slate-50 relative mb-8">
                          <div className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 bg-gradient-to-br ${feature.graphicBg}`}>
                            {(() => {
                              const Graphic = feature.Graphic;
                              return <Graphic />;
                            })()}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Graphic Window (Desktop only) */}
          <div className="hidden lg:block w-full lg:h-full rounded-3xl overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] bg-slate-50 relative">
            <AnimatePresence mode="popLayout">
              {featuresData.map((feature, idx) => {
                if (activeFeature !== idx) return null;
                const Graphic = feature.Graphic;
                return (
                  <motion.div 
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 sm:p-12 bg-gradient-to-br ${feature.graphicBg}`}
                  >
                    <Graphic />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
