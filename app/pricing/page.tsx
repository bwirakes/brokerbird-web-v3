"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import AddOnsGrid from "@/components/pricing/AddOnsGrid";
import WhoIsThisFor from "@/components/pricing/WhoIsThisFor";
import AICreditsSection from "@/components/pricing/AICreditsSection";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16"> {/* Spacer for fixed navbar */}
        <PricingHero 
          billingCycle={billingCycle} 
          setBillingCycle={setBillingCycle} 
        />
        
        <PricingCards 
          billingCycle={billingCycle} 
        />
        
        <WhoIsThisFor />
        
        <FeatureComparison />
        
        <AddOnsGrid />
        
        <AICreditsSection />
        
        <PricingFAQ />
      </div>

      <Footer />
    </main>
  );
}
