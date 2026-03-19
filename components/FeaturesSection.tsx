"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white pt-24 pb-32 sm:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="mb-24 lg:mb-32 max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">
            The Solution
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
            From Analog Grind to <br className="hidden sm:block" /> Digital Workflow
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-xl text-slate-500 leading-relaxed">
            One platform that handles every step of the renewal cycle, transforming raw documents into strategic insights.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {/* Feature 1: AI Renewals Engine */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-orange-100 text-orange-700 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
                  01 · AI Renewals Engine
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  3-minute policy extraction
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Upload any carrier PDF. AI extracts all limits, exclusions, deductibles, and conditions into a structured, comparable format in <strong>under 3 minutes</strong>.
                </p>
              </motion.div>
            </div>
            <motion.div 
              variants={fadeUp}
              className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 p-8 sm:p-12 flex items-center justify-center"
            >
              {/* Abstract Floating UI */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 opacity-95"
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
                {/* Floating tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-6 top-24 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xl flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> AI Agent Extracted
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Feature 2: Claims Analytics */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeUp}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-8 sm:p-12 flex items-center justify-center"
            >
              {/* Abstract Floating UI */}
              <motion.div 
                animate={{ y: [5, -5, 5] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 flex flex-col gap-6"
              >
                <div className="flex items-end gap-3 h-32 border-b border-slate-100 pb-2">
                  {[40, 70, 45, 90, 60, 85].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }} 
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="flex-1 bg-teal-200 rounded-t-sm hover:bg-teal-400 transition-colors"
                    />
                  ))}
                </div>
                <div className="bg-slate-50 rounded-xl p-4 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-teal-100 border-2 border-white shadow-sm" />
                   <div>
                     <div className="w-20 h-3 bg-slate-200 rounded mb-2" />
                     <div className="w-32 h-2 bg-slate-100 rounded" />
                   </div>
                </div>
              </motion.div>
            </motion.div>
            <div>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-teal-100 text-teal-800 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
                  02 · Claims Analytics
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Turn raw data into strategy
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Transform raw claims exports into <strong>loss ratios</strong>, <strong>top diagnoses</strong>, and health program insights — the strategic counsel that makes you indispensable to HR clients.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature 3: Census Transformation */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="order-2 lg:order-1">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-indigo-100 text-indigo-700 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
                  03 · Census Transformation
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Carrier-ready in minutes
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Auto-map messy HR employee lists into any carrier format. Eliminate the <strong>20% gap rate</strong> and the <strong>2-day reconciliation cycle</strong> that kills your timeline.
                </p>
              </motion.div>
            </div>
            <motion.div 
              variants={fadeUp}
               className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-violet-100 p-8 sm:p-12 flex items-center justify-center"
            >
               {/* Abstract Floating UI */}
               <motion.div 
                animate={{ y: [-4, 6, -4] }} 
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6"
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
                        whileInView={{ width: "2rem" }}
                        className="h-0.5 bg-indigo-200"
                      />
                      <div className="w-16 h-2 bg-indigo-300 rounded" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>


          {/* Feature 4: The Evidence Layer */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              variants={fadeUp}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 p-8 sm:p-12 flex items-center justify-center"
            >
              {/* Abstract Floating UI for Evidence Layer */}
              <motion.div 
                animate={{ y: [5, -5, 5] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col gap-4 relative"
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
                {/* Connecting Line */}
                <svg className="absolute -left-8 top-1/2 w-8 h-12 hidden sm:block" style={{ overflow: "visible" }}>
                  <path d="M 0 48 C 16 48, 16 0, 32 0" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="3 3"/>
                </svg>
                {/* PDF Source tooltip - Moved to Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -left-4 sm:-left-8 -top-8 bg-slate-800 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-slate-700 w-48 z-20"
                >
                  <div className="text-[10px] text-slate-400 mb-1">Source PDF: Page 47</div>
                  <div className="h-2 w-full bg-slate-700 rounded mb-1.5"/>
                  <div className="h-2 w-3/4 bg-blue-500/50 rounded"/>
                </motion.div>
              </motion.div>
            </motion.div>
            <div>
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center justify-center px-3 py-1 bg-slate-100 text-slate-700 font-semibold text-xs tracking-wider uppercase rounded-full mb-6">
                  04 · The Evidence Layer
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                  Operationalise accuracy at scale
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  You don’t need to double-check the AI's work to trust it. BrokerBird builds an <strong>Evidence Layer</strong> into every extraction, guaranteeing E&O protection by linking every single data point directly back to the source document.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
