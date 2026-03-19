"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

export default function MidCTASection() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Ready to reclaim <span className="text-blue-400">18 weeks</span> per year?
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join the leading brokerages using BrokerBird to eliminate manual data entry, prevent errors, and deliver strategic insights faster than ever.
          </motion.p>
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Transform Your Workflow
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
