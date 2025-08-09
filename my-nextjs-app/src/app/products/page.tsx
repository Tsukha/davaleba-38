import Link from "next/link";
import ParamsReader from "@/components/ParamsReader";

export default function ProductsPage() {
  const categories = ["electronics", "clothing", "books", "home", "sports"];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Products</h1>
        <p className="page-subtitle">Browse our product catalog by category</p>
      </div>

      <ParamsReader />

      <div className="grid grid-3">
        {categories.map((category) => (
          <div key={category} className="card">
            <h2 style={{ textTransform: "capitalize" }}>{category}</h2>
            <p>
              Explore our {category} collection with the latest products and
              best deals.
            </p>
            <Link
              href={`/products/${category}`}
              className="not-found-button mt-4"
              style={{ display: "inline-block" }}
            >
              View {category}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
