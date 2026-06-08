"use client";

import Link from "next/link";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  Students: [
    { label: "Attendance tracker", href: "#" },
    { label: "Pass predictor", href: "#" },
    { label: "Rank estimator", href: "#" },
    { label: "RTI advisor", href: "#" },
    { label: "AI assistant", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Press kit", href: "/press" },
  ],
  Legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Terms of use", href: "/terms" },
    { label: "Refund policy", href: "/refund" },
    { label: "Cookie policy", href: "/cookies" },
  ],
};

const socials = [
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
];

const universities = [
  "BNMU",
  "LNMU",
  "VKSU",
  "TMBU",
  "Patliputra Univ.",
  "Magadh Univ.",
  "Nalanda Open",
  "B.N. Mandal",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f0e0c", borderTop: "2.5px solid #0f0e0c" }}>
      {/* Top CTA band */}
      <div
        className="px-5 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{ borderBottom: "2.5px solid rgba(255,255,255,0.08)" }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "20px",
              color: "#e8321a",
              marginBottom: "6px",
            }}
          >
            — still on the fence?
          </p>
          <h3
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              color: "#faf7f0",
              lineHeight: 1,
            }}
          >
            YOUR RESULT IS OUT.
            <br />
            <span
              style={{ WebkitTextStroke: "2px #faf7f0", color: "transparent" }}
            >
              DO YOU KNOW YOUR RANK?
            </span>
          </h3>
        </div>
        <Link
          href="/register"
          className="shrink-0 px-8 py-4 font-black text-sm tracking-wide transition-all"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            background: "#ffe033",
            color: "#0f0e0c",
            border: "2.5px solid #ffe033",
            borderRadius: "4px",
            boxShadow: "4px 4px 0 #ffe03350",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "1px 1px 0 #ffe03350";
            (e.currentTarget as HTMLElement).style.transform =
              "translate(3px,3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "4px 4px 0 #ffe03350";
            (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
          }}
        >
          Find out free →
        </Link>
      </div>

      {/* Universities ticker */}
      <div
        className="overflow-hidden py-3"
        style={{
          borderBottom: "2.5px solid rgba(255,255,255,0.08)",
          background: "#0f0e0c",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...universities, ...universities].map((u, i) => (
            <span
              key={i}
              className="mx-5 text-xs font-bold tracking-widest"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                color:
                  i % 3 === 0
                    ? "#ffe033"
                    : i % 3 === 1
                      ? "rgba(255,255,255,0.25)"
                      : "#e8321a",
                fontSize: "11px",
                letterSpacing: "0.15em",
              }}
            >
              {u} ✦
            </span>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "#ffe033",
                border: "2px solid #ffe033",
                borderRadius: "4px",
                boxShadow: "2px 2px 0 #e8321a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "15px",
                color: "#0f0e0c",
              }}
            >
              S
            </div>
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "16px",
                color: "#faf7f0",
              }}
            >
              Semestro
            </span>
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
            }}
          >
            The academic operating system for Bihar engineering students. Built
            with ♥ in Bihar.
          </p>

          {/* Social links */}
          <div className="flex flex-col gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ffe033")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                }
              >
                <span style={{ opacity: 0.4 }}>↗</span> {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group} className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "11px",
                color: "#ffe033",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              {group}
            </p>
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#faf7f0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "2.5px solid rgba(255,255,255,0.08)" }}
      >
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "15px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © {new Date().getFullYear()} Semestro. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "15px",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Made for Bihar&apos;s engineers
          </span>
          <span
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "11px",
              background: "#e8321a",
              color: "#faf7f0",
              padding: "2px 7px",
              borderRadius: "3px",
              letterSpacing: "0.08em",
            }}
          >
            BETA
          </span>
        </div>
      </div>

      {/* Giant background wordmark */}
      <div
        className="overflow-hidden pointer-events-none select-none pb-2 text-center"
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(60px, 18vw, 180px)",
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        SEMESTRO
      </div>
    </footer>
  );
}
