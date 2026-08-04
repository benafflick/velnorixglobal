import {
  PackagePlus,
  Truck,
  MapPinned,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const activities = [
  {
    title: "Shipment Created",
    description: "VG240006 was created by Administrator.",
    time: "2 mins ago",
    icon: PackagePlus,
    color: "bg-blue-500",
  },
  {
    title: "Shipment In Transit",
    description: "VG240001 departed Lagos Distribution Center.",
    time: "20 mins ago",
    icon: Truck,
    color: "bg-sky-500",
  },
  {
    title: "Location Updated",
    description: "VG240003 arrived at London Sorting Facility.",
    time: "1 hour ago",
    icon: MapPinned,
    color: "bg-amber-500",
  },
  {
    title: "Shipment Delivered",
    description: "VG240002 has been delivered successfully.",
    time: "3 hours ago",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
  {
    title: "Awaiting Pickup",
    description: "VG240007 is waiting for courier pickup.",
    time: "Yesterday",
    icon: Clock3,
    color: "bg-purple-500",
  },
];

export default function ActivityFeed() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900">Recent Activity</h2>

        <p className="mt-1 text-sm text-slate-500">
          Latest shipment updates across the platform.
        </p>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-slate-200" />

          <div className="space-y-8">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={`${activity.title}-${activity.time}`}
                  className="relative flex gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-lg ${activity.color}`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-slate-900">
                        {activity.title}
                      </h3>

                      <span className="text-xs text-slate-400 whitespace-nowrap">
                        {activity.time}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {activity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
