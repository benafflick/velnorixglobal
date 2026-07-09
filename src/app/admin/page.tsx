export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          Welcome back! Here's an overview of your logistics operations.
        </p>
      </div>

      {/* Statistics Cards Placeholder */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Total Shipments</h3>
          <p className="mt-3 text-4xl font-bold text-slate-900">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">In Transit</h3>
          <p className="mt-3 text-4xl font-bold text-blue-600">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Delivered</h3>
          <p className="mt-3 text-4xl font-bold text-green-600">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="text-slate-500">Pending</h3>
          <p className="mt-3 text-4xl font-bold text-orange-500">0</p>
        </div>
      </div>

      {/* Recent Shipments Placeholder */}
      <div className="rounded-2xl bg-white p-8 shadow">
        <h2 className="text-2xl font-semibold text-slate-900">
          Recent Shipments
        </h2>

        <div className="mt-6 flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">
          <p className="text-slate-500">Shipment table will appear here.</p>
        </div>
      </div>
    </div>
  );
}
