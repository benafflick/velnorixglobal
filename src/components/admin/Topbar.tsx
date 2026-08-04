// Topbar.tsx
"use client";

import { Bell, Search, ChevronDown, Menu } from "lucide-react";

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

            <p className="text-sm text-slate-500">
              Welcome back, Administrator 👋
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="relative hidden md:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search shipments..."
              className="h-11 w-72 lg:w-80 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E3A8A] focus:bg-white"
            />
          </div>

          <button className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">
            <Bell size={20} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E3A8A] text-lg font-bold text-white">
              A
            </div>

            <div className="hidden text-left md:block">
              <h3 className="text-sm font-semibold text-slate-900">
                Administrator
              </h3>

              <p className="text-xs text-slate-500">Super Admin</p>
            </div>

            <ChevronDown size={18} className="hidden text-slate-500 md:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
