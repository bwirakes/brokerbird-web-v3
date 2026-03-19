"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, cardReveal, viewport } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "The citation layer was the game-changer. I can show every client exactly where each data point came from. No more guesswork, no more 'trust us, the AI said so.'",
    name: "Sarah M.",
    role: "Head of Renewals",
    company: "APAC Brokerage",
    stars: 5,
  },
  {
    quote:
      "We used to outsource our policy spreading. Now my team does the full renewal in-house in under 30 minutes. The business economics changed overnight.",
    name: "James R.",
    role: "Benefits Principal",
    company: "US Brokerage",
    stars: 5,
  },
  {
    quote:
      "I don't know how we would go back to spreadsheets. BrokerBird gave our team their strategic advisor role back — the thing we actually enjoy doing.",
    name: "Amanda K.",
    role: "Director, Group Benefits",
    company: "Hilb Group",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#EAB308">
          <path d="M8 1l1.796 3.641L14 5.347l-3 2.921.708 4.126L8 10.347l-3.708 2.047L5 8.268 2 5.347l4.204-.706L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 border-y border-slate-200 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p variants={fadeUp} className="overline mb-3">
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight"
          >
            What Brokers Are Saying
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardReveal}
              className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <StarRating count={t.stars} />
              <blockquote className="text-base text-slate-700 italic leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
