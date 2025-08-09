import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Oops! Page not found</h2>
      <p className="mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/" className="not-found-button">
        Return Home
      </Link>
    </div>
  );
}
