import Link from "next/link";
import {
  PlusCircle,
  Package,
  MapPinned,
  Users,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Create Shipment",
    description: "Register a new shipment into the system.",
    href: "/admin/shipments/create",
    icon: PlusCircle,
    color: "bg-blue-600",
  },
  {
    title: "Manage Shipments",
    description: "View, edit and organize all shipments.",
    href: "/admin/shipments",
    icon: Package,
    color: "bg-emerald-600",
  },
  {
    title: "Tracking History",
    description: "Update shipment locations and status.",
    href: "/admin/tracking-history",
    icon: MapPinned,
    color: "bg-amber-500",
  },
  {
    title: "Manage Users",
    description: "Control administrator accounts.",
    href: "/admin/users",
    icon: Users,
    color: "bg-violet-600",
  },
  {
    title: "Reports",
    description: "View logistics analytics and reports.",
    href: "/admin/reports",
    icon: BarChart3,
    color: "bg-cyan-600",
  },
  {
    title: "Settings",
    description: "Configure system preferences.",
    href: "/admin/settings",
    icon: Settings,
    color: "bg-slate-700",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>

        <p className="mt-2 text-slate-500">
          Frequently used shortcuts for managing your logistics platform.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#1E3A8A] hover:shadow-xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white ${action.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                {action.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-medium text-[#1E3A8A] transition-all group-hover:gap-3">
                Open
                <ArrowRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
