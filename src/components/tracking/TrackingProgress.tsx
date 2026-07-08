"use client";

import {
  PackageCheck,
  Factory,
  Plane,
  ShieldCheck,
  Truck,
  House,
} from "lucide-react";

interface TrackingProgressProps {
  status: string;
}

const steps = [
  {
    label: "Collected",
    icon: PackageCheck,
  },
  {
    label: "Processing",
    icon: Factory,
  },
  {
    label: "In Transit",
    icon: Plane,
  },
  {
    label: "Customs Clearance",
    icon: ShieldCheck,
  },
  {
    label: "Out for Delivery",
    icon: Truck,
  },
  {
    label: "Delivered",
    icon: House,
  },
];

export default function TrackingProgress({ status }: TrackingProgressProps) {
  const currentIndex = steps.findIndex((step) => step.label === status);

  const progress =
    currentIndex < 0 ? 0 : (currentIndex / (steps.length - 1)) * 100;

  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-xl md:p-8">
      {/* Header */}

      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Shipment Progress
          </h2>

          <p className="mt-2 text-slate-500">
            Follow every stage of your shipment in real time.
          </p>
        </div>

        <span className="rounded-full bg-[#1E3A8A]/10 px-5 py-2 text-sm font-semibold text-[#1E3A8A]">
          {status}
        </span>
      </div>

      {/* Desktop */}

      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-8 h-1 rounded-full bg-slate-200" />

        <div
          className="absolute left-0 top-8 h-1 rounded-full bg-[#1E3A8A] transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />

        <div className="relative grid grid-cols-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            const completed = index < currentIndex;
            const active = index === currentIndex;

            return (
              <div key={step.label} className="flex flex-col items-center">
                <div
                  className={`z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-500

                  ${completed ? "border-[#1E3A8A] bg-[#1E3A8A] text-white" : ""}

                  ${
                    active
                      ? "border-[#1E3A8A] bg-white text-[#1E3A8A] shadow-xl shadow-blue-200 animate-pulse"
                      : ""
                  }

                  ${
                    !completed && !active
                      ? "border-slate-300 bg-white text-slate-400"
                      : ""
                  }
                  `}
                >
                  <Icon size={28} />
                </div>

                <h4
                  className={`mt-5 text-center text-sm font-semibold ${
                    completed || active ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {step.label}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet */}

      <div className="hidden grid-cols-3 gap-6 md:grid lg:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          const completed = index < currentIndex;
          const active = index === currentIndex;

          return (
            <div
              key={step.label}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full

                ${completed ? "bg-[#1E3A8A] text-white" : ""}

                ${active ? "bg-[#1E3A8A] text-white animate-pulse" : ""}

                ${!completed && !active ? "bg-slate-100 text-slate-400" : ""}
                `}
              >
                <Icon size={24} />
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">
                {step.label}
              </h3>

              {active && (
                <p className="mt-2 text-sm text-[#1E3A8A]">Current Stage</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}

      <div className="space-y-6 md:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;

          const completed = index < currentIndex;
          const active = index === currentIndex;

          return (
            <div key={step.label} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full

                  ${completed ? "bg-[#1E3A8A] text-white" : ""}

                  ${active ? "bg-[#1E3A8A] text-white animate-pulse" : ""}

                  ${!completed && !active ? "bg-slate-100 text-slate-400" : ""}
                  `}
                >
                  <Icon size={24} />
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-2 h-12 w-[2px] bg-slate-300" />
                )}
              </div>

              <div className="pt-2">
                <h3
                  className={`font-semibold ${
                    completed || active ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {step.label}
                </h3>

                {active && (
                  <span className="mt-2 inline-flex rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-semibold text-[#1E3A8A]">
                    Current Stage
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
