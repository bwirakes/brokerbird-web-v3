"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface PricingHeroProps {
  billingCycle: "monthly" | "annual";
  setBillingCycle: (cycle: "monthly" | "annual") => void;
}

export default function PricingHero({ billingCycle, setBillingCycle }: PricingHeroProps) {
  return (
    <section className="pt-16 pb-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="overline mb-4 block">Pricing & Plans</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Pricing that scales with your <span className="italic font-medium text-blue-600">book of business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Annual plans with annual limits — designed for how renewals actually work. 
            No per-seat traps. No surprise charges during peak season.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-4 p-1 bg-slate-100 rounded-full border border-slate-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                billingCycle === "monthly" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all relative ${
                billingCycle === "annual" 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Annual
              {billingCycle !== "annual" && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                   <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 shadow-sm">
                    Save 17%
                  </Badge>
                </div>
              )}
            </button>
          </div>
          {billingCycle === "annual" && (
            <span className="text-xs font-medium text-blue-600 animate-in fade-in slide-in-from-top-1">
              Billed annually — Includes generous annual capacity
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
