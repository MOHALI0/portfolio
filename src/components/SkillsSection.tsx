"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  Layers,
  Database,
  Cpu,
  Terminal,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Check,
} from "lucide-react";

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const marqueeSkills = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Python 3",
    "Java OOP",
    "SQL Databases",
    "Pandas & NumPy",
    "REST APIs",
    "Framer Motion",
    "Git & Linux",
    "Data Structures",
    "Agile Delivery",
  ];

  return (
    <section id="skills" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      <div className="portfolio-island p-8 sm:p-12 overflow-hidden">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill mb-4">
            <Cpu className="w-3.5 h-3.5 text-emerald-500" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Skills & Technical Proficiencies
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
            A comprehensive breakdown of frameworks, programming languages, and engineering competencies.
          </p>
        </div>

        {/* Marquee Ticker (Inspired by e41f5bfa-27c3-4adf-902d-ae7aba247e27.png) */}
        <div className="relative w-full overflow-hidden py-3 mb-10 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-700/60">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {[...marqueeSkills, ...marqueeSkills].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                <span>{item}</span>
                <span className="text-emerald-500">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {skills.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
                activeTab === idx
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                  : "bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {skills[activeTab].skills.map((skill, sIdx) => (
            <div
              key={sIdx}
              className={`p-4 rounded-2xl border transition-all ${
                skill.highlight
                  ? "bg-zinc-50 dark:bg-zinc-800/60 border-emerald-500/30 dark:border-emerald-500/20 shadow-sm"
                  : "bg-white/60 dark:bg-zinc-900/40 border-zinc-200/60 dark:border-zinc-800"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                  {skill.level}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Coursework & Theoretical Foundations Card */}
        <div className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-700/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                Academic Rigor & Theoretical Foundation
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                B.Sc. in Computer Science at Jazan University with a Cumulative GPA of 4.80 / 5.00.
                Mastery in Data Structures & Algorithms, Object-Oriented System Architecture (Java), Database Management (SQL), and Software Engineering Principles.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-center">
              <span className="block text-xs font-bold text-emerald-600 dark:text-emerald-400">
                4.80 / 5.00
              </span>
              <span className="text-[10px] text-zinc-400 font-medium">Cumulative GPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
