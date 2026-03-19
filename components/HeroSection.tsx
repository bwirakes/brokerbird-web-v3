"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, scaleIn, staggerContainer, viewport } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Shimmer background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #FAFCFF 0%, #EFF6FF 30%, #FDFCFF 70%, #F8FAFC 100%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(to right, #2563EB 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        className="max-w-5xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            The AI-Native Decision Engine for Benefits Brokers
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-6"
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
          <span className="text-slate-400"> There Is a Better Way.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          BrokerBird turns your 40-hour renewal grind into a 30-minute workflow — with 97% extraction accuracy, backed by an inline citation for every single field.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <a
            href="#features"
            id="hero-learn-more"
            className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Learn More
          </a>
          <a
            href="#how-it-works"
            id="hero-watch-demo"
            className="w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-200 text-slate-700 text-base font-medium rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300"
          >
            Watch a Demo
            <span className="ml-2 text-slate-400">→</span>
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white -ml-2 first:-ml-0 overflow-hidden flex items-center justify-center text-xs font-semibold text-slate-500"
              >
                {["J", "M", "A", "R"][i - 1]}
              </div>
            ))}
          </div>
          <span>Trusted by benefits teams at Hilb, Howden &amp; Newstate Stenhouse</span>
          <span className="hidden sm:block text-slate-300">·</span>
          <span className="px-2.5 py-1 bg-green-50 text-green-700 border border-green-100 rounded-full text-xs font-medium">
            18 weeks reclaimed per broker per year
          </span>
        </motion.div>
      </motion.div>

      {/* Hero Product Image */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        viewport={viewport}
        className="relative mt-16 mx-6 max-w-5xl w-full"
      >
        <div
          className="rounded-2xl border border-slate-200 overflow-hidden"
          style={{ boxShadow: "0 25px 80px -10px rgba(37, 99, 235, 0.15), 0 8px 32px -8px rgba(0,0,0,0.12)" }}
        >
          <Image
            src="/hero-mockup.png"
            alt="BrokerBird carrier comparison dashboard showing policy data with inline citations"
            width={1200}
            height={750}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* Floating citation badge */}
        <div className="absolute -top-3 -right-3 sm:top-6 sm:right-6 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-blue-200 rounded-full shadow-lg text-xs font-medium text-blue-600">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 1a5 5 0 100 10A5 5 0 006 1zm.5 7.5h-1v-3h1v3zm0-4h-1v-1h1v1z"/>
          </svg>
          p.47 §3.2 — Evidence Layer
        </div>
      </motion.div>
    </section>
  );
}
