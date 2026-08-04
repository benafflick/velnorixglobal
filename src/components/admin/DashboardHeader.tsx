"use client";

import Link from "next/link";
import { Plus, CalendarDays, Package, Activity } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E3A8A] via-[#2248ad] to-[#10285f] p-8 text-white shadow-2xl">
      {/* Background Decorations */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Activity size={16} />

            <span className="text-sm font-medium tracking-wide">
              LIVE ADMIN DASHBOARD
            </span>
          </div>

          <p className="mt-6 text-lg font-medium text-blue-100">{greeting},</p>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Welcome back, Administrator 👋
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-blue-100">
            Manage shipments, monitor delivery performance, update tracking
            history and oversee your logistics operations from one centralized
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/admin/shipments/create"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-semibold text-[#1E3A8A] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Plus size={20} />
              Create Shipment
            </Link>

            <Link
              href="/admin/shipments"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              <Package size={20} />
              View Shipments
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <CalendarDays size={24} />

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                Today
              </p>

              <h3 className="mt-1 text-xl font-bold">{today}</h3>
            </div>
          </div>

          <div className="my-6 h-px bg-white/15" />

          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-blue-200">Dashboard Status</span>

              <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold">
                Online
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-blue-200">Active Session</span>

              <span className="font-semibold">Administrator</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-blue-200">Environment</span>

              <span className="font-semibold">Production</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
