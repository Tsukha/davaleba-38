import Link from "next/link";
import ParamsReader from "@/components/ParamsReader";

interface CategoryPageProps {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  // Mock product IDs for demonstration
  const productIds = ["1", "2", "3", "4", "5"];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title" style={{ textTransform: "capitalize" }}>
          {params.category}
        </h1>
        <p className="page-subtitle">
          Browse {params.category} products and find what you need
        </p>
      </div>

      <ParamsReader />

      <div className="params-container">
        <h3 className="params-title">Category Information</h3>
        <div className="param-item">
          <span className="param-key">Category:</span>
          <span className="param-value">{params.category}</span>
        </div>
      </div>

      <div className="grid grid-3">
        {productIds.map((id) => (
          <div key={id} className="card">
            <h2>Product #{id}</h2>
            <p>
              Premium {params.category} product with excellent quality and
              features.
            </p>
            <Link
              href={`/products/${params.category}/${id}`}
              className="not-found-button mt-4"
              style={{ display: "inline-block" }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
