import { CheckCircle2, Circle, Clock3 } from "lucide-react";

interface HistoryItem {
  status: string;
  location: string;
  description: string;
  date: string;
}

interface TrackingTimelineProps {
  history: HistoryItem[];
  currentStatus: string;
}

const allSteps = [
  "Collected",
  "Processing",
  "In Transit",
  "Customs Clearance",
  "Out for Delivery",
  "Delivered",
];

export default function TrackingTimeline({
  history,
  currentStatus,
}: TrackingTimelineProps) {
  const currentIndex = allSteps.indexOf(currentStatus);

  return (
    <section className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">
            Shipment Activity
          </h2>

          <p className="mt-2 text-slate-500">
            Complete tracking history of your shipment
          </p>
        </div>

        <span className="rounded-full bg-[#1E3A8A]/10 px-5 py-2 text-sm font-semibold text-[#1E3A8A]">
          {history.length} Updates
        </span>
      </div>

      <div className="relative p-10">
        {/* Vertical Line */}

        <div className="absolute left-[43px] top-12 bottom-12 w-[2px] bg-slate-200" />

        <div className="space-y-12">
          {allSteps.map((step, index) => {
            const completed = index < currentIndex;
            const active = index === currentIndex;

            const item = history.find((event) => event.status === step);

            return (
              <div key={step} className="relative flex gap-6">
                {/* Icon */}

                <div
                  className={`
                    relative z-10 flex h-11 w-11 items-center justify-center rounded-full

                    ${completed ? "bg-green-500 text-white" : ""}

                    ${
                      active
                        ? "bg-[#1E3A8A] text-white ring-8 ring-blue-100"
                        : ""
                    }

                    ${
                      !completed && !active ? "bg-slate-100 text-slate-400" : ""
                    }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 size={22} />
                  ) : active ? (
                    <Clock3 size={22} />
                  ) : (
                    <Circle size={18} />
                  )}
                </div>

                {/* Content */}

                <div className="flex-1 rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-900">{step}</h3>

                    {active && (
                      <span className="rounded-full bg-[#1E3A8A]/10 px-4 py-1 text-xs font-semibold text-[#1E3A8A]">
                        Current Status
                      </span>
                    )}
                  </div>

                  {item ? (
                    <>
                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-6 text-sm">
                        <span className="font-medium text-[#1E3A8A]">
                          📍 {item.location}
                        </span>

                        <span className="text-slate-500">🕒 {item.date}</span>
                      </div>
                    </>
                  ) : (
                    <p className="mt-4 text-slate-400 italic">
                      Awaiting this shipment stage...
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
