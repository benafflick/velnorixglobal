// Sidebar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  PlusSquare,
  History,
  Users,
  Settings,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const mainMenu = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "All Shipments", href: "/admin/shipments", icon: Package },
  {
    title: "Create Shipment",
    href: "/admin/shipments/create",
    icon: PlusSquare,
  },
  { title: "Tracking History", href: "/admin/tracking-history", icon: History },
];

const managementMenu = [
  { title: "Users", href: "/admin/users", icon: Users },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navLink = (item: { title: string; href: string; icon: any }) => {
    const Icon = item.icon;
    const active =
      pathname === item.href || pathname.startsWith(item.href + "/");

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClose}
        className={`group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200 ${
          active
            ? "bg-[#1E3A8A] text-white shadow-lg"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        <div className="flex items-center gap-4">
          <Icon size={20} className="transition group-hover:scale-110" />
          <span className="font-medium">{item.title}</span>
        </div>

        <ChevronRight
          size={18}
          className={`transition ${
            active
              ? "translate-x-0 opacity-100"
              : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          }`}
        />
      </Link>
    );
  };

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-hidden border-r border-slate-800 bg-[#08142f] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-800 px-6">
          <Link href="/admin" className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Velnorix Global"
              width={46}
              height={46}
              priority
            />
            <div>
              <h2 className="text-lg font-bold text-white">VelnorixGlobal</h2>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Admin Panel
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-xl p-2 hover:bg-white/10 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Main
          </p>
          <div className="space-y-2">{mainMenu.map(navLink)}</div>

          <div className="my-8 border-t border-slate-800" />

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Management
          </p>
          <div className="space-y-2">{managementMenu.map(navLink)}</div>
        </div>

        <div className="border-t border-slate-800 p-5">
          <div className="rounded-2xl bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A8A] text-lg font-bold text-white">
                A
              </div>

              <div>
                <h3 className="font-semibold text-white">Administrator</h3>
                <p className="text-sm text-slate-400">Super Admin</p>
              </div>
            </div>

            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
