"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="BrokerBird home">
          <Image
            src="/brokerbird-mascot.svg"
            alt="BrokerBird Logo"
            width={28}
            height={28}
            className="flex-shrink-0"
          />
          <span className="text-[15px] font-semibold text-slate-900 tracking-tight">BrokerBird</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="/pricing" 
            className={`text-sm font-semibold transition-colors ${
              pathname === "/pricing" ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            Pricing
          </a>
          {["Features", "How It Works", "Testimonials", "FAQ"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
        >
          Request Access <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  );
}
