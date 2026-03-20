"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

/* ── Step 1: Census ── */
const CensusUI = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8 relative group">
    <div className="absolute inset-4 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 opacity-50 transition-all group-hover:bg-white group-hover:opacity-100" />
    <motion.div 
      animate={{ y: [0, -6, 0] }} 
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="relative z-10 flex flex-col items-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-16 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center">
          <div className="w-6 h-0.5 bg-green-200 rounded-full mb-1" />
          <div className="w-7 h-0.5 bg-slate-100 rounded-full mb-1" />
          <div className="w-7 h-0.5 bg-slate-100 rounded-full" />
          <div className="mt-1.5 bg-green-50 text-green-600 text-[7px] font-bold px-1.5 py-0.5 rounded">XLS</div>
        </div>
        <svg width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" className="self-center">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <div className="w-12 h-16 bg-white rounded-lg shadow-sm border border-teal-200 flex flex-col items-center justify-center">
          <div className="w-6 h-0.5 bg-teal-200 rounded-full mb-1" />
          <div className="w-7 h-0.5 bg-teal-100 rounded-full mb-1" />
          <div className="w-7 h-0.5 bg-teal-100 rounded-full" />
          <div className="mt-1.5 bg-teal-50 text-teal-600 text-[7px] font-bold px-1.5 py-0.5 rounded">CLEAN</div>
        </div>
      </div>
    </motion.div>
    <p className="text-xs font-medium text-slate-500 z-10">Messy HR dump → Carrier-ready</p>
  </div>
);

/* ── Step 2: Renewals ── */
const RenewalsUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center gap-3 transition-all">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
      <div className="text-xs font-semibold text-blue-600">Extracting 50+ fields...</div>
    </div>
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col gap-1.5 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
        <div className="w-16 h-2 bg-slate-200 rounded" />
        <motion.div 
          initial={{ width: "0%" }} 
          whileInView={{ width: i === 1 ? "80%" : i === 2 ? "60%" : "40%" }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          className="h-2 bg-blue-100 rounded" 
        />
      </div>
    ))}
    <div className="mt-1 flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      <div className="text-[10px] font-medium text-amber-600">⚠ Flagged: Suspiciously low quote</div>
    </div>
  </div>
);

/* ── Step 3: Plan Design ── */
const PlanDesignUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center relative transition-all">
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 mb-3">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded bg-indigo-100 flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-sm bg-indigo-300" />
        </div>
        <div className="w-24 h-2.5 bg-slate-200 rounded" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-16 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100" />
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded uppercase">PPTX Ready</div>
      <div className="px-2.5 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Branded</div>
    </div>
  </div>
);

/* ── Step 4: Claims ── */
const ClaimsUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-center relative transition-all">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 rounded-full bg-green-500" />
      <div className="text-xs font-semibold text-green-700">Audit Trail Verified</div>
    </div>
    <div className="flex flex-col gap-2.5">
      {["Loss Ratio: 67%", "Top DX: MSK", "Flagged: Denied"].map((label, i) => (
        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
          <div className="text-xs font-medium text-slate-700">{label}</div>
          <div className={`px-2 py-0.5 text-[9px] font-bold rounded uppercase ${i === 2 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
            {i === 2 ? 'Action Req.' : 'Verified'}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const steps = [
  {
    title: "Reconcile census",
    body: "Drop in messy HR dumps. BrokerBird normalizes, validates, and maps to carrier-ready format instantly.",
    ui: <CensusUI />,
    theme: {
      accent: "#14B8A6",
      bg: "bg-teal-50",
      text: "text-teal-700",
      pill: "bg-teal-100 text-teal-800",
    }
  },
  {
    title: "Extract & compare renewals",
    body: "AI extracts 50+ elements from any carrier PDF with inline citations — and flags suspiciously cheap quotes.",
    ui: <RenewalsUI />,
    theme: {
      accent: "#3B82F6",
      bg: "bg-blue-50",
      text: "text-blue-700",
      pill: "bg-blue-100 text-blue-800",
    }
  },
  {
    title: "Design & present plans",
    body: "Generate print-ready, branded PowerPoint presentations. No more spreadsheet outsourcing.",
    ui: <PlanDesignUI />,
    theme: {
      accent: "#6366F1",
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      pill: "bg-indigo-100 text-indigo-800",
    }
  },
  {
    title: "Advocate on claims",
    body: "Build verifiable audit trails with loss ratios and top diagnoses to win complex claims against unresponsive TPAs.",
    ui: <ClaimsUI />,
    theme: {
      accent: "#F59E0B",
      bg: "bg-amber-50",
      text: "text-amber-700",
      pill: "bg-amber-100 text-amber-800",
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
            Four modules. One end-to-end platform.
            <br className="hidden sm:block" />
            <span className="text-slate-400 font-medium">
              From intake to advocacy.
            </span>
          </motion.h2>
        </motion.div>

        {/* Horizontal Stacked Cards */}
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <motion.div
                key={i}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-card shadow-soft overflow-hidden group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500`}
                  style={{ borderLeft: isReversed ? 'none' : `4px solid ${step.theme.accent}`, borderRight: isReversed ? `4px solid ${step.theme.accent}` : 'none' }}
                >
                  {/* Text side */}
                  <div className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className={`inline-flex items-center justify-center self-start px-3 py-1 ${step.theme.pill} font-bold text-[10px] tracking-wider uppercase rounded-full mb-6`}>
                      0{i + 1}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-md">
                      {step.body}
                    </p>
                  </div>

                  {/* UI Graphic side */}
                  <div className={`relative min-h-[280px] sm:min-h-[320px] ${step.theme.bg} ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
                      <div className="w-full max-w-sm">
                        {step.ui}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
