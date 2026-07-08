import { PackageCheck, Plane, CalendarDays, ArrowRight } from "lucide-react";

interface TrackingHeaderProps {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
}

const statusColors: Record<string, string> = {
  Delivered: "bg-green-500",
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
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E3A8A] via-[#2248ad] to-[#10285f] p-10 text-white shadow-2xl">
      {/* Decorative Blurs */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
              <PackageCheck size={18} />

              <span className="text-sm font-medium tracking-wide">
                LIVE SHIPMENT TRACKING
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              {trackingNumber}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-5 py-2 text-sm font-semibold shadow-lg ${
                  statusColors[status] ?? "bg-slate-600"
                } animate-pulse`}
              >
                {status}
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
                Secure Shipment
              </span>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl lg:w-[340px]">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              Estimated Delivery
            </p>

            <div className="mt-3 flex items-center gap-3">
              <CalendarDays size={24} />

              <h3 className="text-2xl font-bold">{estimatedDelivery}</h3>
            </div>
          </div>
        </div>

        {/* Route */}

        <div className="mt-12 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-100">
                Origin
              </p>

              <h2 className="mt-2 text-2xl font-bold">{origin}</h2>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 bg-white/40" />

              <Plane className="rotate-90 md:rotate-0" size={26} />

              <ArrowRight size={22} />

              <div className="h-[2px] w-16 bg-white/40" />
            </div>

            <div className="text-right">
              <p className="text-sm uppercase tracking-widest text-blue-100">
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
