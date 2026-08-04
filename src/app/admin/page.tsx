import DashboardHeader from "@/components/admin/DashboardHeader";
import DashboardStats from "@/components/admin/DashboardStats";
import ShipmentChart from "@/components/admin/ShipmentChart";
import ActivityFeed from "@/components/admin/ActivityFeed";
import RecentShipments from "@/components/admin/RecentShipments";
import QuickActions from "@/components/admin/QuickActions";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <DashboardStats />

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        <ShipmentChart />
        <ActivityFeed />
      </div>

      <RecentShipments />

      <QuickActions />
    </div>
  );
}
