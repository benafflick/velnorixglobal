"use client";

import { Package, Truck, CheckCircle2, Clock3 } from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Total Shipments",
    value: 245,
    change: "+12.5%",
    description: "Compared to last month",
    icon: Package,
    color: "bg-[#1E3A8A]",
  },
  {
    title: "In Transit",
    value: 38,
    change: "+4.3%",
    description: "Currently moving",
    icon: Truck,
    color: "bg-blue-500",
  },
  {
    title: "Delivered",
    value: 182,
    change: "+18.6%",
    description: "Successfully delivered",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
  {
    title: "Pending",
    value: 25,
    change: "-2.1%",
    description: "Awaiting processing",
    icon: Clock3,
    color: "bg-amber-500",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          description={stat.description}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </section>
  );
}
