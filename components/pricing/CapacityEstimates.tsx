"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function CapacityEstimates() {
  const [region, setRegion] = useState<"US" | "APAC">("US");

  const data = {
    US: [
      { tier: "Starter", renewals: "~30–50", pages: "~36K–60K" },
      { tier: "Professional", renewals: "~200–400", pages: "~240K–480K" },
      { tier: "Enterprise", renewals: "~1,000–3,000+", pages: "~1.2M–3.6M" },
    ],
    APAC: [
      { tier: "Starter", renewals: "~60–100", renewalsLabel: "Renewals", pages: "~38K–63K" },
      { tier: "Professional", renewals: "~400–800", pages: "~250K–500K" },
      { tier: "Enterprise", renewals: "~2,000–5,000+", pages: "~1.3M–3.1M" },
    ],
  };

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Estimated Capacity by Region</h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            How many renewals and pages can each plan actually handle? 
            Select your primary market to see estimates.
          </p>

          <div className="inline-flex p-1 bg-slate-200 rounded-lg">
            {(["US", "APAC"] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-8 py-2 text-sm font-semibold rounded-md transition-all ${
                  region === r ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {r} Market
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-wider text-slate-500">Tier</th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-wider text-slate-500">Est. Annual Renewals</th>
                  <th className="py-5 px-8 text-xs font-bold uppercase tracking-wider text-slate-500">Est. Pages Processed</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {data[region].map((row, idx) => (
                    <motion.tr
                      key={`${region}-${row.tier}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2, delay: idx * 0.1 }}
                      className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-6 px-8">
                        <span className="font-bold text-slate-900">{row.tier}</span>
                      </td>
                      <td className="py-6 px-8">
                        <span className="text-slate-600 font-medium">{row.renewals}</span>
                      </td>
                      <td className="py-6 px-8">
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100 px-3 py-1 font-mono">
                          {row.pages}
                        </Badge>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 text-[11px] text-slate-400 text-center max-w-2xl mx-auto leading-relaxed italic">
          Estimates are directional based on average policy complexity observed during design partner validation. 
          Actual capacity varies by carrier complexity, policy page count, number of quote rounds, and AI feature usage beyond extraction.
        </p>
      </div>
    </section>
  );
}
