"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const stats = [
  { value: "30", unit: "min", label: "Full renewal cycle", sub: "Was 40 hours" },
  { value: "97", unit: "%", label: "Extraction accuracy", sub: "Evidence Layer verified" },
  { value: "30", unit: "wks", label: "Reclaimed per broker", sub: "Per year" },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p variants={fadeUp} className="text-center text-xs font-medium uppercase tracking-widest text-slate-500 mb-12">
          Outcomes that change your business model
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-slate-800">
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              className="text-center px-8"
            >
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-6xl font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-2xl font-semibold text-blue-400 mb-1">{stat.unit}</span>
              </div>
              <p className="text-base font-medium text-slate-300 mb-1">{stat.label}</p>
              <p className="text-sm text-slate-500">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
