"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-900 -z-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/5 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to recover 29 weeks of <span className="text-blue-500 italic">administrative time?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join the top brokers moving at the speed of AI. Start your 14-day trial today or talk to our solutions team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
              Start Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-slate-700 text-white hover:bg-slate-800 w-full sm:w-auto">
              Talk to Sales
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
             {["SOC 2 Ready", "97% Extraction Accuracy", "Evidence Layer Verified"].map((badge, idx) => (
               <div key={idx} className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                 <span className="text-slate-500 text-sm font-medium tracking-wide">{badge}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
