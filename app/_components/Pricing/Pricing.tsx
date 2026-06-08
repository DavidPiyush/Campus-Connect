"use client";

import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    tag: "Get started",
    tagBg: "#c8f7dc",
    cardBg: "#faf7f0",
    rotate: "-1.5deg",
    cta: "Join free →",
    ctaBg: "#0f0e0c",
    ctaColor: "#faf7f0",
    features: [
      { label: "Attendance tracker", included: true },
      { label: "Bunk calculator", included: true },
      { label: "Notices & announcements", included: true },
      { label: "Notes & PYQ hub", included: true },
      { label: "Basic CGPA calculator", included: true },
      { label: "Pass probability", included: false },
      { label: "Rank predictor", included: false },
      { label: "CGPA strategy engine", included: false },
      { label: "RTI advisor", included: false },
      { label: "AI assistant", included: false },
      { label: "Placement analytics", included: false },
    ],
  },
  {
    name: "Pro",
    price: "₹99",
    period: "per semester",
    tag: "Most popular ★",
    tagBg: "#ffe033",
    cardBg: "#0f0e0c",
    rotate: "1deg",
    cta: "Go Pro →",
    ctaBg: "#ffe033",
    ctaColor: "#0f0e0c",
    featured: true,
    features: [
      { label: "Everything in Free", included: true },
      { label: "Pass probability (AI)", included: true },
      { label: "Rank predictor", included: true },
      { label: "CGPA strategy engine", included: true },
      { label: "RTI advisor + templates", included: true },
      { label: "AI assistant (unlimited)", included: true },
      { label: "Placement analytics", included: true },
      { label: "Performance forecasting", included: true },
      { label: "Priority support", included: true },
      { label: "Early access to features", included: true },
      { label: "Institutional dashboard", included: false },
    ],
  },
  {
    name: "College",
    price: "₹999",
    period: "per month",
    tag: "For institutions",
    tagBg: "#d6e4ff",
    cardBg: "#faf7f0",
    rotate: "-0.5deg",
    cta: "Contact us →",
    ctaBg: "#1a3fcc",
    ctaColor: "#faf7f0",
    features: [
      { label: "All Pro features for students", included: true },
      { label: "Institutional analytics dashboard", included: true },
      { label: "Department-wise performance", included: true },
      { label: "Bulk student onboarding", included: true },
      { label: "ERP sync integration", included: true },
      { label: "Custom branding", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "API access", included: true },
      { label: "SLA support", included: true },
      { label: "Training & onboarding", included: true },
      { label: "Custom feature requests", included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 px-5 overflow-hidden"
      style={{ background: "#faf7f0" }}
    >
      <div style={{ borderTop: "2.5px solid #0f0e0c", marginBottom: "64px" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "20px",
                color: "#e8321a",
                marginBottom: "8px",
              }}
            >
              — honest pricing
            </p>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(36px, 6vw, 60px)",
                color: "#0f0e0c",
                lineHeight: 1,
              }}
            >
              PAY LESS
              <br />
              <span
                style={{
                  WebkitTextStroke: "2.5px #0f0e0c",
                  color: "transparent",
                }}
              >
                THAN A CHAI
              </span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#0f0e0c",
                opacity: 0.55,
                lineHeight: 1.7,
              }}
            >
              Pro is ₹99 per semester — less than two cups of canteen chai. Free
              tier never expires.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col p-6 transition-all duration-150 group"
              style={{
                background: plan.cardBg,
                border: "2.5px solid #0f0e0c",
                borderRadius: "4px",
                boxShadow: plan.featured
                  ? "7px 7px 0 #e8321a"
                  : "5px 5px 0 #0f0e0c",
                transform: `rotate(${plan.rotate})`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "rotate(0deg) translate(3px,3px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "2px 2px 0 #0f0e0c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  `rotate(${plan.rotate})`;
                (e.currentTarget as HTMLElement).style.boxShadow = plan.featured
                  ? "7px 7px 0 #e8321a"
                  : "5px 5px 0 #0f0e0c";
              }}
            >
              {/* Tag */}
              <div
                className="self-start mb-5 px-3 py-1"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "15px",
                  fontWeight: 700,
                  background: plan.tagBg,
                  color: "#0f0e0c",
                  border: "2px solid #0f0e0c",
                  borderRadius: "3px",
                }}
              >
                {plan.tag}
              </div>

              {/* Name + Price */}
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "18px",
                  color: plan.featured
                    ? "rgba(255,255,255,0.4)"
                    : "rgba(0,0,0,0.4)",
                  marginBottom: "4px",
                }}
              >
                {plan.name}
              </p>
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "48px",
                    color: plan.featured ? "#ffe033" : "#0f0e0c",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "16px",
                  color: plan.featured
                    ? "rgba(255,255,255,0.35)"
                    : "rgba(0,0,0,0.35)",
                  marginBottom: "20px",
                }}
              >
                {plan.period}
              </p>

              {/* Divider */}
              <div
                style={{
                  borderTop: `2px solid ${plan.featured ? "rgba(255,255,255,0.1)" : "#0f0e0c"}`,
                  marginBottom: "16px",
                  opacity: plan.featured ? 1 : 0.12,
                }}
              />

              {/* Feature list */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5">
                    {f.included ? (
                      <Check
                        className="w-4 h-4 shrink-0"
                        style={{ color: plan.featured ? "#ffe033" : "#1a9e4a" }}
                      />
                    ) : (
                      <X
                        className="w-4 h-4 shrink-0"
                        style={{
                          color: plan.featured
                            ? "rgba(255,255,255,0.15)"
                            : "rgba(0,0,0,0.18)",
                        }}
                      />
                    )}
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13.5px",
                        color: f.included
                          ? plan.featured
                            ? "rgba(255,255,255,0.75)"
                            : "#0f0e0c"
                          : plan.featured
                            ? "rgba(255,255,255,0.2)"
                            : "rgba(0,0,0,0.3)",
                        textDecoration: f.included ? "none" : "line-through",
                      }}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.name === "College" ? "/contact" : "/register"}
                className="block text-center py-3 font-black text-sm tracking-wide transition-all"
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  background: plan.ctaBg,
                  color: plan.ctaColor,
                  border: "2.5px solid #0f0e0c",
                  borderRadius: "3px",
                  boxShadow:
                    "3px 3px 0 " + (plan.featured ? "#ffe03380" : "#0f0e0c"),
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "1px 1px 0 #0f0e0c";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(2px,2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "3px 3px 0 " + (plan.featured ? "#ffe03380" : "#0f0e0c");
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(0,0)";
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
          style={{
            background: "#ffe033",
            border: "2.5px solid #0f0e0c",
            borderRadius: "4px",
            boxShadow: "5px 5px 0 #0f0e0c",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "18px",
                color: "#0f0e0c",
              }}
            >
              30-day money back. No questions asked.
            </p>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "16px",
                color: "#0f0e0c",
                opacity: 0.6,
                marginTop: "2px",
              }}
            >
              If Semestro doesn&apos;t help you, we&apos;ll refund every rupee.
            </p>
          </div>
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "#e8321a",
              border: "2.5px solid #e8321a",
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              lineHeight: 1.3,
              transform: "rotate(-10deg)",
              flexShrink: 0,
              padding: "8px",
            }}
          >
            100% REFUND
          </div>
        </div>
      </div>
    </section>
  );
}
