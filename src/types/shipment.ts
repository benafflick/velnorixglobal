export type ShipmentStatus =
  | "Pending"
  | "Collected"
  | "Processing"
  | "In Transit"
  | "Customs Clearance"
  | "Out for Delivery"
  | "Delivered";

export interface TrackingHistory {
  location: string;
  status: ShipmentStatus;
  description: string;
  date: string;
}

export interface Shipment {
  trackingNumber: string;

  senderName: string;
  senderAddress: string;

  receiverName: string;
  receiverAddress: string;

  origin: string;
  destination: string;

  currentLocation: string;

  weight: string;
  service: string;

  status: ShipmentStatus;

  estimatedDelivery: string;

  history: TrackingHistory[];
}
