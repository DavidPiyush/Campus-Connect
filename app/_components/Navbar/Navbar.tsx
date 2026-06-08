"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Colleges", href: "#colleges" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "#faf7f0" : "transparent",
        borderBottom: scrolled
          ? "2.5px solid #0f0e0c"
          : "2.5px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 flex items-center justify-center font-display text-sm text-[#faf7f0] select-none"
            style={{
              background: "#0f0e0c",
              border: "2px solid #0f0e0c",
              borderRadius: "4px",
              boxShadow: "2px 2px 0 #e8321a",
              fontFamily: "'Archivo Black', sans-serif",
            }}
          >
            S
          </div>
          <span
            className="text-base tracking-tight"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              color: "#0f0e0c",
            }}
          >
            Semestro
          </span>
          <span
            className="text-[10px] px-1.5 py-0.5 ml-0.5 hidden sm:inline-block"
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: "13px",
              color: "#e8321a",
              border: "1.5px solid #e8321a",
              borderRadius: "3px",
              transform: "rotate(-2deg)",
              display: "inline-block",
            }}
          >
            BETA
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium transition-all hover:underline decoration-2 underline-offset-4"
              style={{ color: "#0f0e0c", fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium px-4 py-1.5 transition-all hover:underline decoration-2 underline-offset-4"
            style={{ color: "#0f0e0c" }}
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold px-5 py-2 transition-all"
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              background: "#ffe033",
              color: "#0f0e0c",
              border: "2.5px solid #0f0e0c",
              borderRadius: "4px",
              boxShadow: "3px 3px 0 #0f0e0c",
              fontSize: "13px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "1px 1px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(2px,2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "3px 3px 0 #0f0e0c";
              (e.currentTarget as HTMLElement).style.transform =
                "translate(0,0)";
            }}
          >
            Join free →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1"
          aria-label="Toggle menu"
          style={{ color: "#0f0e0c" }}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "#faf7f0",
            borderTop: "2.5px solid #0f0e0c",
            borderBottom: "2.5px solid #0f0e0c",
          }}
        >
          <nav className="flex flex-col px-5 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-sm font-medium border-b"
                style={{ borderColor: "#0f0e0c30", color: "#0f0e0c" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/login"
                className="py-2.5 text-sm font-medium"
                style={{ color: "#0f0e0c" }}
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="py-2.5 text-sm font-semibold text-center"
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  background: "#ffe033",
                  border: "2.5px solid #0f0e0c",
                  borderRadius: "4px",
                  boxShadow: "3px 3px 0 #0f0e0c",
                  color: "#0f0e0c",
                }}
              >
                Join free →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
