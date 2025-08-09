import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Dashboard page not found</h2>
      <p className="mb-8">
        The dashboard page you're looking for doesn't exist.
      </p>
      <Link href="/dashboard" className="not-found-button">
        Back to Dashboard
      </Link>
    </div>
  );
}
