"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURE_COMPARISON_DATA } from "@/lib/pricing-data";

export default function FeatureComparison() {
  const [isOpen, setIsOpen] = useState(false);

  const renderVal = (val: boolean | string) => {
    if (val === true) return <Check className="w-5 h-5 text-blue-600 mx-auto" />;
    if (val === false) return <Minus className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="text-sm font-medium text-slate-600 text-center block">{val}</span>;
  };

  return (
    <section className="py-12 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <Button
             variant="ghost"
             onClick={() => setIsOpen(!isOpen)}
             aria-expanded={isOpen}
             className="group text-lg font-bold text-slate-900 gap-2 hover:bg-slate-100 rounded-full py-6 px-8 transition-colors border border-slate-200"
          >
             {isOpen ? "Hide comprehensive feature comparison" : "Show comprehensive feature comparison"}
             {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden mt-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="py-6 px-8 text-xs font-bold uppercase tracking-wider text-slate-500 min-w-[200px]" scope="col">Feature</th>
                        <th className="py-6 px-8 text-xs font-bold uppercase tracking-wider text-slate-500 text-center min-w-[120px]" scope="col">Starter</th>
                        <th className="py-6 px-8 text-xs font-bold uppercase tracking-wider text-slate-500 text-center min-w-[120px]" scope="col">Professional</th>
                        <th className="py-6 px-8 text-xs font-bold uppercase tracking-wider text-slate-500 text-center min-w-[120px]" scope="col">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody>
                      {FEATURE_COMPARISON_DATA.map((row) => (
                        <tr 
                          key={row.name} 
                          className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                        >
                          <th className="py-5 px-8 font-medium text-slate-900 text-sm" scope="row">{row.name}</th>
                          <td className="py-5 px-8">{renderVal(row.starter)}</td>
                          <td className="py-5 px-8 bg-blue-50/10">{renderVal(row.prof)}</td>
                          <td className="py-5 px-8">{renderVal(row.ent)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
