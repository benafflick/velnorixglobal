import { MapPin, Plane, Warehouse, Truck } from "lucide-react";

interface RouteVisualizationProps {
  origin: string;
  currentLocation: string;
  destination: string;
}

export default function RouteVisualization({
  origin,
  currentLocation,
  destination,
}: RouteVisualizationProps) {
  return (
    <section className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl">
      {/* Header */}

      <div className="border-b border-slate-200 bg-gradient-to-r from-[#1E3A8A] to-[#2952C8] p-8 text-white">
        <h2 className="text-3xl font-bold">Live Shipment Route</h2>

        <p className="mt-2 text-blue-100">
          Real-time shipment movement across our logistics network
        </p>
      </div>

      {/* Body */}

      <div className="relative overflow-hidden p-10">
        {/* Decorative background */}

        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#1E3A8A]" />

          <div className="absolute right-20 bottom-10 h-64 w-64 rounded-full border border-[#1E3A8A]" />
        </div>

        <div className="relative">
          {/* Route */}

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            {/* Origin */}

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E3A8A] text-white shadow-xl">
                <MapPin size={34} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">Origin</h3>

              <p className="mt-2 text-center text-slate-600">{origin}</p>
            </div>

            {/* Line 1 */}

            <div className="hidden flex-1 items-center lg:flex">
              <div className="h-[3px] flex-1 border-t-2 border-dashed border-[#1E3A8A]" />

              <Plane size={34} className="mx-4 animate-bounce text-[#1E3A8A]" />

              <div className="h-[3px] flex-1 border-t-2 border-dashed border-[#1E3A8A]" />
            </div>

            {/* Hub */}

            <div className="flex flex-col items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 shadow-lg">
                <Warehouse size={42} className="text-orange-600" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Distribution Hub
              </h3>

              <p className="mt-2 text-center text-slate-600">
                {currentLocation}
              </p>
            </div>

            {/* Line 2 */}

            <div className="hidden flex-1 items-center lg:flex">
              <div className="h-[3px] flex-1 border-t-2 border-dashed border-[#1E3A8A]" />

              <Truck size={34} className="mx-4 animate-pulse text-[#1E3A8A]" />

              <div className="h-[3px] flex-1 border-t-2 border-dashed border-[#1E3A8A]" />
            </div>

            {/* Destination */}

            <div className="flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-xl">
                <MapPin size={34} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Destination
              </h3>

              <p className="mt-2 text-center text-slate-600">{destination}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
