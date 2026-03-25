"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2C5.2 2 3 4.2 3 7c0 1.8.9 3.4 2.3 4.3L4 14h8l-1.3-2.7C12.1 10.4 13 8.8 13 7c0-2.8-2.2-5-5-5z" fill="white"/>
              <circle cx="6.5" cy="6.5" r="1" fill="#2563EB"/>
            </svg>
          </div>
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
          className={`hidden md:inline-flex ${buttonVariants({ variant: 'default', size: 'sm' })}`}
        >
          Request Access
        </a>
      </nav>
    </header>
  );
}
