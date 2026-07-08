import {
  Package,
  MapPin,
  Truck,
  Weight,
  UserRound,
  Building2,
  ArrowRight,
} from "lucide-react";

interface ShipmentDetailsProps {
  shipment: {
    senderName: string;
    senderAddress: string;
    receiverName: string;
    receiverAddress: string;
    currentLocation: string;
    origin: string;
    destination: string;
    service: string;
    weight: string;
    status: string;
  };
}

export default function ShipmentDetails({ shipment }: ShipmentDetailsProps) {
  return (
    <section className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Shipment Information */}

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-[#1E3A8A]/10 p-3">
            <Package className="text-[#1E3A8A]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Shipment Details
            </h2>

            <p className="text-slate-500">Live shipment information</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <Truck className="text-[#1E3A8A]" size={20} />

              <span className="text-slate-600">Current Location</span>
            </div>

            <span className="font-semibold text-slate-900">
              {shipment.currentLocation}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <Package className="text-[#1E3A8A]" size={20} />

              <span className="text-slate-600">Service</span>
            </div>

            <span className="font-semibold text-slate-900">
              {shipment.service}
            </span>
          </div>

          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <Weight className="text-[#1E3A8A]" size={20} />

              <span className="text-slate-600">Weight</span>
            </div>

            <span className="font-semibold text-slate-900">
              {shipment.weight}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="text-[#1E3A8A]" size={20} />

              <span className="text-slate-600">Status</span>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
              {shipment.status}
            </span>
          </div>
        </div>
      </div>

      {/* Sender & Receiver */}

      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-[#1E3A8A]/10 p-3">
            <UserRound className="text-[#1E3A8A]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Sender & Receiver
            </h2>

            <p className="text-slate-500">Shipment parties</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-[#1E3A8A]" />

              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Sender
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              {shipment.senderName}
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {shipment.senderAddress}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-full bg-[#1E3A8A]/10 p-3">
              <ArrowRight className="text-[#1E3A8A]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Building2 size={18} className="text-[#1E3A8A]" />

              <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Receiver
              </span>
            </div>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              {shipment.receiverName}
            </h3>

            <p className="mt-2 leading-7 text-slate-600">
              {shipment.receiverAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
