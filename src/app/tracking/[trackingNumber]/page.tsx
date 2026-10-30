import Image from "next/image";
import { notFound } from "next/navigation";

import { getShipment } from "@/lib/tracking";

import TrackingHeader from "@/components/tracking/TrackingHeader";
import TrackingStats from "@/components/tracking/TrackingStats";
import TrackingProgress from "@/components/tracking/TrackingProgress";
import ShipmentDetails from "@/components/tracking/ShipmentDetails";
import RouteVisualization from "@/components/tracking/RouteVisualization";
import TrackingTimeline from "@/components/tracking/TrackingTimeline";

interface Props {
  params: Promise<{
    trackingNumber: string;
  }>;
}

export default async function TrackingPage({ params }: Props) {
  const { trackingNumber } = await params;

  const shipment = getShipment(trackingNumber);

  if (!shipment) {
    notFound();
  }

  const history = shipment.history.map((event) => ({
    ...event,
    createdAt:
      (event as any).createdAt ??
      (event as any).timestamp ??
      (event as any).date ??
      new Date().toISOString(),
  }));

  return (
    <main className="min-h-screen bg-slate-100 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:space-y-10 sm:px-6">
        <TrackingHeader
          trackingNumber={shipment.trackingNumber}
          status={shipment.status}
          origin={shipment.origin}
          destination={shipment.destination}
          estimatedDelivery={shipment.estimatedDelivery}
        />

        <ShipmentDetails
          shipment={{
            senderName: shipment.senderName,
            senderAddress: shipment.senderAddress,
            receiverName: shipment.receiverName,
            receiverAddress: shipment.receiverAddress,
            currentLocation: shipment.currentLocation,
            origin: shipment.origin,
            destination: shipment.destination,
            service: shipment.service,
            weight: shipment.weight,
            status: shipment.status,
          }}
        />

        {/* Receiver's House Image */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Delivery Destination
            </p>

            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Receiver's Delivery Location
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Destination address: {shipment.receiverAddress}
            </p>
          </div>

          <div className="relative h-64 w-full bg-slate-200 sm:h-80 lg:h-96">
            <Image
              src="/images/receiver-house.jpeg"
              alt="Receiver's delivery destination"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              className="object-cover"
            />
          </div>
        </section>

        <TrackingStats
          status={shipment.status}
          history={history}
          estimatedDelivery={shipment.estimatedDelivery}
        />

        <TrackingProgress status={shipment.status} />

        <RouteVisualization
          origin={shipment.origin}
          currentLocation={shipment.currentLocation}
          destination={shipment.destination}
        />

        <TrackingTimeline history={history} currentStatus={shipment.status} />
      </div>
    </main>
  );
}
