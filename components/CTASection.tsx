"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

export default function CTASection() {
  return (
    <section id="contact" className="bg-slate-900 py-24 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
          Ready to make the switch?
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Stop Settling for a Workflow{" "}
          <br className="hidden sm:block" />
          <span className="text-slate-400 font-medium tracking-normal block sm:inline">
            That Is Breaking Your Team.
          </span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg text-slate-400 mb-10 max-w-xl mx-auto"
        >
          Built by insurance people. For insurance people. Join the waitlist and be the first to see what your renewals look like when the evidence is built in.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="mailto:hello@brokerbird.com"
            id="cta-request-access"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Request Early Access
          </a>
          <a
            href="mailto:demo@brokerbird.com"
            id="cta-book-demo"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 text-base font-medium rounded-lg transition-all"
          >
            Book a 15-min Demo
          </a>
        </motion.div>
        <motion.p
          variants={fadeUp}
          className="mt-8 text-sm text-slate-600"
        >
          No sales pressure. No credit card. Just a 15-minute look at what 30-minute renewals feel like.
        </motion.p>
      </motion.div>
    </section>
  );
}
