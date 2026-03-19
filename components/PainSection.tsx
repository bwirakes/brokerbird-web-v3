"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const painPoints = [
  {
    num: "01",
    title: "The 40-Hour Grind",
    body: <>Manual policy spreading steals your team's most <strong>productive weeks</strong>. Senior brokers become copy-paste operators while renewal deadlines pile up.</>,
    stat: "Up to 40 hrs per client renewal cycle",
  },
  {
    num: "02",
    title: "The E&O Nightmare",
    body: <>Every manual keystroke is a transcription risk. Misread a deductible, transpose a limit — one error in a 200-page PDF becomes a <strong>multi-million dollar claim</strong>.</>,
    stat: "One typo away from a catastrophic claim",
  },
  {
    num: "03",
    title: "Format Chaos",
    body: <>Unstructured HR census dumps. Wildly inconsistent carrier PDFs. <strong>No two documents look alike</strong>, making true like-for-like comparison nearly impossible.</>,
    stat: "No two carrier formats alike",
  },
  {
    num: "04",
    title: "Margin Compression",
    body: <>Rising talent costs, shrinking commissions, and years to train junior brokers creates a <strong>hard ceiling</strong> on your ability to scale or grow.</>,
    stat: "18 weeks of lost capacity per year",
  },
];

export default function PainSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} id="problem" className="relative h-[300vh] bg-slate-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-6">
          
          <motion.div
            className="mb-16 max-w-3xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="overline mb-4">
              The Problem
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Your Best People Are <br/> Doing Data Entry
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-slate-500 leading-relaxed">
              The modern benefits renewal process was designed for a world that no longer exists. The tools have not caught up, leading to margin compression and high-risk workflows.
            </motion.p>
          </motion.div>

          <div className="relative mt-12 w-full overflow-visible">
            <motion.div style={{ x }} className="flex gap-8">
              {painPoints.map((point) => (
                <div
                  key={point.num}
                  className="shrink-0 w-[85vw] sm:w-[500px]"
                >
                  <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm transition-all hover:shadow-xl hover:border-blue-200 h-full flex flex-col">
                    <div className="flex items-center justify-between gap-4 mb-10">
                      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 font-bold text-xl border border-slate-200/50">
                        {point.num}
                      </div>
                      <Badge variant="secondary" className="text-slate-600 bg-slate-100 border-slate-200 border px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-xl shadow-none whitespace-nowrap">
                        {point.stat}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{point.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">{point.body}</p>
                  </div>
                </div>
              ))}
              <div className="shrink-0 w-[30vw]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
