"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-32 overflow-hidden bg-white">
      {/* Clean solid background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <motion.div
        className="max-w-4xl mx-auto px-6 text-center w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
        >
          From Census to Claims.
          <br />
          <span
            className="relative inline-block"
            style={{
              fontStyle: "italic",
              color: "#2563EB",
            }}
          >
            One Intelligent Platform.
          </span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-2xl sm:text-3xl lg:text-4xl text-slate-400 font-medium tracking-tight mb-10"
        >
          The Thinking Partner for Benefits Brokers.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          BrokerBird is your <strong>end-to-end intelligent thinking partner</strong> — from census reconciliation to claims advocacy — recovering <strong>18 weeks of broker capacity</strong> annually with verifiable, <strong>inline citations</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-16">
          <a
            href="#how-it-works"
            id="hero-watch-demo"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-base font-semibold rounded-lg transition-all hover:shadow-lg"
          >
            Watch a Demo
          </a>
          <a
            href="#features"
            id="hero-learn-more"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 text-base font-semibold rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            Learn More
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 text-base font-medium text-slate-500"
        >
          <div className="flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white -ml-3 first:-ml-0 overflow-hidden flex items-center justify-center text-sm font-bold text-slate-600 shadow-sm"
              >
                {["J", "M", "A", "R"][i - 1]}
              </div>
            ))}
          </div>
          <span className="leading-tight text-left">
            Trusted by leading teams <br className="hidden sm:block"/> at Broker A, Broker B &amp; Broker C
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
