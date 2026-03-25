"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PricingFAQ() {
  const faqs = [
    {
      question: "What counts as a renewal?",
      answer: "One complete renewal cycle for one client, from policy ingestion through carrier comparison.",
    },
    {
      question: "What happens if I run out of AI credits?",
      answer: "Your workflows continue uninterrupted. Additional credit packs can be purchased anytime at transparent per-credit rates.",
    },
    {
      question: "Can I upgrade mid-year?",
      answer: "Yes, upgrade anytime. We'll prorate the difference for the remainder of your annual plan.",
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, Starter and Professional plans include a 14-day free trial with full feature access.",
    },
    {
      question: "Why annual pricing?",
      answer: "Renewals are cyclical. Monthly limits penalize brokers during their busiest months. Annual caps let you use capacity when you need it most.",
    },
    {
      question: "Is there a setup fee?",
      answer: "Starter and Professional plans have no setup fee. Enterprise includes dedicated onboarding for $5,000–$15,000 depending on scope.",
    },
    {
      question: "How does module add-on pricing work?",
      answer: "Add any module to your plan for a fixed monthly fee. Add 3 or more and receive a 15% bundle discount automatically.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
