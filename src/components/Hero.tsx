"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, FileDown, Sparkles, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-6 pb-8">
      {/* Primary Hero Island */}
      <div className="portfolio-island relative overflow-hidden px-6 sm:px-12 pt-14 pb-12 text-center flex flex-col items-center">
        {/* Subtle background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Status indicator pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-pill mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulsing-dot" />
          <span className="text-zinc-700 dark:text-zinc-300">{personal.status.text}</span>
        </div>

        {/* Avatar with floating greeting sticker (Inspired by reference) */}
        <div className="relative mb-6">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1 ring-2 ring-emerald-500/30 shadow-xl bg-zinc-900">
            <Image
              src="/avatar.jpg"
              alt={personal.name}
              width={128}
              height={128}
              priority
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Floating name badge sticker */}
          <div className="absolute -top-1 -right-8 sm:-right-10 bg-zinc-800/90 backdrop-blur-md border border-zinc-700 text-zinc-100 px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-6 flex items-center gap-1.5 select-none pointer-events-none">
            <span>{personal.shortName}</span>
            <span className="text-sm">👋</span>
          </div>
        </div>

        {/* Location pill */}
        <div className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-4">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>{personal.location}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-4xl leading-[1.15] mb-6">
          Building digital products, <br className="hidden sm:inline" />
          <span className="text-zinc-800 dark:text-zinc-200">systems, and experiences.</span>
        </h1>

        {/* Supporting Bio */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed mb-9">
          {personal.heroBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {/* Main CTA */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md hover:shadow-lg group"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary CV CTA */}
          <a
            href="/resume.pdf"
            download="Mohammed_Ali_Al_Sidran_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 text-sm font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
          >
            <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/60 text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
