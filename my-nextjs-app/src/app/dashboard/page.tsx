import ParamsReader from "@/components/ParamsReader";

export default function DashboardPage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Your personal dashboard with account overview
        </p>
      </div>

      <ParamsReader />

      <div className="grid grid-2">
        <div className="card">
          <h2>Account Overview</h2>
          <p>
            View your account statistics and recent activity. Track your
            progress and manage your preferences from this central hub.
          </p>
        </div>

        <div className="card">
          <h2>Quick Actions</h2>
          <p>
            Access frequently used features and shortcuts to streamline your
            workflow and boost productivity.
          </p>
        </div>
      </div>
    </div>
  );
}
