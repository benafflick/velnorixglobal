interface ShipmentStatusBadgeProps {
  status:
    | "Pending"
    | "Processing"
    | "In Transit"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled";
}

const styles = {
  Pending: "bg-amber-100 text-amber-700",
  Processing: "bg-sky-100 text-sky-700",
  "In Transit": "bg-blue-100 text-blue-700",
  "Out for Delivery": "bg-purple-100 text-purple-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function ShipmentStatusBadge({
  status,
}: ShipmentStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[status]}`}
    >
      <span className="mr-2 h-2 w-2 rounded-full bg-current opacity-70" />

      {status}
    </span>
  );
}
