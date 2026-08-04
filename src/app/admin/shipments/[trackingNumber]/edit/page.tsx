interface EditShipmentPageProps {
  params: Promise<{
    trackingNumber: string;
  }>;
}

export default async function EditShipmentPage({
  params,
}: EditShipmentPageProps) {
  const { trackingNumber } = await params;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
          Shipment Management
        </p>

        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Edit Shipment
        </h1>

        <p className="mt-3 text-slate-500">
          You are editing shipment{" "}
          <span className="font-semibold text-[#1E3A8A]">{trackingNumber}</span>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Coming Soon</h2>

        <p className="mt-3 text-slate-500">
          The shipment editing form is currently under development. This page
          will allow administrators to update sender details, receiver
          information, package details, shipment status, tracking history, and
          delivery information.
        </p>
      </div>
    </div>
  );
}
