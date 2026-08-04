"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import ShipmentStatusBadge from "./ShipmentStatusBadge";
import ShipmentActions from "./shipmentActions";

const shipments = [
  {
    trackingNumber: "VG240001",
    sender: "John Doe",
    receiver: "Sarah Wilson",
    origin: "Lagos",
    destination: "London",
    service: "Air Freight",
    status: "In Transit",
    updated: "2 mins ago",
  },
  {
    trackingNumber: "VG240002",
    sender: "Michael Smith",
    receiver: "James Brown",
    origin: "Abuja",
    destination: "Toronto",
    service: "Sea Freight",
    status: "Delivered",
    updated: "Yesterday",
  },
  {
    trackingNumber: "VG240003",
    sender: "Emma Davis",
    receiver: "Daniel Lee",
    origin: "Accra",
    destination: "New York",
    service: "Road Freight",
    status: "Pending",
    updated: "5 mins ago",
  },
] as const;

export default function ShipmentTable() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Shipment Management
          </h2>

          <p className="mt-1 text-slate-500">View and manage all shipments.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search shipment..."
              className="h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 outline-none transition focus:border-[#1E3A8A] sm:w-72"
            />
          </div>

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 hover:bg-slate-50">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-4">Tracking</th>
              <th className="px-6 py-4">Sender</th>
              <th className="px-6 py-4">Receiver</th>
              <th className="px-6 py-4">Route</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Updated</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {shipments.map((shipment) => (
              <tr
                key={shipment.trackingNumber}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                <td className="px-6 py-5 font-semibold text-[#1E3A8A]">
                  {shipment.trackingNumber}
                </td>

                <td className="px-6 py-5">{shipment.sender}</td>

                <td className="px-6 py-5">{shipment.receiver}</td>

                <td className="px-6 py-5">
                  {shipment.origin} → {shipment.destination}
                </td>

                <td className="px-6 py-5">{shipment.service}</td>

                <td className="px-6 py-5">
                  <ShipmentStatusBadge status={shipment.status} />
                </td>

                <td className="px-6 py-5 text-slate-500">{shipment.updated}</td>

                <td className="px-6 py-5 text-right">
                  <ShipmentActions trackingNumber={shipment.trackingNumber} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 border-t border-slate-200 px-6 py-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1–3 of 3 shipments</p>

        <div className="flex items-center gap-2">
          <button className="rounded-lg border px-3 py-1 hover:bg-slate-50">
            Previous
          </button>

          <button className="rounded-lg bg-[#1E3A8A] px-3 py-1 text-white">
            1
          </button>

          <button className="rounded-lg border px-3 py-1 hover:bg-slate-50">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
