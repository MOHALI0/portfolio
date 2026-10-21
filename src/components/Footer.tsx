"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-4 pb-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-400">
        {/* Left: Copyright */}
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {personal.name}</span>
          <span>•</span>
          <span>All rights reserved</span>
        </div>

        {/* Center: Tech Badge */}
        <div className="flex items-center gap-1 text-[11px] text-zinc-400 dark:text-zinc-500">
          <span>Engineered with Next.js, React 19 & Tailwind CSS</span>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            title="Scroll to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
