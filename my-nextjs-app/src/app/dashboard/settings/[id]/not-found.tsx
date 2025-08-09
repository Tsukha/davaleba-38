import Link from "next/link";

export default function SettingDetailNotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Setting not found</h2>
      <p className="mb-8">The setting you're looking for doesn't exist.</p>
      <Link href="/dashboard/settings" className="not-found-button">
        Back to Settings
      </Link>
    </div>
  );
}
