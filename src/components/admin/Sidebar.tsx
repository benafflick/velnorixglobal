"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  PlusSquare,
  History,
  Settings,
  Users,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "All Shipments",
    href: "/admin/shipments",
    icon: Package,
  },
  {
    title: "Add Shipment",
    href: "/admin/shipments/create",
    icon: PlusSquare,
  },
  {
    title: "Tracking History",
    href: "/admin/tracking-history",
    icon: History,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col bg-[#08142f] text-white shadow-2xl">
      {/* Logo */}
      <div className="border-b border-white/10 px-8 py-7">
        <Link href="/admin" className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="Velnorix Global"
            className="h-11 w-11 object-contain"
          />

          <div>
            <h2 className="text-xl font-bold tracking-wide">VelnorixGlobal</h2>

            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Admin Panel
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-5">
        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-[#1E3A8A] text-white shadow-lg"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="border-t border-white/10 p-5">
        <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
          <div>
            <h3 className="font-semibold">Admin</h3>

            <p className="text-sm text-slate-400">admin@velnorixglobal.com</p>
          </div>

          <button className="cursor-pointer rounded-lg p-2 transition hover:bg-red-500">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
