"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Globe2, ShieldCheck, PackageCheck, Headset } from "lucide-react";

const reasons = [
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Our logistics network connects businesses and individuals across continents with dependable international shipping.",
  },
  {
    icon: PackageCheck,
    title: "Real-Time Tracking",
    description:
      "Track every stage of your shipment with accurate updates from collection to final delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Every shipment is handled with strict security procedures and professional care to ensure peace of mind.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Our logistics specialists are available around the clock to assist with every shipment.",
  },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1E3A8A]">
            WHY VELNORIXGLOBAL
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Built on trust,
            <br />
            driven by excellence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every shipment represents a promise. At VelnorixGlobal, we combine
            technology, expertise and a global logistics network to deliver
            speed, transparency and reliability.
          </p>
        </div>

        {/* Statistics */}
        <div
          ref={ref}
          className="mt-20 grid grid-cols-2 gap-10 border-y border-slate-200 py-14 lg:grid-cols-4"
        >
          <div>
            <h3 className="text-5xl font-extrabold text-[#1E3A8A] lg:text-6xl">
              {inView && <CountUp end={220} duration={2.5} />}+
            </h3>

            <p className="mt-3 text-slate-600">Countries Served</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-[#1E3A8A] lg:text-6xl">
              {inView && <CountUp end={12} duration={2.5} />}M+
            </h3>

            <p className="mt-3 text-slate-600">Successful Deliveries</p>
          </div>

          <div>
            <h3 className="text-5xl font-extrabold text-[#1E3A8A] lg:text-6xl">
              {inView && <CountUp end={99.8} decimals={1} duration={2.5} />}%
            </h3>

            <p className="mt-3 text-slate-600">On-Time Delivery</p>
          </div>

          <div
            className={`transition-all duration-1000 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-5xl font-extrabold text-[#1E3A8A] lg:text-6xl">
              24/7
            </h3>

            <p className="mt-3 text-slate-600">Customer Support</p>
          </div>
        </div>

        {/* Reasons */}
        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className={`group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#1E3A8A] hover:shadow-2xl ${
                  inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1E3A8A]/10 transition group-hover:bg-[#1E3A8A]">
                  <Icon
                    size={30}
                    className="text-[#1E3A8A] transition group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
