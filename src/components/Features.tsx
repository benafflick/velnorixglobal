import {
  ShieldCheck,
  Globe,
  Truck,
  Clock3,
  PackageCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Global Coverage",
    description:
      "Ship and track parcels across 220+ countries through our trusted logistics network.",
    icon: Globe,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Monitor every shipment with live updates from pickup to final delivery.",
    icon: PackageCheck,
  },
  {
    title: "Fast Delivery",
    description:
      "Express and standard delivery solutions designed for speed and reliability.",
    icon: Truck,
  },
  {
    title: "Safe & Secure",
    description:
      "Advanced security processes ensure every shipment reaches its destination safely.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Customer Support",
    description:
      "Our logistics specialists are available around the clock whenever you need assistance.",
    icon: Headset,
  },
  {
    title: "Accurate Delivery Estimates",
    description:
      "Get precise delivery windows powered by real-time shipment intelligence.",
    icon: Clock3,
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
            Why Choose VelnorixGlobal
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
            Logistics built for reliability, speed and complete visibility.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every shipment deserves transparency. Our technology and logistics
            network work together to keep you informed from dispatch to
            delivery.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex gap-6 rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#1E3A8A]/10 group-hover:bg-[#1E3A8A] transition-colors">
                  <Icon
                    size={30}
                    className="text-[#1E3A8A] group-hover:text-white transition-colors"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">
                    {feature.description}
                  </p>

                  <button className="mt-6 text-sm font-semibold text-[#1E3A8A] hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
