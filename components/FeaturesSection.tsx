"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const supportingFeatures = [
  {
    num: "02",
    title: "AI Renewals Engine",
    sub: "3-minute policy extraction",
    body: "Upload any carrier PDF. AI extracts all limits, exclusions, deductibles, and conditions into a structured, comparable format in under 3 minutes.",
  },
  {
    num: "03",
    title: "Census Transformation",
    sub: "Carrier-ready in minutes",
    body: "Auto-map messy HR employee lists into any carrier format. Eliminate the 20% gap rate and the 2-day reconciliation cycle that kills your enrollment timeline.",
  },
  {
    num: "04",
    title: "Claims Analytics",
    sub: "Turn raw data into strategy",
    body: "Transform raw claims exports into loss ratios, top diagnoses, and health program insights — the strategic counsel that makes you indispensable to HR clients.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 border-y border-slate-200 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="overline mb-3">
            The Solution
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            From Analog Grind to Digital Workflow
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            One platform that handles every step of the renewal cycle — with an evidence trail built in by default.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Hero card — Evidence Layer: Full width */}
          <motion.div
            variants={cardReveal}
            className="lg:col-span-2 rounded-xl border border-blue-200 bg-blue-50 p-8 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium uppercase tracking-widest text-blue-600">01</span>
                <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] font-semibold uppercase tracking-wide rounded-md">
                  Key Differentiator
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">The Evidence Layer</h3>
              <p className="text-sm font-medium text-blue-600 mb-4">Every field. Every citation.</p>
              <p className="text-base text-slate-700 leading-relaxed mb-6">
                Unlike generic AI tools that hallucinate, BrokerBird builds an Evidence Layer into every extraction. Every data point shows an inline citation badge. Click any field — the source PDF opens to the exact page, section, and clause. Trust verified, not assumed. Your E&O protection, built in by default.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Inline citations", "Click-to-verify", "E&O safe", "Audit trail"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-blue-200 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Decorative citation badges */}
            <div className="absolute right-8 top-8 hidden lg:flex flex-col gap-2 opacity-70">
              {["p.47 §3.2 · Deductible", "p.12 §1.1 · Coverage", "p.89 §6.4 · Exclusion"].map((cite) => (
                <div
                  key={cite}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs font-medium text-blue-600 shadow-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {cite}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supporting feature cards */}
          {supportingFeatures.map((feature) => (
            <motion.div
              key={feature.num}
              variants={cardReveal}
              className="rounded-xl border border-slate-200 bg-white p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-blue-600 block mb-3">
                {feature.num}
              </span>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-sm font-medium text-slate-400 mb-3">{feature.sub}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
