import Link from "next/link";
import ParamsReader from "@/components/ParamsReader";

export default function HomePage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome to My Next.js App</h1>
        <p className="page-subtitle">
          Explore our nested routes with TypeScript, loaders, and dynamic
          components
        </p>
      </div>

      <ParamsReader />

      <div className="grid grid-2">
        <div className="card">
          <h2>Dashboard</h2>
          <p>Manage your account settings and view your profile information.</p>
          <Link
            href="/dashboard"
            className="not-found-button mt-4"
            style={{ display: "inline-block" }}
          >
            Go to Dashboard
          </Link>
        </div>

        <div className="card">
          <h2>Products</h2>
          <p>Browse our product catalog with categories and detailed views.</p>
          <Link
            href="/products"
            className="not-found-button mt-4"
            style={{ display: "inline-block" }}
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
