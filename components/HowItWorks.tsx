"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const steps = [
  {
    num: "01",
    title: "Upload",
    body: "Drop in any carrier PDF, quote document, or HR census file — any format, any carrier. BrokerBird accepts everything.",
  },
  {
    num: "02",
    title: "Extract",
    body: "AI extracts every field with an inline citation pointing to the exact page, section, and clause in the source document. No black boxes.",
  },
  {
    num: "03",
    title: "Compare",
    body: "Side-by-side multi-carrier view, structured and ready to present to your HR client. What used to take 40 hours now takes 30 minutes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-3">
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Up and Running in Minutes
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            No 6-month implementation. No dedicated IT project. Just upload, extract, and compare.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[2.25rem] left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-slate-200" />

          {steps.map((step, i) => (
            <motion.div key={step.num} variants={cardReveal} className="relative">
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center mb-5 z-10 relative">
                  <span className="text-xs font-bold text-blue-600">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
