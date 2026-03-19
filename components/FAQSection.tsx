"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const faqs = [
  {
    value: "faq-0",
    q: "Is the AI accurate enough to trust with E&O-sensitive work?",
    a: "Yes — and the Evidence Layer is specifically designed to answer this concern. Every field BrokerBird extracts is annotated with an inline citation linking back to the exact page and clause in the source PDF. Your team can click any value to verify it independently. This is not a 'trust the AI' system — it is a verified evidence trail.",
  },
  {
    value: "faq-1",
    q: "How does BrokerBird handle different carrier PDF formats?",
    a: "Our extraction engine is format-agnostic. It has been trained on hundreds of carrier-specific document layouts across APAC and US markets. Whether your carrier uses a 3-column table or a dense plain-text policy schedule, BrokerBird maps it to the same structured output.",
  },
  {
    value: "faq-2",
    q: "Does it integrate with Applied Epic, Vertafore, or other AMS platforms?",
    a: "We are actively building integrations with major AMS platforms. Today, BrokerBird works as a standalone layer that outputs structured data you can import into your existing systems. API integrations are on the roadmap for enterprise accounts.",
  },
  {
    value: "faq-3",
    q: "What separates BrokerBird from PlanYear, generic LLM tools, or other AI assistants?",
    a: "Generic LLM tools guess. BrokerBird cites. The Evidence Layer — our core differentiator — gives you a verifiable source for every field, making it appropriate for E&O-sensitive renewal work. PlanYear and similar tools are built for individual employees, not multi-carrier broker workflows.",
  },
  {
    value: "faq-4",
    q: "How long does onboarding take?",
    a: "Most teams are running a first renewal within 30 minutes of access. There is no implementation project, no dedicated IT resource, and no data migration. Upload a document and see it work.",
  },
  {
    value: "faq-5",
    q: "Is my clients' data secure?",
    a: "Yes. All census data, carrier PDFs, and claims files are encrypted at rest and in transit. We do not use your clients' data to train our models. Data retention policies are configurable per account.",
  },
];

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5 }}
        >
          <Accordion className="rounded-xl border border-slate-200 px-2 overflow-hidden">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className={i < faqs.length - 1 ? "border-b border-slate-200" : "border-0"}
              >
                <AccordionTrigger
                  id={`faq-trigger-${i}`}
                  className="text-sm font-semibold text-slate-900 hover:text-blue-600 hover:no-underline py-5 text-left data-[state=open]:text-blue-600"
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-500 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
