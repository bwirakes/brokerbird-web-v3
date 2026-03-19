"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const faqs = [
  {
    q: "Is the AI accurate enough to trust with E&O-sensitive work?",
    a: "Yes — and the Evidence Layer is specifically designed to answer this concern. Every field BrokerBird extracts is annotated with an inline citation linking back to the exact page and clause in the source PDF. Your team can click any value to verify it independently. This is not a 'trust the AI' system — it is a verified evidence trail.",
  },
  {
    q: "How does BrokerBird handle different carrier PDF formats?",
    a: "Our extraction engine is format-agnostic. It has been trained on hundreds of carrier-specific document layouts across APAC and US markets. Whether your carrier uses a 3-column table or a dense plain-text policy schedule, BrokerBird maps it to the same structured output.",
  },
  {
    q: "Does it integrate with Applied Epic, Vertafore, or other AMS platforms?",
    a: "We are actively building integrations with major AMS platforms. Today, BrokerBird works as a standalone layer that outputs structured data you can import into your existing systems. API integrations are on the roadmap for enterprise accounts.",
  },
  {
    q: "What separates BrokerBird from PlanYear, generic LLM tools, or other AI assistants?",
    a: "Generic LLM tools guess. BrokerBird cites. The Evidence Layer — our core differentiator — gives you a verifiable source for every field, making it appropriate for E&O-sensitive renewal work. PlanYear and similar tools are built for individual employees, not multi-carrier broker workflows.",
  },
  {
    q: "How long does onboarding take?",
    a: "Most teams are running a first renewal within 30 minutes of access. There is no implementation project, no dedicated IT resource, and no data migration. Upload a document and see it work.",
  },
  {
    q: "Is my clients' data secure?",
    a: "Yes. All census data, carrier PDFs, and claims files are encrypted at rest and in transit. We do not use your clients' data to train our models. Data retention policies are configurable per account for compliance with your own client data agreements.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        id={`faq-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center transition-all ${
            open ? "bg-blue-600 border-blue-600" : "bg-white"
          }`}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path
              d="M1 3l4 4 4-4"
              stroke={open ? "white" : "#64748B"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-3">
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Questions Brokers Actually Ask
          </motion.h2>
        </motion.div>

        <motion.div
          className="rounded-xl border border-slate-200 divide-y divide-slate-200 px-6 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
