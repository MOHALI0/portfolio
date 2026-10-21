"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Award, ShieldCheck, GraduationCap, Building2, Code2 } from "lucide-react";

export default function TrustTicker() {
  const { partners } = portfolioData;

  const partnerIcons = [
    { name: "Tuwaiq Academy", icon: ShieldCheck, badge: "FinTech Hackathon" },
    { name: "Alinma Bank", icon: Building2, badge: "Banking Partner" },
    { name: "Google Developer Student Clubs", icon: Code2, badge: "GDSC Organizer" },
    { name: "Jazan University", icon: GraduationCap, badge: "CS Bachelor (4.80 GPA)" },
    { name: "Coursera", icon: Award, badge: "Data Science Certified" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-4">
      <div className="portfolio-island p-6 sm:p-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-zinc-400 dark:text-zinc-500">
            Validated by Institutions, Competitions & Developer Ecosystems
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 items-center">
          {partnerIcons.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-3.5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-700/40 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 text-center"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-200/60 dark:bg-zinc-700/60 flex items-center justify-center mb-2 text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 tracking-tight leading-snug">
                  {partner.name}
                </span>
                <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {partner.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
