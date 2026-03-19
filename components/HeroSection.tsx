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
          className="text-5xl sm:text-6xl lg:text-[80px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-10"
        >
          Your Team Is{" "}
          <span
            className="relative inline-block"
            style={{
              fontStyle: "italic",
              color: "#2563EB",
            }}
          >
            Wasting Days
          </span>{" "}
          Reading Policies.
          <br className="hidden sm:block" />
          <motion.span 
            className="text-slate-400 block mt-4 text-4xl sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            There Is a Better Way.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          BrokerBird turns your <strong>40-hour "employee benefit renewal" grind</strong> into a <strong>30-minute</strong> workflow — with <strong>97% extraction accuracy</strong>, backed by an <strong>inline citation</strong> for every single field.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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
