import Link from "next/link";

export default function ProfileNotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Profile not found</h2>
      <p className="mb-8">The profile page you're looking for doesn't exist.</p>
      <Link href="/dashboard" className="not-found-button">
        Back to Dashboard
      </Link>
    </div>
  );
}
