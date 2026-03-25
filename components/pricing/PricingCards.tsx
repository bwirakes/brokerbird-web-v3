"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS } from "@/lib/pricing-data";

interface PricingCardsProps {
  billingCycle: "monthly" | "annual";
}

export default function PricingCards({ billingCycle }: PricingCardsProps) {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex"
            >
              <Card 
                className={`w-full flex flex-col relative overflow-hidden border-slate-200 transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted ? "ring-2 ring-blue-600 shadow-xl z-10 bg-white" : "bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="default" className="bg-blue-600 hover:bg-blue-600 shadow-sm border-none">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Price & Limits Header */}
                <CardHeader className="p-8 pb-8 border-b border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed min-h-[40px]">{plan.tagline}</p>
                  
                  <div className="flex flex-col gap-1 min-h-[85px] justify-center mb-6">
                    {plan.price ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-6xl font-black text-slate-900 tracking-tighter">
                            {billingCycle === "annual" ? plan.price.annual : plan.price.monthly}
                          </span>
                          <span className="text-slate-500 text-lg font-medium">/mo</span>
                        </div>
                        <p className="text-sm text-slate-400 mt-2 font-medium">
                          {billingCycle === "annual" ? `Billed annually (${plan.price.annualDisclaimer})` : "Billed monthly"}
                        </p>
                      </>
                    ) : (
                      <span className="text-5xl font-black text-slate-900 tracking-tighter">Talk to Sales</span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 text-sm">
                      <span className="text-slate-500 shrink-0 font-medium">Est. Renewals</span>
                      <span className="text-slate-900 font-semibold sm:text-right">{plan.metrics.renewals}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 text-sm">
                      <span className="text-slate-500 shrink-0 font-medium">Seats</span>
                      <span className="text-slate-900 font-semibold sm:text-right">{plan.metrics.seats}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 text-sm">
                      <span className="text-slate-500 shrink-0 font-medium">AI Credits</span>
                      <span className="text-slate-900 font-semibold sm:text-right">{plan.metrics.aiCredits}</span>
                    </div>
                  </div>
                </CardHeader>

                {/* Main Features */}
                <div className="p-8 pb-6 border-b border-slate-100 bg-slate-50/30">
                  <p className="text-sm font-bold text-slate-900 mb-6">Key features</p>
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-blue-700" />
                        </div>
                        <span className="text-sm text-slate-700 leading-snug font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extensions & CTA */}
                <CardFooter className="px-8 pb-8 pt-6 flex flex-col items-stretch gap-8 bg-slate-50/30 flex-1">
                  <div className="space-y-4 w-full">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Extensions</p>
                    <div className="flex gap-3 items-start">
                      <Plus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm text-slate-700 font-medium block leading-snug">Extra Credits</span>
                        <span className="text-xs text-slate-500">{plan.extensions.additionalCredits}</span>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Plus className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-sm text-slate-700 font-medium block leading-snug">Extra Modules</span>
                        <span className="text-xs text-slate-500">{plan.extensions.addons}</span>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={plan.ctaText === "Contact Sales" ? "mailto:sales@brokerbird.com" : "#"}
                    className={`${buttonVariants({ variant: plan.ctaVariant })} w-full text-base font-bold h-14 shadow-sm mt-auto ${
                      plan.ctaVariant === "default" ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-slate-300 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
