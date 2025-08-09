import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-item">
          Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Dashboard</span>
      </div>

      <div className="card">
        <h2>Dashboard Navigation</h2>
        <div className="grid grid-3">
          <Link href="/dashboard/profile" className="nav-link">
            Profile
          </Link>
          <Link href="/dashboard/settings" className="nav-link">
            Settings
          </Link>
          <Link href="/dashboard/settings/123" className="nav-link">
            Setting #123
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
