import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ShipmentStatusBadge from "./ShipmentStatusBadge";

const recentShipments = [
  {
    trackingNumber: "VG240001",
    receiver: "Sarah Wilson",
    destination: "London, UK",
    status: "In Transit",
    updated: "2 mins ago",
  },
  {
    trackingNumber: "VG240002",
    receiver: "James Brown",
    destination: "Toronto, Canada",
    status: "Delivered",
    updated: "1 hour ago",
  },
  {
    trackingNumber: "VG240003",
    receiver: "Daniel Lee",
    destination: "New York, USA",
    status: "Pending",
    updated: "Today",
  },
  {
    trackingNumber: "VG240004",
    receiver: "Emily Carter",
    destination: "Berlin, Germany",
    status: "Processing",
    updated: "Yesterday",
  },
  {
    trackingNumber: "VG240005",
    receiver: "Mohammed Ali",
    destination: "Dubai, UAE",
    status: "Out for Delivery",
    updated: "Yesterday",
  },
] as const;

export default function RecentShipments() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Recent Shipments
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest shipment activities
          </p>
        </div>

        <Link
          href="/admin/shipments"
          className="inline-flex items-center gap-2 font-medium text-[#1E3A8A] transition hover:gap-3"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Content */}
      <div className="divide-y divide-slate-100">
        {recentShipments.map((shipment) => (
          <div
            key={shipment.trackingNumber}
            className="flex flex-col gap-4 p-6 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-semibold text-[#1E3A8A]">
                {shipment.trackingNumber}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Receiver: {shipment.receiver}
              </p>

              <p className="text-sm text-slate-400">
                Destination: {shipment.destination}
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <ShipmentStatusBadge status={shipment.status} />

              <span className="text-sm text-slate-400">{shipment.updated}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
