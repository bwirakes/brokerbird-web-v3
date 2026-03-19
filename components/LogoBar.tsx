"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const logos = [
  "Broker A",
  "Broker B",
  "Broker C",
  "Broker D",
  "Broker E",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 h-10 flex-shrink-0">
      <span className="text-slate-400 text-sm font-semibold tracking-wide whitespace-nowrap uppercase text-[11px] letter-spacing-[0.08em]">
        {name}
      </span>
    </div>
  );
}

export default function LogoBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={fadeUp}
          className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 mb-8"
        >
          Validated by decision-makers at
        </motion.p>
        <div className="relative">
          <div className="flex">
            <div className="flex marquee-track">
              {[...logos, ...logos].map((name, i) => (
                <LogoItem key={`${name}-${i}`} name={name} />
              ))}
            </div>
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
