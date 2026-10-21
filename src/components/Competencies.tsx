"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Layout, Server, BarChart3, Users, CheckCircle } from "lucide-react";

export default function Competencies() {
  const { competencies } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    layout: <Layout className="w-5 h-5" />,
    server: <Server className="w-5 h-5" />,
    chart: <BarChart3 className="w-5 h-5" />,
    users: <Users className="w-5 h-5" />,
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      <div className="portfolio-island p-8 sm:p-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-snug">
            Collaborate with high-impact teams <br className="hidden sm:inline" />
            to create impactful results.
          </h2>
        </div>

        {/* 4-Column Competency Grid (matching inspiration layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 rounded-3xl bg-zinc-50/70 dark:bg-zinc-800/30 border border-zinc-200/60 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md transition-all group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-700/60 flex items-center justify-center text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-colors mb-4">
                {iconMap[comp.icon] || <CheckCircle className="w-5 h-5" />}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {comp.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-6 flex-grow">
                {comp.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                {comp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
