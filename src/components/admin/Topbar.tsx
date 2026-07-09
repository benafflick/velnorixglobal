"use client";

import { Bell, Search, ChevronDown, Menu } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

          <p className="text-sm text-slate-500">Welcome back, Admin 👋</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search shipments..."
            className="h-11 w-80 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E3A8A] focus:bg-white"
          />
        </div>

        {/* Notification */}
        <button className="relative cursor-pointer rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* User */}
        <button className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E3A8A] text-lg font-bold text-white">
            A
          </div>

          <div className="hidden text-left md:block">
            <h3 className="text-sm font-semibold text-slate-900">
              Administrator
            </h3>

            <p className="text-xs text-slate-500">Super Admin</p>
          </div>

          <ChevronDown size={18} className="text-slate-500" />
        </button>
      </div>
    </header>
  );
}
