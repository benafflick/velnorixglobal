"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

interface ShipmentActionsProps {
  trackingNumber: string;
}

export default function ShipmentActions({
  trackingNumber,
}: ShipmentActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={`/admin/shipments/${trackingNumber}`}
        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#1E3A8A]"
      >
        <Eye size={18} />
      </Link>

      <Link
        href={`/admin/shipments/${trackingNumber}/edit`}
        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-amber-600"
      >
        <Pencil size={18} />
      </Link>

      <button className="rounded-lg p-2 text-slate-500 transition hover:bg-red-100 hover:text-red-600">
        <Trash2 size={18} />
      </button>
    </div>
  );
}
