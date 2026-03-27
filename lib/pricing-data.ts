export interface KeyMetrics {
  renewals: string;
  proposals: string;
  seats: string;
}

export interface Extensions {
  capacityOverages: string;
  setupFees: string;
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
      renewals: "20 / yr",
      proposals: "15 / yr",
      seats: "Up to 3",
    },
    features: [
      "All Core Workflow Modules Included",
      "Extraction Pipeline",
      "Benchmarking & Plan Design Canvas",
      "Census & Claims Analytics",
      "Audit Trail logging",
    ],
    extensions: {
      capacityOverages: "Available via Capacity Packs",
      setupFees: "$0 — Self-serve",
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
      renewals: "120 / yr",
      proposals: "90 / yr",
      seats: "Up to 15",
    },
    features: [
      "Everything in Starter, plus:",
      "Audit Trail UI Dashboard",
      "SOC 2 / HIPAA Compliant",
      "Dedicated Implementation Services",
    ],
    extensions: {
      capacityOverages: "Available via Capacity Packs",
      setupFees: "$0–$5,000 Setup",
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
      renewals: "400+ / yr",
      proposals: "300+ / yr",
      seats: "Unlimited",
    },
    features: [
      "Everything in Professional, plus:",
      "RBAC / Team Roles",
      "Custom Carrier Schemas",
      "Email Integration (auto-fetch)",
      "Strategic Partnership Pricing Structure",
    ],
    extensions: {
      capacityOverages: "Negotiated Scaling",
      setupFees: "$5k–$15k Setup ($10k new country)",
    },
    ctaText: "Contact Sales",
    ctaVariant: "outline",
  },
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
  { name: "Census Reconciliation", starter: true, prof: true, ent: true },
  { name: "Claims Analytics", starter: true, prof: true, ent: true },
  { name: "Benchmarking", starter: true, prof: true, ent: true },
  { name: "Q&A Intelligence", starter: true, prof: true, ent: true },
  { name: "Plan Design Canvas", starter: true, prof: true, ent: true },
  { name: "Presentation Gen", starter: true, prof: true, ent: true },
  { name: "Agent Workflows", starter: true, prof: true, ent: true },
  { name: "Audit Trail (Logging)", starter: true, prof: true, ent: true },
  { name: "Audit Trail (UI)", starter: false, prof: true, ent: true },
  { name: "SOC 2 / HIPAA", starter: false, prof: true, ent: true },
  { name: "RBAC / Team Roles", starter: false, prof: false, ent: true },
  { name: "Custom Carrier Schemas", starter: false, prof: false, ent: true },
  { name: "Email Auto-Fetch", starter: false, prof: false, ent: true },
  { name: "Seats", starter: "3", prof: "15", ent: "Unlimited" },
  { name: "Renewals Limit", starter: "20 / yr", prof: "120 / yr", ent: "400+ / yr" },
  { name: "Proposals Limit", starter: "15 / yr", prof: "90 / yr", ent: "300+ / yr" },
];
