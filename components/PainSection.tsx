"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const rows = [
  {
    label: "Time per renewal cycle",
    before: { value: "40 hours", bad: true },
    after: { value: "30 minutes", bar: 98 },
  },
  {
    label: "Junior broker ramp-up",
    before: { value: "2–4 years to train", bad: true },
    after: { value: "Productive from week 1", bar: 90 },
  },
  {
    label: "Data extraction accuracy",
    before: { value: "Manual transcription errors", bad: true },
    after: { value: "97% accuracy, every field cited", bar: 97 },
  },
  {
    label: "Commission environment",
    before: { value: "<2% commissions", bad: true },
    after: { value: "30 wks broker capacity recovered", bar: 80 },
  },
];

const BadRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-start justify-between gap-4 py-3 border-b border-slate-100 last:border-none">
    <div>
      <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-slate-800">{value}</p>
    </div>
    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-[10px]">✕</span>
  </div>
);

const GoodRow = ({ label, value, bar }: { label: string; value: string; bar: number }) => (
  <div className="py-3 border-b border-slate-100 last:border-none">
    <div className="flex items-start justify-between gap-4 mb-2">
      <div>
        <p className="text-xs text-slate-500 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-slate-800">{value}</p>
      </div>
      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-[10px]">✓</span>
    </div>
    <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${bar}%` }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

export default function PainSection() {
  return (
    <section id="problem" className="bg-slate-50 pt-32 pb-16 sm:pt-48 sm:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
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
            Your Best People Are{" "}
            <br className="hidden sm:block" />
            <span className="text-slate-400 font-medium tracking-normal block sm:inline">
              Doing Data Entry
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
            The modern benefits renewal process was designed for a world that no longer exists.
          </motion.p>
        </motion.div>

        {/* Comparison Panel */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* LEFT — Without BrokerBird */}
          <motion.div variants={fadeUp}>
            <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-soft overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-slate-100 bg-red-50/50">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-red-600">Without BrokerBird</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">The status quo</p>
              </div>
              <div className="px-6 py-4">
                {rows.map((r) => (
                  <BadRow key={r.label} label={r.label} value={r.before.value} />
                ))}
              </div>
              {/* buried issues box */}
              <div className="mx-6 mb-6 p-4 rounded-xl bg-red-50 border border-red-100">
                <p className="text-xs font-bold text-red-700 mb-2">Critical E&O risks buried in every deal</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Data Entry Errors", "E&O Exposure", "Slow Renewals", "Junior Burnout"].map(t => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-red-100 text-red-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CENTER — Mascot */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center py-8 lg:py-0 lg:self-center gap-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/brokerbird-mascot.svg"
                alt="BrokerBird mascot"
                width={100}
                height={100}
                className="drop-shadow-lg"
              />
            </motion.div>
            <div className="w-px h-12 bg-gradient-to-b from-slate-200 to-transparent hidden lg:block" />
          </motion.div>

          {/* RIGHT — With BrokerBird */}
          <motion.div variants={fadeUp}>
            <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-soft overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-slate-100 bg-blue-50/50">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">With BrokerBird</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">AI-native workflow</p>
              </div>
              <div className="px-6 py-4">
                {rows.map((r) => (
                  <GoodRow key={r.label} label={r.label} value={r.after.value} bar={r.after.bar} />
                ))}
              </div>
              {/* resolved box */}
              <div className="mx-6 mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs font-bold text-blue-700 mb-2">Every field verified, cited, and audit-ready</p>
                <div className="flex flex-wrap gap-1.5">
                  {["97% Accuracy", "Inline Citations", "SOC 2 Ready", "30 Wks Saved"].map(t => (
                    <span key={t} className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-100 text-blue-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
