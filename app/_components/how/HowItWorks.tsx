"use client";

const steps = [
  {
    number: "01",
    title: "Sign up with your college ID",
    desc: "Use your university registration number or college email. We verify you're a real Bihar engineering student — takes 30 seconds.",
    tag: "30 seconds",
    tagBg: "#ffe033",
    rotate: "-2deg",
    noteColor: "#fffde7",
    detail: "Supports BNMU, LNMU, VKSU, TMBU, Patliputra University & more",
  },
  {
    number: "02",
    title: "Enter your marks & attendance",
    desc: "Add your subject-wise internal marks, attendance count, and total classes held. Or let us sync directly if your college uses a supported ERP.",
    tag: "One time setup",
    tagBg: "#c8f7dc",
    rotate: "1.5deg",
    noteColor: "#f1f8e9",
    detail: "Manual entry takes ~4 minutes. ERP sync is instant.",
  },
  {
    number: "03",
    title: "Get your full academic picture",
    desc: "Instantly see your pass probability, rank estimate, CGPA trajectory, attendance risk, and a personalised action plan.",
    tag: "Instant results",
    tagBg: "#d6e4ff",
    rotate: "-1deg",
    noteColor: "#e8eaf6",
    detail: "Updated every time you add new data or marks are declared.",
  },
  {
    number: "04",
    title: "Act on smart recommendations",
    desc: "Know which classes to prioritise, which subjects need more study time, when to file RTI, and how to hit your CGPA target.",
    tag: "Stay ahead",
    tagBg: "#ffd6e0",
    rotate: "2deg",
    noteColor: "#fce4ec",
    detail: "AI assistant available 24/7 for any academic question.",
  },
];

