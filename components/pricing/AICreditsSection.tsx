"use client";

import { motion } from "framer-motion";
import { FileText, MessageSquare, BarChart3, Users, Layout, Bot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AICreditsSection() {
  const actions = [
    { icon: <FileText className="w-5 h-5" />, name: "Document extraction", credits: "3 credits/page" },
    { icon: <MessageSquare className="w-5 h-5" />, name: "Q&A query", credits: "1–2 credits" },
    { icon: <BarChart3 className="w-5 h-5" />, name: "Claims analysis", credits: "5 credits/session" },
    { icon: <Users className="w-5 h-5" />, name: "Census parse", credits: "2 credits" },
    { icon: <Layout className="w-5 h-5" />, name: "Presentation", credits: "10 credits" },
    { icon: <Bot className="w-5 h-5" />, name: "Agent workflow", credits: "20 credits" },
  ];

  const packs = [
    { amount: "3,000 credits", price: "$250" },
    { amount: "15,000 credits", price: "$1,000" },
    { amount: "Custom enterprise volumes", price: "Contact Sales" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Credits — transparent, predictable AI costs</h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Every AI action uses credits. Your plan includes a generous annual allocation. 
              Need more? Purchase additional packs anytime.
            </p>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 mb-10 max-w-xl">
              <p className="text-slate-900 font-semibold text-sm mb-1.5 flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-600" />
                What is an AI Credit?
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Think of <span className="text-slate-900 font-semibold">1 AI Credit</span> as the equivalent of processing 1 standard policy page, or executing ~1,000 tokens of LLM reasoning.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {actions.map((action, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    {action.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 leading-none mb-1">{action.name}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-none">{action.credits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-3xl -rotate-2 -z-10 blur-xl" />
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Credit Pack Pricing</h3>
              <div className="space-y-4 mb-8">
                {packs.map((pack, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-800 last:border-0">
                    <span className="text-slate-300 font-medium">{pack.amount}</span>
                    <span className="text-white font-bold">{pack.price}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base">
                Purchase Credits
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
