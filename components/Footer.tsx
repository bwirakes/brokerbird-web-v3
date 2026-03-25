"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C5.2 2 3 4.2 3 7c0 1.8.9 3.4 2.3 4.3L4 14h8l-1.3-2.7C12.1 10.4 13 8.8 13 7c0-2.8-2.2-5-5-5z" fill="white"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-white">BrokerBird</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              The AI-native decision engine for benefits brokers. Evidence-first. Broker-built.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/pricing" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Pricing</a>
              </li>
              {["Features", "How It Works", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Request Access", href: "mailto:hello@brokerbird.com" },
                { label: "Book a Demo", href: "mailto:demo@brokerbird.com" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-800 gap-4">
          <p className="text-xs text-slate-600">
            © {year} BrokerBird. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built by insurance people. For insurance people.
          </p>
        </div>
      </div>
    </footer>
  );
}
