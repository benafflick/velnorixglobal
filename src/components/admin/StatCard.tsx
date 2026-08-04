"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import CountUp from "react-countup";

interface StatCardProps {
  title: string;
  value: number;
  change: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  title,
  value,
  change,
  description,
  icon: Icon,
  color,
}: StatCardProps) {
  const positive = change.startsWith("+");

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Background Glow */}
      <div
        className={`absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-10 blur-3xl ${color}`}
      />

      <div className="relative z-10">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">{title}</p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900">
              <CountUp end={value} duration={2} separator="," />
            </h2>

            <p className="mt-2 text-sm text-slate-400">{description}</p>
          </div>

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${color}`}
          >
            <Icon size={30} />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between">
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
              positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}

            {change}
          </div>

          <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
            vs last month
          </span>
        </div>
      </div>
    </div>
  );
}
