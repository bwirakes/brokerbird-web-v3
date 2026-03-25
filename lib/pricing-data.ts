export interface KeyMetrics {
  renewals: string;
  seats: string;
  aiCredits: string;
}

export interface Extensions {
  additionalCredits: string;
  addons: string;
}

export interface PricingPlan {
  name: "Starter" | "Professional" | "Enterprise";
  tagline: string;
  price?: {
    monthly: string;
    annual: string;
    annualDisclaimer: string;
  };
  metrics: KeyMetrics;
  features: string[];
  extensions: Extensions;
  ctaText: string;
  ctaVariant: "default" | "outline";
  highlighted?: boolean;
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "Ideal for small independent brokers",
    price: {
      monthly: "$599",
      annual: "$499",
      annualDisclaimer: "$5,988/yr",
    },
    metrics: {
      renewals: "30–100",
      seats: "Up to 3",
      aiCredits: "6,000/yr",
    },
    features: [
      "Renewals workflow (Extract → RFQ → Track → Compare)",
      "Evidence Layer with inline citations",
      "SSO-ready authentication",
    ],
    extensions: {
      additionalCredits: "Available for purchase",
      addons: "Available à la carte",
    },
    ctaText: "Get Started",
    ctaVariant: "outline",
  },
  {
    name: "Professional",
    tagline: "For growing agencies and mid-market teams",
    price: {
      monthly: "$3,599",
      annual: "$2,999",
      annualDisclaimer: "$35,988/yr",
    },
    metrics: {
      renewals: "200–800",
      seats: "Up to 15",
      aiCredits: "60,000/yr",
    },
    features: [
      "Everything in Starter, plus:",
      "Census Reconciliation",
      "Claims Analytics",
      "Benchmarking",
      "Q&A / Intelligence Layer",
      "Plan Design Canvas",
      "SOC 2 compliant & Audit Trail UI",
    ],
    extensions: {
      additionalCredits: "Available for purchase",
      addons: "Presentation Gen, Agent Workflows",
    },
    ctaText: "Get Started",
    ctaVariant: "default",
    highlighted: true,
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For large, national agencies that move markets",
    metrics: {
      renewals: "1,000–5,000+",
      seats: "Unlimited",
      aiCredits: "300,000+/yr",
    },
    features: [
      "Everything in Professional, plus:",
      "Presentation Deck Generation",
      "Agent Workflows",
      "RBAC / Team Roles",
      "Custom Carrier Schemas",
      "Email Integration (auto-fetch)",
      "Dedicated onboarding",
    ],
    extensions: {
      additionalCredits: "Volume discounted",
      addons: "All included natively",
    },
    ctaText: "Contact Sales",
    ctaVariant: "outline",
  },
];

export interface AddOn {
  name: string;
  price: string;
  description: string;
  includedInPro?: boolean;
}

export const ADD_ONS: AddOn[] = [
  { name: "Census Reconciliation", price: "$79/mo", description: "AI field mapping for messy HR demographic dumps", includedInPro: true },
  { name: "Claims Analytics", price: "$79/mo", description: "Visual dashboards, FWA detection, loss ratio tracking", includedInPro: true },
  { name: "Benchmarking", price: "$49/mo", description: "Carrier scoring matrices with weighted criteria", includedInPro: true },
  { name: "Q&A / Intelligence Layer", price: "$49/mo", description: "Ask questions about your policy data", includedInPro: true },
  { name: "Plan Design Canvas", price: "$49/mo", description: "Strategic plan design and comparison tools", includedInPro: true },
  { name: "Presentation Deck Gen", price: "$49/mo", description: "One-click branded presentations from comparison data" },
  { name: "Agent Workflows", price: "$79/mo", description: "Multi-step autonomous renewal workflows" },
];

export interface FeatureComparisonRow {
  name: string;
  starter: boolean | string;
  prof: boolean | string;
  ent: boolean | string;
}

export const FEATURE_COMPARISON_DATA: FeatureComparisonRow[] = [
  { name: "Extraction Pipeline", starter: true, prof: true, ent: true },
  { name: "RFQ Generation", starter: true, prof: true, ent: true },
  { name: "Tracking", starter: true, prof: true, ent: true },
  { name: "Comparison + AI Insights", starter: true, prof: true, ent: true },
  { name: "Evidence Layer", starter: true, prof: true, ent: true },
  { name: "Census Reconciliation", starter: "Add-on", prof: true, ent: true },
  { name: "Claims Analytics", starter: "Add-on", prof: true, ent: true },
  { name: "Benchmarking", starter: "Add-on", prof: true, ent: true },
  { name: "Q&A Intelligence", starter: "Add-on", prof: true, ent: true },
  { name: "Plan Design Canvas", starter: "Add-on", prof: true, ent: true },
  { name: "Presentation Gen", starter: "Add-on", prof: "Add-on ($49/mo)", ent: true },
  { name: "Agent Workflows", starter: "Add-on", prof: "Add-on ($79/mo)", ent: true },
  { name: "SOC 2 / HIPAA", starter: false, prof: true, ent: true },
  { name: "RBAC / Team Roles", starter: false, prof: false, ent: true },
  { name: "Custom Carrier Schemas", starter: false, prof: false, ent: true },
  { name: "Email Auto-Fetch", starter: false, prof: false, ent: true },
  { name: "Seats", starter: "3", prof: "15", ent: "Unlimited" },
  { name: "AI Credits/Year", starter: "6,000", prof: "60,000", ent: "300,000+" },
];
