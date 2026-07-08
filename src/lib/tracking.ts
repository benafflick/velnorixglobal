import shipments from "@/data/shipments.json";
import { Shipment } from "@/types/shipment";

export function getShipment(trackingNumber: string): Shipment | undefined {
  return (shipments as Shipment[]).find(
    (shipment) =>
      shipment.trackingNumber.toLowerCase() === trackingNumber.toLowerCase(),
  );
}
