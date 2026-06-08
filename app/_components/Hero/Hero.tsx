"use client";

import Link from "next/link";

const marqueeItems = [
  "CGPA TRACKER",
  "PASS PREDICTOR",
  "RANK ESTIMATOR",
  "BUNK CALCULATOR",
  "RTI ADVISOR",
  "PLACEMENT PREP",
  "AI ASSISTANT",
  "NOTES HUB",
  "CGPA TRACKER",
  "PASS PREDICTOR",
  "RANK ESTIMATOR",
  "BUNK CALCULATOR",
  "RTI ADVISOR",
  "PLACEMENT PREP",
  "AI ASSISTANT",
  "NOTES HUB",
];

const floatingTags = [
  {
    text: "74% attendance ⚠️",
    rotate: "-6deg",
    top: "18%",
    left: "2%",
    bg: "#ffe033",
    delay: "0.3s",
  },
  {
    text: "CGPA: 7.84 📈",
    rotate: "5deg",
    top: "12%",
    right: "3%",
    bg: "#c8f7dc",
    delay: "0.5s",
  },
  {
    text: "Rank ~312 🏅",
    rotate: "-4deg",
    bottom: "28%",
    left: "1%",
    bg: "#ffd6e0",
    delay: "0.7s",
  },
  {
    text: "Pass prob: 87% ✅",
    rotate: "7deg",
    bottom: "22%",
    right: "2%",
    bg: "#d6e4ff",
    delay: "0.9s",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen ruled-bg flex flex-col items-center justify-center overflow-hidden pt-20 pb-0"
      style={{ background: "#faf7f0" }}
    >
      {/* Red left margin line */}
      <div
        className="absolute top-0 bottom-0 hidden lg:block"
        style={{
          left: "72px",
          width: "2px",
          background: "#e8321a",
          opacity: 0.4,
        }}
      />

      {/* Floating sticky-note tags */}
      {floatingTags.map((tag, i) => (
        <div
          key={i}
          className="absolute hidden lg:flex items-center px-3 py-1.5 text-xs font-semibold animate-float-up"
          style={{
            top: tag.top,
            bottom: tag.bottom,
            left: tag.left,
            right: tag.right,
            background: tag.bg,
            border: "2px solid #0f0e0c",
            borderRadius: "3px",
            boxShadow: "3px 3px 0 #0f0e0c",
            transform: `rotate(${tag.rotate})`,
            fontFamily: "'Caveat', cursive",
            fontSize: "15px",
            animationDelay: tag.delay,
            whiteSpace: "nowrap",
            zIndex: 10,
          }}
        >
          {tag.text}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Rubber stamp badge */}
        <div
          className="animate-stamp mb-6 inline-flex items-center gap-2 px-4 py-1.5"
          style={{
            border: "2.5px solid #e8321a",
            color: "#e8321a",
            borderRadius: "3px",
            fontFamily: "'Caveat', cursive",
            fontSize: "16px",
            transform: "rotate(-2deg)",
            background: "rgba(232,49,26,0.05)",
          }}
        >
          ★ Made for Bihar Engineering Students ★
        </div>

        {/* Big headline */}
        <h1
          className="animate-float-up leading-none tracking-tight mb-2"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(52px, 10vw, 100px)",
            color: "#0f0e0c",
            lineHeight: 0.95,
          }}
        >
          YOUR
        </h1>
        <h1
          className="animate-float-up delay-100 leading-none relative inline-block mb-2"
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(52px, 10vw, 100px)",
            color: "#faf7f0",
            lineHeight: 0.95,
            WebkitTextStroke: "3px #0f0e0c",
          }}
        >
          ACADEMIC
        </h1>
        <div className="relative animate-float-up delay-200 mb-6">
          <h1
            className="leading-none"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(52px, 10vw, 100px)",
              lineHeight: 0.95,
              color: "#0f0e0c",
              position: "relative",
              zIndex: 1,
            }}
          >
            OS
          </h1>
          <div
            style={{
              position: "absolute",
              bottom: "6px",
              left: "-8px",
              right: "-8px",
              height: "22px",
              background: "#ffe033",
              zIndex: 0,
              transform: "rotate(-1deg)",
            }}
          />
        </div>

        {/* Subtext */}
        <p
          className="animate-float-up delay-300 max-w-lg leading-relaxed mb-8"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "#0f0e0c",
            opacity: 0.65,
          }}
        >
          Track attendance. Predict your pass chances. Plan your CGPA. Challenge
          unfair results. All in one app — built for{" "}
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "20px",
              color: "#1a3fcc",
              fontWeight: 700,
            }}
          >
            students like you.
          </span>
        </p>

        {/* CTA row */}
        <div className="animate-float-up delay-400 flex flex-col sm:flex-row items-center gap-4 mb-10">
          <Link
            href="/register"
            className="group relative px-8 py-3.5 text-base font-black transition-all"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              background: "#e8321a",
              color: "#faf7f0",
              border: "2.5px solid #0f0e0c",
              borderRadius: "4px",
              boxShadow: "5px 5px 0 #0f0e0c",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "2px 2px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(3px,3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "5px 5px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(0,0)";
            }}
          >
            Start for free →
          </Link>
          <Link
            href="#features"
            className="px-6 py-3.5 text-sm font-semibold transition-all"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#0f0e0c",
              border: "2.5px solid #0f0e0c",
              borderRadius: "4px",
              boxShadow: "4px 4px 0 #0f0e0c",
              background: "#faf7f0",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "2px 2px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(2px,2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "4px 4px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(0,0)";
            }}
          >
            See all features
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="animate-float-up delay-500 grid grid-cols-3 w-full max-w-2xl"
          style={{
            border: "2.5px solid #0f0e0c",
            borderRadius: "4px",
            boxShadow: "5px 5px 0 #0f0e0c",
          }}
        >
          {[
            { val: "90,000+", label: "Students", color: "#ffe033" },
            { val: "87%", label: "Pass rate↑", color: "#c8f7dc" },
            { val: "48+", label: "Colleges", color: "#d6e4ff" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-5 flex flex-col items-center"
              style={{
                borderRight: i < 2 ? "2.5px solid #0f0e0c" : "none",
                background: s.color,
              }}
            >
              <span
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: "28px",
                  color: "#0f0e0c",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </span>
              <span
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "16px",
                  color: "#0f0e0c",
                  opacity: 0.65,
                  marginTop: "3px",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div
        className="w-full mt-14 py-3 overflow-hidden"
        style={{
          borderTop: "2.5px solid #0f0e0c",
          borderBottom: "2.5px solid #0f0e0c",
          background: "#0f0e0c",
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className="mx-6 text-sm font-black tracking-widest"
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                color:
                  i % 4 === 0
                    ? "#ffe033"
                    : i % 4 === 1
                      ? "#e8321a"
                      : i % 4 === 2
                        ? "#c8f7dc"
                        : "#d6e4ff",
              }}
            >
              {item} ✦
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
