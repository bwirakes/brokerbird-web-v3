"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

/* ── Step 1: Census ── */
const CensusUI = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-6 relative group">
    <div className="absolute inset-4 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 opacity-50 transition-all group-hover:bg-white group-hover:opacity-100" />
    <motion.div 
      animate={{ y: [0, -6, 0] }} 
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      className="relative z-10 flex flex-col items-center"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-10 h-14 bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col items-center justify-center">
          <div className="w-5 h-0.5 bg-green-200 rounded-full mb-1" />
          <div className="w-6 h-0.5 bg-slate-100 rounded-full mb-1" />
          <div className="w-6 h-0.5 bg-slate-100 rounded-full" />
          <div className="mt-1 bg-green-50 text-green-600 text-[6px] font-bold px-1 py-0.5 rounded">XLS</div>
        </div>
        <svg width="20" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" className="self-center">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        <div className="w-10 h-14 bg-white rounded-lg shadow-sm border border-teal-200 flex flex-col items-center justify-center">
          <div className="w-5 h-0.5 bg-teal-200 rounded-full mb-1" />
          <div className="w-6 h-0.5 bg-teal-100 rounded-full mb-1" />
          <div className="w-6 h-0.5 bg-teal-100 rounded-full" />
          <div className="mt-1 bg-teal-50 text-teal-600 text-[6px] font-bold px-1 py-0.5 rounded">CLEAN</div>
        </div>
      </div>
    </motion.div>
    <p className="text-[10px] sm:text-xs font-medium text-slate-500 z-10">Messy HR dump → Carrier-ready</p>
  </div>
);

/* ── Step 2: Renewals ── */
const RenewalsUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-[2rem] border border-slate-200 p-6 flex flex-col justify-center gap-3 transition-all">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
      <div className="text-[10px] sm:text-xs font-semibold text-blue-600">Extracting 50+ fields...</div>
    </div>
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col gap-1 sm:gap-1.5 bg-white p-2 sm:p-3 rounded-lg border border-slate-100 shadow-sm">
        <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-slate-200 rounded" />
        <motion.div 
          initial={{ width: "0%" }} 
          whileInView={{ width: i === 1 ? "80%" : i === 2 ? "60%" : "40%" }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          className="h-1.5 sm:h-2 bg-blue-100 rounded" 
        />
      </div>
    ))}
    <div className="mt-1 flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      <div className="text-[8px] sm:text-[10px] font-medium text-amber-600">⚠ Flagged: Suspiciously low quote</div>
    </div>
  </div>
);

/* ── Step 3: Plan Design ── */
const PlanDesignUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-[2rem] border border-slate-200 p-6 flex flex-col justify-center relative transition-all">
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 mb-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-indigo-300" />
        </div>
        <div className="w-20 h-2 bg-slate-200 rounded" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-14 sm:h-16 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-indigo-50 border border-indigo-100" />
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="px-2 py-1 bg-indigo-100 text-indigo-700 text-[8px] sm:text-[10px] font-bold rounded uppercase">PPTX Ready</div>
      <div className="px-2 py-1 bg-slate-100 text-slate-500 text-[8px] sm:text-[10px] font-bold rounded uppercase">Branded</div>
    </div>
  </div>
);

/* ── Step 4: Claims ── */
const ClaimsUI = () => (
  <div className="w-full h-full bg-slate-50/40 rounded-[2rem] border border-slate-200 p-6 flex flex-col justify-center relative transition-all">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full bg-green-500" />
      <div className="text-[10px] sm:text-xs font-semibold text-green-700">Audit Trail Verified</div>
    </div>
    <div className="flex flex-col gap-2">
      {["Loss Ratio: 67%", "Top DX: MSK", "Flagged: Denied"].map((label, i) => (
        <div key={i} className="flex justify-between items-center bg-white p-2.5 rounded-lg border border-slate-100 shadow-sm">
          <div className="text-[10px] sm:text-xs font-medium text-slate-700">{label}</div>
          <div className={`px-1.5 py-0.5 text-[7px] sm:text-[9px] font-bold rounded uppercase ${i === 2 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
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
      accent: "#14B8A6", // teal-500
      bg: "bg-teal-50",
      text: "text-teal-700",
      radial: "from-teal-50/40"
    }
  },
  {
    title: "Extract & compare renewals",
    body: "AI extracts 50+ elements from any carrier PDF with inline citations — and flags suspiciously cheap quotes.",
    ui: <RenewalsUI />,
    theme: {
      accent: "#3B82F6", // blue-500
      bg: "bg-blue-50",
      text: "text-blue-700",
      radial: "from-blue-50/40"
    }
  },
  {
    title: "Design & present plans",
    body: "Generate print-ready, branded PowerPoint presentations. No more spreadsheet outsourcing.",
    ui: <PlanDesignUI />,
    theme: {
      accent: "#6366F1", // indigo-500
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      radial: "from-indigo-50/40"
    }
  },
  {
    title: "Advocate on claims",
    body: "Build verifiable audit trails with loss ratios and top diagnoses to win complex claims against unresponsive TPAs.",
    ui: <ClaimsUI />,
    theme: {
      accent: "#F59E0B", // amber-500
      bg: "bg-amber-50",
      text: "text-amber-700",
      radial: "from-amber-50/40"
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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={cardReveal} 
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div 
                className="h-full bg-white rounded-card p-8 sm:p-10 flex flex-col items-center text-center shadow-soft group-hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 min-h-[420px] overflow-hidden relative"
                style={{ borderTop: `4px solid ${step.theme.accent}` }}
              >
                {/* Subtle Radial Gradient */}
                <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-radial ${step.theme.radial} to-transparent opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div className="relative z-10 w-full flex flex-col h-full">
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center px-2.5 py-1 ${step.theme.bg} ${step.theme.text} font-bold text-[10px] tracking-wider uppercase rounded-full mb-4`}>
                      0{i + 1}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[280px] mx-auto">{step.body}</p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex-grow flex items-center justify-center overflow-hidden transition-transform"
                  >
                    {step.ui}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
