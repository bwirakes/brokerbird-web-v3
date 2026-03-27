"use client";

import { motion } from "framer-motion";

export default function PricingPhilosophy() {
  const points = [
    {
      theme: "blue",
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Capacity, not seats",
      description: "Pay for the value you deliver (renewals and proposals), not how many teammates log in. Unlimited seats available on Enterprise.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12V8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12C4 14.2091 5.79086 16 8 16H16C18.2091 16 20 14.2091 20 12" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" strokeLinecap="round"/>
          <path d="M8 20L16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="10" r="2" fill="currentColor"/>
        </svg>
      )
    },
    {
      theme: "amber",
      bgColor: "bg-amber-50/50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      title: "No AI credit math",
      description: "Forget tracking API tokens or AI credits. We abstracted the complexity away so you just focus on your book of business.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 15L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" className="text-amber-200"/>
        </svg>
      )
    },
    {
      theme: "emerald",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: "All core modules included",
      description: "No à la carte nickel-and-diming. Extraction, Benchmarking, Census, Claims, and Plan Design are included in every tier.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 10L10 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Pricing Philosophy</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We built BrokerBird to align with how you run your agency. Annual limits match your cyclical busy seasons (like January and July), ensuring you are never penalized for burst usage. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-xl p-8 border border-b-4 ${point.borderColor} ${point.bgColor} shadow-sm flex flex-col items-start transition-all hover:-translate-y-1 hover:shadow-md relative overflow-hidden`}
            >
              <div className={`absolute -right-12 -top-12 w-40 h-40 ${point.iconBg} rounded-full opacity-50 blur-3xl mix-blend-multiply pointer-events-none`} />
              
              <div className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-6 relative z-10 ${point.iconColor} shadow-inner bg-white/50 border border-white/60`}>
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm relative z-10">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
