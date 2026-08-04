import ShipmentForm from "@/components/admin/ShipmentForm";

export default function CreateShipmentPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
          Shipment Management
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Create Shipment
        </h1>

        <p className="mt-3 max-w-3xl text-slate-500">
          Register a new shipment by filling in the sender, receiver, package
          information, and shipping details below.
        </p>
      </div>

      <ShipmentForm />
    </div>
  );
}
