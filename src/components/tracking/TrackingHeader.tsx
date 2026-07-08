import {
  PackageCheck,
  Plane,
  CalendarDays,
  ArrowRight,
  MapPin,
  Clock3,
  Radio,
  ShieldCheck,
} from "lucide-react";

interface TrackingHeaderProps {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
}

const statusColors: Record<string, string> = {
  Delivered: "bg-emerald-500",
  "In Transit": "bg-blue-500",
  Processing: "bg-amber-500",
  Collected: "bg-cyan-500",
  "Customs Clearance": "bg-orange-500",
  "Out for Delivery": "bg-purple-500",
};

export default function TrackingHeader({
  trackingNumber,
  status,
  origin,
  destination,
  estimatedDelivery,
}: TrackingHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0F2C75] via-[#1E3A8A] to-[#163172] text-white shadow-[0_30px_80px_rgba(0,0,0,.25)]">
      {/* World Map */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/images/world-map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative Glow */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-[140px]" />

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative z-10 p-8 md:p-10 lg:p-12">
        {/* Top */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 backdrop-blur-xl">
              <Radio size={15} className="animate-pulse text-emerald-400" />

              <span className="text-sm font-semibold tracking-[0.25em]">
                LIVE TRACKING
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              {trackingNumber}
            </h1>

            <p className="mt-3 max-w-xl text-blue-100">
              Your shipment is actively monitored across our global logistics
              network with secure real-time tracking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold shadow-lg ${
                  statusColors[status] ?? "bg-slate-600"
                }`}
              >
                {status}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl">
                <ShieldCheck size={16} />
                Secure Shipment
              </span>
            </div>
          </div>

          {/* ETA */}

          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl lg:w-[340px]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3">
                <CalendarDays size={26} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-100">
                  Estimated Delivery
                </p>

                <h3 className="mt-2 text-2xl font-bold">{estimatedDelivery}</h3>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-blue-100">
                <Clock3 size={18} />

                <span className="text-sm">Last updated just now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Route */}

        <div className="mt-12 rounded-[28px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* Origin */}

            <div className="text-center lg:text-left">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <MapPin size={30} />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-blue-100">
                Origin
              </p>

              <h2 className="mt-2 text-2xl font-bold">{origin}</h2>
            </div>

            {/* Center */}

            <div className="flex flex-col items-center">
              <Plane size={36} className="animate-bounce" />

              <div className="mt-5 flex items-center">
                <div className="h-[3px] w-16 rounded-full bg-white/30 md:w-28" />

                <ArrowRight size={22} className="mx-3" />

                <div className="h-[3px] w-16 rounded-full bg-white/30 md:w-28" />
              </div>

              <span className="mt-4 rounded-full bg-emerald-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                Live Route
              </span>
            </div>

            {/* Destination */}

            <div className="text-center lg:text-right">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <MapPin size={30} />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-blue-100">
                Destination
              </p>

              <h2 className="mt-2 text-2xl font-bold">{destination}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
