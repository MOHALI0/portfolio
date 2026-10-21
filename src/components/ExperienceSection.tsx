"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Trophy,
  GraduationCap,
  Users,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Bookmark,
} from "lucide-react";

export default function ExperienceSection() {
  const { milestones } = portfolioData;

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case "award":
        return <Trophy className="w-4 h-4 text-amber-500" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-blue-500" />;
      case "leadership":
        return <Users className="w-4 h-4 text-emerald-500" />;
      case "certification":
        return <Award className="w-4 h-4 text-purple-500" />;
      default:
        return <Bookmark className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <section id="experience" className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-8">
      <div className="portfolio-island p-8 sm:p-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold glass-pill mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Trajectory & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Experience & Milestones
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
            A chronological timeline of hackathon leadership, community impact, and academic accomplishments.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors shadow-sm">
                {getBadgeIcon(item.badgeType)}
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-200/70 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-md">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-zinc-200/70 dark:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 font-medium hidden sm:flex">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Title & Role */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
                  {item.role}
                </p>

                {/* Narrative description */}
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet achievements */}
                <div className="space-y-1.5 mb-5">
                  {item.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
