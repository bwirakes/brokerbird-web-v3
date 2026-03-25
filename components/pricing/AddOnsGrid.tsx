"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { ADD_ONS, AddOn } from "@/lib/pricing-data";

export default function AddOnsGrid() {
  const [selectedPlan, setSelectedPlan] = useState<"Starter" | "Professional" | "Enterprise">("Starter");

  const renderAddOnStatus = (addon: AddOn) => {
    if (selectedPlan === "Enterprise") {
      return (
        <span className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full whitespace-nowrap">
          <Check className="w-4 h-4" /> Included
        </span>
      );
    }
    if (selectedPlan === "Professional" && addon.includedInPro) {
      return (
        <span className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full whitespace-nowrap">
          <Check className="w-4 h-4" /> Included
        </span>
      );
    }
    return <span className="text-blue-600 font-bold text-lg whitespace-nowrap ml-4">{addon.price}</span>;
  };

  return (
    <section className="py-24 px-6 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-100">
            A La Carte Modules
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Module Add-Ons</h2>
          
          <div className="inline-flex p-1 bg-slate-100 rounded-xl mb-6">
            {(["Starter", "Professional", "Enterprise"] as const).map((plan) => (
              <button
                key={plan}
                onClick={() => setSelectedPlan(plan)}
                className={`px-8 py-3 text-sm font-semibold rounded-lg transition-all ${
                  selectedPlan === plan ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>

          <p className="text-slate-500 max-w-2xl mx-auto h-12">
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedPlan}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {selectedPlan === "Starter" && "Starter plan customers can add any module à la carte. Build the exact suite you need."}
                {selectedPlan === "Professional" && "Professional plan includes Census, Claims, Benchmarking, Q&A, and Plan Design. Expand further if needed."}
                {selectedPlan === "Enterprise" && "All modules are fully included in the Enterprise tier. Unlimited power at your fingertips."}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>

        {selectedPlan === "Enterprise" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-3xl font-bold mb-4">The Complete Package</h3>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              You get complete, unfettered access to every module we offer, now and in the future, plus massive AI credit limits and custom onboarding.
            </p>
            <a 
              href="mailto:sales@brokerbird.com"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 px-8 rounded-lg transition-colors text-lg"
            >
              Talk to Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADD_ONS.map((addon, index) => {
                const isIncluded = selectedPlan === "Professional" && addon.includedInPro;
                return (
                  <motion.div
                    key={addon.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Card className={`h-full border-slate-200 transition-all rounded-3xl ${isIncluded ? 'bg-slate-50 border-transparent shadow-none' : 'bg-white hover:border-blue-200 hover:shadow-lg'}`}>
                      <CardContent className="p-8">
                        <div className="flex justify-between items-start mb-4 gap-4">
                          <h3 className="text-xl font-bold text-slate-900 leading-tight">{addon.name}</h3>
                          {renderAddOnStatus(addon)}
                        </div>
                        <p className={`text-sm leading-relaxed ${isIncluded ? 'text-slate-400' : 'text-slate-500'}`}>{addon.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>


          </>
        )}
      </div>
    </section>
  );
}
