"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { TrendingUp, Package } from "lucide-react";

const data = [
  { month: "Jan", shipments: 120 },
  { month: "Feb", shipments: 170 },
  { month: "Mar", shipments: 150 },
  { month: "Apr", shipments: 220 },
  { month: "May", shipments: 260 },
  { month: "Jun", shipments: 240 },
  { month: "Jul", shipments: 310 },
  { month: "Aug", shipments: 340 },
  { month: "Sep", shipments: 325 },
  { month: "Oct", shipments: 390 },
  { month: "Nov", shipments: 430 },
  { month: "Dec", shipments: 475 },
];

export default function ShipmentChart() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
            Analytics
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Shipment Performance
          </h2>

          <p className="mt-2 text-slate-500">
            Monitor shipment growth across the year.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          <button className="rounded-xl bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white">
            Year
          </button>

          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
            Month
          </button>

          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50">
            Week
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Shipments</p>

              <h3 className="mt-2 text-3xl font-bold">3,430</h3>
            </div>

            <div className="rounded-xl bg-[#1E3A8A] p-3 text-white">
              <Package size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-700">Growth</p>

              <h3 className="mt-2 text-3xl font-bold text-emerald-700">
                +18.6%
              </h3>
            </div>

            <div className="rounded-xl bg-emerald-500 p-3 text-white">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-8 h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="shipmentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E3A8A" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#1E3A8A" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#e5e7eb"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#64748b", fontSize: 13 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 12px 30px rgba(0,0,0,.12)",
              }}
            />

            <Area
              type="monotone"
              dataKey="shipments"
              stroke="#1E3A8A"
              strokeWidth={3}
              fill="url(#shipmentGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
