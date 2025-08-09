import Link from "next/link";

export default function ProductsNotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Product not found</h2>
      <p className="mb-8">The product you're looking for doesn't exist.</p>
      <Link href="/products" className="not-found-button">
        Back to Products
      </Link>
    </div>
  );
}
