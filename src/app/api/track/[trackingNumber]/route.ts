import { NextResponse } from "next/server";
import { getShipment } from "@/lib/tracking";

interface Params {
  params: Promise<{
    trackingNumber: string;
  }>;
}

export async function GET(request: Request, { params }: Params) {
  const { trackingNumber } = await params;

  const shipment = getShipment(trackingNumber);

  if (!shipment) {
    return NextResponse.json(
      {
        success: false,
        message: "Tracking number not found.",
      },
      { status: 404 },
    );
  }

  return NextResponse.json({
    success: true,
    shipment,
  });
}