const faqs = [
  {
    q: "Is it free?",
    a: "Core features — attendance, results, notices, notes — are free forever. Predictions, AI assistant, and RTI tools are premium.",
  },
  {
    q: "Which universities are supported?",
    a: "All major Bihar universities: BNMU, LNMU, VKSU, TMBU, Patliputra, Magadh, and more being added every month.",
  },
  {
    q: "How accurate is the rank predictor?",
    a: "Built on 3 years of historical result data. Accuracy within ±15% for most branches. Improves as more students join.",
  },
  {
    q: "Can my college see my data?",
    a: "Never. Your data is private to you. Colleges only get anonymised aggregate insights if they subscribe to the institutional plan.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 px-5 overflow-hidden"
      style={{ background: "#faf7f0" }}
    >
      {/* Top ruled border */}
      <div
        style={{
          borderTop: "2.5px solid #0f0e0c",
          marginBottom: "64px",
        }}
      />

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
              — no confusion, no manual
            </p>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(36px, 6vw, 60px)",
                color: "#0f0e0c",
                lineHeight: 1,
              }}
            >
              HOW IT
              <br />
              <span
                style={{
                  WebkitTextStroke: "2.5px #0f0e0c",
                  color: "transparent",
                }}
              >
                WORKS
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
            Up and running in under 5 minutes. No tutorials needed — built to be
            obvious.
          </p>
        </div>

        {/* Steps — alternating layout */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            className="absolute left-8 top-0 bottom-0 hidden md:block"
            style={{
              width: "2px",
              background: "#0f0e0c",
              opacity: 0.08,
              zIndex: 0,
            }}
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} gap-6 items-stretch`}
                >
                  {/* Step number pill */}
                  <div className="hidden md:flex items-start pt-5 px-4 z-10">
                    <div
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "13px",
                        background: "#0f0e0c",
                        color: "#faf7f0",
                        width: "40px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        flexShrink: 0,
                        border: "2.5px solid #0f0e0c",
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Main card */}
                  <div
                    className="flex-1 p-6 transition-all duration-150 group cursor-default"
                    style={{
                      background: step.noteColor,
                      border: "2.5px solid #0f0e0c",
                      borderRadius: "4px",
                      boxShadow: "5px 5px 0 #0f0e0c",
                      transform: `rotate(${step.rotate})`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform =
                        "rotate(0deg) translate(3px,3px)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "2px 2px 0 #0f0e0c";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform =
                        `rotate(${step.rotate})`;
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "5px 5px 0 #0f0e0c";
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      {/* Mobile step number */}
                      <div
                        className="md:hidden text-xs font-black"
                        style={{
                          fontFamily: "'Archivo Black', sans-serif",
                          background: "#0f0e0c",
                          color: "#faf7f0",
                          padding: "2px 8px",
                          borderRadius: "3px",
                          fontSize: "12px",
                        }}
                      >
                        {step.number}
                      </div>
                      <div
                        className="inline-flex items-center px-2.5 py-0.5"
                        style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: "15px",
                          background: step.tagBg,
                          color: "#0f0e0c",
                          border: "2px solid #0f0e0c",
                          borderRadius: "3px",
                          fontWeight: 700,
                        }}
                      >
                        {step.tag}
                      </div>
                    </div>

                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: "'Archivo Black', sans-serif",
                        fontSize: "clamp(18px, 3vw, 24px)",
                        color: "#0f0e0c",
                        lineHeight: 1.1,
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        color: "#0f0e0c",
                        opacity: 0.6,
                        lineHeight: 1.7,
                        marginBottom: "12px",
                      }}
                    >
                      {step.desc}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "15px",
                        color: "#e8321a",
                        opacity: 0.8,
                      }}
                    >
                      ✎ {step.detail}
                    </p>
                  </div>

                  {/* Visual mockup side */}
                  <div
                    className="flex-1 flex items-center justify-center p-5 min-h-[160px]"
                    style={{
                      background: "#0f0e0c",
                      border: "2.5px solid #0f0e0c",
                      borderRadius: "4px",
                      boxShadow: "5px 5px 0 #0f0e0c",
                    }}
                  >
                    <StepVisual index={i} bg={step.tagBg} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ strip */}
        <div className="mt-20">
          <div
            className="inline-block mb-8 px-5 py-2"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "13px",
              background: "#e8321a",
              color: "#faf7f0",
              borderRadius: "3px",
              border: "2.5px solid #0f0e0c",
              boxShadow: "3px 3px 0 #0f0e0c",
              letterSpacing: "0.08em",
            }}
          >
            QUICK QUESTIONS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5"
                style={{
                  background: i % 2 === 0 ? "#fffde7" : "#faf7f0",
                  border: "2.5px solid #0f0e0c",
                  borderRadius: "4px",
                  boxShadow: "4px 4px 0 #0f0e0c",
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "15px",
                    color: "#0f0e0c",
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#0f0e0c",
                    opacity: 0.6,
                    lineHeight: 1.65,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Step visual mini-mockups ─────────────────────────────────── */

function StepVisual({ index, bg }: { index: number; bg: string }) {
  if (index === 0)
    return (
      <div className="w-full max-w-xs space-y-3">
        {["Registration No.", "College", "Branch"].map((label, i) => (
          <div key={label}>
            <p
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "12px",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "4px",
              }}
            >
              {label}
            </p>
            <div
              style={{
                height: "34px",
                background: i === 0 ? bg : "rgba(255,255,255,0.06)",
                border: "2px solid",
                borderColor: i === 0 ? bg : "rgba(255,255,255,0.12)",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: i === 0 ? "#0f0e0c" : "rgba(255,255,255,0.25)",
                }}
              >
                {i === 0 ? "22BNMU0421" : i === 1 ? "Select..." : "Select..."}
              </span>
            </div>
          </div>
        ))}
        <div
          style={{
            marginTop: "4px",
            height: "38px",
            background: "#ffe033",
            border: "2px solid #ffe033",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "13px",
            color: "#0f0e0c",
          }}
        >
          Verify & Continue →
        </div>
      </div>
    );

  if (index === 1)
    return (
      <div className="w-full max-w-xs space-y-2">
        {[
          { sub: "DBMS", int: 34, total: 44 },
          { sub: "OS", int: 31, total: 40 },
          { sub: "CN", int: 38, total: 45 },
          { sub: "TOC", int: 29, total: 38 },
        ].map((row) => (
          <div
            key={row.sub}
            className="flex items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1.5px solid rgba(255,255,255,0.1)",
              borderRadius: "3px",
              padding: "8px 10px",
            }}
          >
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "12px",
                color: bg,
                width: "36px",
              }}
            >
              {row.sub}
            </span>
            <div
              style={{
                flex: 1,
                height: "4px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(row.int / 50) * 100}%`,
                  height: "100%",
                  background: bg,
                  borderRadius: "2px",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              {row.int}/{row.total}
            </span>
          </div>
        ))}
      </div>
    );

  if (index === 2)
    return (
      <div className="w-full max-w-xs">
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1.5px solid rgba(255,255,255,0.1)",
            borderRadius: "4px",
            padding: "14px",
          }}
        >
          <p
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "rgba(255,255,255,0.3)",
              marginBottom: "6px",
            }}
          >
            Academic health
          </p>
          <p
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "36px",
              color: bg,
              lineHeight: 1,
            }}
          >
            74<span style={{ fontSize: "16px" }}>/100</span>
          </p>
          <div
            style={{
              height: "6px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "3px",
              marginTop: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "74%",
                height: "100%",
                background: bg,
                borderRadius: "3px",
              }}
            />
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            {[
              { l: "Pass", v: "87%", c: "#c8f7dc" },
              { l: "Rank", v: "~312", c: "#d6e4ff" },
            ].map((b) => (
              <div
                key={b.l}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: "3px",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: "16px",
                    color: b.c,
                  }}
                >
                  {b.v}
                </p>
                <p
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.3)",
                  }}
                >
                  {b.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-xs space-y-2">
      {[
        { msg: "You can skip 0 more DBMS classes.", who: "ai" },
        { msg: "How do I hit 8.5 CGPA?", who: "user" },
        {
          msg: "You need 9.2 SGPA in Sem 6 & 7. Start with CN — it's your highest-weight subject.",
          who: "ai",
        },
      ].map((m, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: m.who === "user" ? "flex-end" : "flex-start",
          }}
        >
          <div
            style={{
              maxWidth: "80%",
              padding: "8px 11px",
              borderRadius: "3px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              lineHeight: 1.5,
              background: m.who === "user" ? bg : "rgba(255,255,255,0.07)",
              color: m.who === "user" ? "#0f0e0c" : "rgba(255,255,255,0.5)",
              border:
                m.who === "ai" ? "1.5px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            {m.msg}
          </div>
        </div>
      ))}
    </div>
  );
}
