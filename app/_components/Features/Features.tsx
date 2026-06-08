"use client";

import {
  CalendarCheck,
  TrendingUp,
  Medal,
  Target,
  Scale,
  BookOpen,
  Briefcase,
  BotMessageSquare,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    label: "Attendance Tracker",
    tag: "Most used",
    tagColor: "#ffe033",
    desc: "Know exactly how many classes you can skip. Live bunk calculator. Shortage alerts. Safe leave planner.",
    accent: "#ffe033",
    size: "large",
    rotate: "-1deg",
    link: "attendance-tracker",
  },
  {
    icon: TrendingUp,
    label: "Pass Probability",
    tag: "AI powered",
    tagColor: "#c8f7dc",
    desc: "Predicts passing chances using attendance, internal marks, and subject difficulty. Get risk alerts before it's too late.",
    accent: "#c8f7dc",
    size: "small",
    rotate: "1deg",
    link: "pass-probability",
  },
  {
    icon: Medal,
    label: "Rank Predictor",
    tag: "Unique",
    tagColor: "#d6e4ff",
    desc: "Estimate your branch, college, and university rank against real historical distributions.",
    accent: "#d6e4ff",
    size: "small",
    rotate: "-2deg",
    link: "rank-predictor",
  },
  {
    icon: Target,
    label: "CGPA Strategy Engine",
    tag: "Goal based",
    tagColor: "#ffd6e0",
    desc: "Set a CGPA target and get a precise semester-by-semester roadmap to hit it.",
    accent: "#ffd6e0",
    size: "small",
    rotate: "2deg",
    link: "cgpa-strategy-engine",
  },
  {
    icon: Scale,
    label: "RTI Advisor",
    tag: "Only us",
    tagColor: "#ffe0b2",
    desc: "Spot suspicious results. Get RTI templates, timelines, fee info, and step-by-step filing guidance.",
    accent: "#ffe0b2",
    size: "small",
    rotate: "-1.5deg",
    link: "rti-advisor",
  },
  {
    icon: BookOpen,
    label: "Notes Hub",
    tag: "Community",
    tagColor: "#e8f5e9",
    desc: "PYQs, lab manuals, video lectures, and community-uploaded notes — all searchable.",
    accent: "#e8f5e9",
    size: "small",
    rotate: "1.5deg",
    link: "notes-hub",
  },
  {
    icon: Briefcase,
    label: "Placement Tracker",
    tag: "Career",
    tagColor: "#fce4ec",
    desc: "DSA progress, aptitude prep, resume tracking, and company eligibility checks in one dashboard.",
    accent: "#fce4ec",
    size: "small",
    rotate: "-2deg",
    link: "placement-tracker",
  },
  {
    icon: BotMessageSquare,
    label: "AI Assistant",
    tag: "Always on",
    tagColor: "#ede7f6",
    desc: "Ask anything — attendance math, RTI queries, CGPA planning, exam schedules. Instant smart answers.",
    accent: "#ede7f6",
    size: "large",
    rotate: "1deg",
    link: "ai-assistant",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 px-5 overflow-hidden"
      style={{ background: "#faf7f0" }}
    >
      {/* Top border */}
      <div style={{ borderTop: "2.5px solid #0f0e0c", marginBottom: "64px" }} />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "20px",
                color: "#e8321a",
                marginBottom: "8px",
              }}
            >
              — everything you need
            </p>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(36px, 6vw, 60px)",
                color: "#0f0e0c",
                lineHeight: 1,
              }}
            >
              15 MODULES.
              <br />
              <span
                style={{
                  WebkitTextStroke: "2.5px #0f0e0c",
                  color: "transparent",
                }}
              >
                ONE PLATFORM.
              </span>
            </h2>
          </div>
          <p
            className="max-w-xs"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "#0f0e0c",
              opacity: 0.55,
              lineHeight: 1.7,
            }}
          >
            From semester 1 to placement day — every tool an engineering student
            in Bihar actually needs.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isLarge = f.size === "large";
            return (
              <div
                key={f.label}
                className={`group relative flex flex-col p-5 transition-all duration-150 cursor-pointer ${
                  isLarge ? "lg:col-span-2" : ""
                }`}
                style={{
                  background: f.accent,
                  border: "2.5px solid #0f0e0c",
                  borderRadius: "4px",
                  boxShadow: "5px 5px 0 #0f0e0c",
                  transform: `rotate(${f.rotate})`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "2px 2px 0 #0f0e0c";
                  (e.currentTarget as HTMLElement).style.transform =
                    `rotate(0deg) translate(3px,3px)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "5px 5px 0 #0f0e0c";
                  (e.currentTarget as HTMLElement).style.transform =
                    `rotate(${f.rotate})`;
                }}
              >
                {/* Tag */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="inline-flex items-center px-2.5 py-0.5 text-xs font-bold"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: "14px",
                      background: "#0f0e0c",
                      color: f.accent,
                      borderRadius: "3px",
                    }}
                  >
                    {f.tag}
                  </div>
                  <Icon
                    className="w-5 h-5 opacity-40"
                    style={{ color: "#0f0e0c" }}
                  />
                </div>

                {/* Label */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: isLarge ? "22px" : "17px",
                    color: "#0f0e0c",
                    lineHeight: 1.1,
                  }}
                >
                  {f.label}
                </h3>

                {/* Desc */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#0f0e0c",
                    opacity: 0.6,
                    lineHeight: 1.65,
                  }}
                >
                  {f.desc}
                </p>

                {/* Arrow CTA */}
                <div
                  className="mt-4 self-start text-xs font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    color: "#0f0e0c",
                  }}
                >
                  <a href={f.link}>EXPLORE →</a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5"
          style={{
            border: "2.5px solid #0f0e0c",
            borderRadius: "4px",
            boxShadow: "5px 5px 0 #0f0e0c",
            background: "#0f0e0c",
          }}
        >
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "22px",
              color: "#ffe033",
            }}
          >
            Ready to stop guessing and start knowing?
          </p>
          <a
            href="/register"
            className="shrink-0 px-7 py-2.5 font-black text-sm tracking-wide transition-all"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              background: "#ffe033",
              color: "#0f0e0c",
              border: "2.5px solid #ffe033",
              borderRadius: "4px",
              boxShadow: "3px 3px 0 #ffe03380",
            }}
          >
            Join free →
          </a>
        </div>
      </div>
    </section>
  );
}
