"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const painPoints = [
  {
    num: "01",
    title: "The 40-Hour Grind",
    body: "Manual policy spreading steals your team's most productive weeks. Senior brokers become copy-paste operators while renewal deadlines pile up.",
    stat: "Up to 40 hrs per client renewal cycle",
  },
  {
    num: "02",
    title: "The E&O Nightmare",
    body: "Every manual keystroke is a transcription risk. Misread a deductible, transpose a limit — one error in a 200-page PDF becomes a multi-million dollar claim.",
    stat: "One typo away from a catastrophic liability outcome",
  },
  {
    num: "03",
    title: "Format Chaos",
    body: "Unstructured HR census dumps. Wildly inconsistent carrier PDFs. No two documents look alike, making true like-for-like comparison nearly impossible.",
    stat: "No two carrier formats are alike",
  },
  {
    num: "04",
    title: "Margin Compression",
    body: "Rising talent costs, shrinking commissions, and years to train junior brokers creates a hard ceiling on your ability to scale or grow.",
    stat: "18 weeks of lost working capacity per year",
  },
];

export default function PainSection() {
  return (
    <section id="problem" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-3">
            The Problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight"
          >
            Your Best People Are Doing Data Entry
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto"
          >
            The modern benefits renewal process was designed for a world that no longer exists. The tools have not caught up.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.num}
              variants={cardReveal}
              className="group rounded-xl border border-slate-200 p-6 bg-white hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-blue-600">
                  {point.num}
                </span>
                <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-500 text-xs rounded-md font-medium leading-tight text-right max-w-[200px]">
                  {point.stat}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{point.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
