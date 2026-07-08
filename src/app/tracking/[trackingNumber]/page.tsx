import { notFound } from "next/navigation";

import { getShipment } from "@/lib/tracking";

import TrackingHeader from "@/components/tracking/TrackingHeader";
import TrackingStats from "@/components/tracking/TrackingStats";
import TrackingProgress from "@/components/tracking/TrackingProgress";
import ShipmentDetails from "@/components/tracking/ShipmentDetails";
import RouteVisualization from "@/components/tracking/RouteVisualization";
import TrackingTimeline from "@/components/tracking/TrackingTimeline";
import SupportCard from "@/components/tracking/SupportCard";

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
    <main className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-7xl space-y-10 px-6">
        <TrackingHeader
          trackingNumber={shipment.trackingNumber}
          status={shipment.status}
          origin={shipment.origin}
          destination={shipment.destination}
          estimatedDelivery={shipment.estimatedDelivery}
        />

        <TrackingStats
          status={shipment.status}
          history={history}
          estimatedDelivery={shipment.estimatedDelivery}
        />

        <TrackingProgress status={shipment.status} />

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

        <RouteVisualization
          origin={shipment.origin}
          currentLocation={shipment.currentLocation}
          destination={shipment.destination}
        />

        <TrackingTimeline
          history={shipment.history}
          currentStatus={shipment.status}
        />

        <SupportCard />
      </div>
    </main>
  );
}
