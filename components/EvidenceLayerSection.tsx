"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

export default function EvidenceLayerSection() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-32 sm:py-48 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Floating UI Nodes (Trust Keith style) */}
          <motion.div 
            className="relative h-[500px] w-full hidden sm:block"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Decorative background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Node 1: Carrier PDF */}
            <motion.div 
              variants={fadeUp}
              className="absolute top-10 left-0 w-64 bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-5 shadow-2xl z-10"
            >
              <div className="flex items-center gap-3 border-b border-slate-700 pb-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-[10px] font-bold">PDF</div>
                <div className="text-sm font-semibold text-slate-200">BCBS_Master.pdf</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-2 bg-slate-700 rounded" />
                <div className="w-3/4 h-2 bg-slate-700 rounded" />
                <div className="w-full h-5 bg-blue-500/20 rounded mt-4 relative border border-blue-500/50 flex items-center px-2">
                  <div className="absolute -right-2 top-1 w-3 h-3 rounded-full border-2 border-blue-400 bg-slate-900" />
                  <span className="text-[8px] text-blue-300 font-bold tracking-widest uppercase">$2,500 Limit</span>
                </div>
                <div className="w-1/2 h-2 bg-slate-700 rounded" />
              </div>
            </motion.div>

            {/* Connecting Line (SVG) */}
            <svg className="absolute inset-0 w-full h-full -z-10" style={{ overflow: "visible" }}>
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                d="M 256 160 C 350 160, 200 360, 360 360" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
            </svg>

            {/* Node 2: Extracted Data */}
            <motion.div 
              variants={fadeUp}
              className="absolute bottom-10 right-0 w-72 bg-white rounded-xl p-5 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10 text-slate-900"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
                 <div className="text-sm font-bold">Output Schema</div>
                 <div className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase tracking-wide">Verified</div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">In-Network Deductible</span>
                  <span className="text-sm font-semibold">$2,500</span>
                </div>
                {/* Linked Field */}
                <div className="flex justify-between items-center bg-blue-50 p-2 rounded-lg border border-blue-100 relative shadow-inner">
                  <div className="absolute -left-1.5 top-1/2 -mt-1.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-white" />
                  <span className="text-xs font-semibold text-blue-800">Out-of-Network Limit</span>
                  <span className="text-sm font-bold text-blue-900">$5,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">Coinsurance</span>
                  <span className="text-sm font-semibold">80%</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Right: Copy (Trust Keith style) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p variants={fadeUp} className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
              The Evidence Layer
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Operationalise <span className="text-blue-400 font-serif italic">accuracy</span> at scale.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed mb-10">
              You don’t need to double-check the AI's work to trust it. BrokerBird builds an Evidence Layer into every extraction, guaranteeing E&O protection by linking every single data point directly back to the exact clause in the source PDF.
            </motion.p>

            {/* Tag Pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
              {[
                "Inline Citations", 
                "Click-to-Verify", 
                "E&O Risk Mitigation", 
                "Audit Trails"
              ].map((tag) => (
                <div key={tag} className="px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-sm font-medium text-slate-300">
                  {tag}
                </div>
              ))}
            </motion.div>

            {/* Inline Testimonial */}
            <motion.div variants={fadeUp} className="border-t border-slate-800 pt-8 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-700 flex-shrink-0 flex items-center justify-center text-slate-500 font-bold">
                "
              </div>
              <div>
                <p className="text-slate-300 italic leading-relaxed mb-3">
                  "The citation layer was the game-changer. I can show every client exactly where the data came from. No more guesswork."
                </p>
                <p className="text-sm font-semibold text-white">Head of Renewals</p>
                <p className="text-sm text-slate-500">Top 10 US Brokerage</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
