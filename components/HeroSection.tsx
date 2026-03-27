"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const docCards = [
  { title: "Renewal Form", color: "#EF4444", tag: "PDF", lines: [70, 90, 55] },
  { title: "Census Doc", color: "#F59E0B", tag: "XLS", lines: [80, 60, 75] },
  { title: "Policy Doc", color: "#3B82F6", tag: "PDF", lines: [65, 85, 50] },
  { title: "Proposal", color: "#8B5CF6", tag: "DOC", lines: [90, 55, 70] },
  { title: "Claims Report", color: "#10B981", tag: "CSV", lines: [75, 80, 60] },
  { title: "Benefits Grid", color: "#F97316", tag: "PDF", lines: [60, 95, 45] },
];

function DocCard({ title, color, tag, lines }: typeof docCards[0]) {
  return (
    <div
      className="relative shrink-0 w-[130px] rounded-xl bg-white border border-slate-200/80 shadow-soft overflow-hidden"
      style={{ height: 110 }}
    >
      {/* colored top bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5" style={{ background: color + "18" }}>
        <span className="text-[9px] font-bold tracking-wider" style={{ color }}>{title}</span>
        <span
          className="text-[8px] font-bold px-1.5 py-0.5 rounded"
          style={{ background: color, color: "white" }}
        >{tag}</span>
      </div>
      {/* content lines */}
      <div className="px-2.5 py-2 space-y-1.5">
        {lines.map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full bg-slate-100"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
      {/* bottom icon row */}
      <div className="absolute bottom-2 left-2.5 flex gap-1">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-3 h-3 rounded-sm bg-slate-100" />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [birdIndex, setBirdIndex] = useState(1);
  const controls = useAnimation();

  // Drift bird left→right across cards periodically
  useEffect(() => {
    const cardWidth = 146; // card + gap
    let current = 1;
    let direction = 1;

    const cycle = async () => {
      while (true) {
        await new Promise(r => setTimeout(r, 1800));
        current = current + direction;
        if (current >= docCards.length - 1) direction = -1;
        if (current <= 0) direction = 1;
        setBirdIndex(current);

        await controls.start({
          x: current * cardWidth,
          transition: { type: "spring", stiffness: 120, damping: 18 },
        });
      }
    };
    cycle();
  }, [controls]);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-white" />

      <motion.div
        className="max-w-3xl mx-auto px-6 text-center w-full"
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
          <span className="relative inline-block italic text-blue-600">
            One Intelligent Platform.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mt-4"
        >
          BrokerBird is your{" "}
          <strong>end-to-end intelligent thinking partner</strong> saving{" "}
          <strong>30 weeks of broker capacity</strong> annually.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-16"
        >
          <a
            href="#contact"
            id="hero-talk-with-us"
            className="w-full sm:w-auto px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white text-base font-semibold rounded-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Talk with Us
          </a>
        </motion.div>
      </motion.div>

      {/* ── Animated Bird + Documents Row ─────────────────────────────── */}
      <motion.div 
        variants={fadeUp} 
        className="relative w-full max-w-6xl mx-auto overflow-x-auto hide-scrollbar px-6 mb-16"
      >
        <div className="w-max mx-auto relative">
          {/* Document cards row */}
          <div className="flex gap-4 items-end pb-8">
            {docCards.map((card, i) => (
              <DocCard key={i} {...card} />
            ))}
          </div>

          {/* Bird — absolutely positioned, drifts via motion.x */}
          <motion.div
            className="absolute bottom-6"
            style={{ left: 0, x: birdIndex * 146 }}
            animate={controls}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <Image
                src="/brokerbird-mascot.svg"
                alt="BrokerBird"
                width={64}
                height={64}
                className="drop-shadow-md"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Proof */}
      <motion.div
        variants={fadeUp}
        className="flex items-center justify-center gap-4 text-base font-medium text-slate-500 max-w-3xl mx-auto px-6 w-full"
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
          Trusted by leading teams{" "}
          <br className="hidden sm:block" />
          at Broker A, Broker B &amp; Broker C
        </span>
      </motion.div>
    </section>
  );
}
