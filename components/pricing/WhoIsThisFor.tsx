"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhoIsThisFor() {
  const segments = [
    {
      name: "Starter",
      isBestFor: [
        "Independent brokers managing complex renewals",
        "Agencies relying heavily on Excel and manual data entry",
        "Teams needing basic tracking and evidence links",
      ],
      upgradeWhen: [
        "Manual data entry becomes a bottleneck",
        "You need clear inline citations for accuracy",
        "You want a standardized workflow",
      ],
    },
    {
      name: "Professional",
      isBestFor: [
        "Growing agencies needing comprehensive tools",
        "Teams requiring deep census and claims analytics",
        "Brokers looking to generate strategic plan designs",
      ],
      upgradeWhen: [
        "You need an intelligence layer (Q&A) on your data",
        "Census reconciliation takes too much time",
        "Security and compliance (SOC 2) are required",
      ],
    },
    {
      name: "Enterprise",
      isBestFor: [
        "Large agencies that move markets",
        "Teams needing automated agent workflows",
        "Organizations wanting branded presentation generation",
      ],
      upgradeWhen: [
        "You require custom carrier schemas",
        "RBAC and team roles are critical",
        "You need massive AI credit capacity",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What should I choose?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, idx) => (
            <motion.div
              key={segment.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">{segment.name} is best for:</h3>
              <ul className="space-y-4 mb-8 flex-1">
                {segment.isBestFor.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-sm font-bold text-slate-900 mb-4">Upgrade to {segment.name} when:</h4>
              <ul className="space-y-4">
                {segment.upgradeWhen.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
