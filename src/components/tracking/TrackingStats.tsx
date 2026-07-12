"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Package, Clock3, MapPin, Activity } from "lucide-react";

interface TrackingStatsProps {
  status: string;
  history: {
    location: string;
    status: string;
    description: string;
    createdAt: string;
  }[];
  estimatedDelivery: string;
}

export default function TrackingStats({
  status,
  history,
  estimatedDelivery,
}: TrackingStatsProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  const progressMap: Record<string, number> = {
    Collected: 15,
    Processing: 35,
    "In Transit": 50,
    "Customs Clearance": 80,
    "Out for Delivery": 95,
    Delivered: 100,
  };

  const progress = progressMap[status] ?? 0;

  return (
    <section ref={ref} className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {/* Progress */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#1E3A8A]">
          <Package size={28} />
        </div>

        <h2 className="mt-6 text-4xl font-black text-slate-900">
          {inView && <CountUp end={progress} duration={2} />}%
        </h2>

        <p className="mt-2 text-lg font-semibold text-slate-800">
          Delivery Progress
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Shipment completion status
        </p>
      </div>

      {/* Transit */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
          <Clock3 size={28} />
        </div>

        <h2 className="mt-6 text-4xl font-black text-slate-900">7</h2>

        <p className="mt-2 text-lg font-semibold text-slate-800">
          Transit Days
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Estimated delivery: {estimatedDelivery}
        </p>
      </div>

      {/* Locations */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
          <MapPin size={28} />
        </div>

        <h2 className="mt-6 text-4xl font-black text-slate-900">
          {inView && <CountUp end={history.length} duration={2} />}
        </h2>

        <p className="mt-2 text-lg font-semibold text-slate-800">Checkpoints</p>

        <p className="mt-1 text-sm text-slate-500">
          Locations successfully scanned
        </p>
      </div>

      {/* Monitoring */}

      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
          <Activity size={28} />
        </div>

        <h2 className="mt-6 text-4xl font-black text-slate-900">24/7</h2>

        <p className="mt-2 text-lg font-semibold text-slate-800">
          Live Monitoring
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Shipment monitored around the clock
        </p>
      </div>
    </section>
  );
}
