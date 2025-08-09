import Link from "next/link";
import { use } from "react";

interface ProductDetailNotFoundProps {
  params: Promise<{ category: string; id: string }>;
}

export default function ProductDetailNotFound(
  props: ProductDetailNotFoundProps
) {
  const params = use(props.params);

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Product not found</h2>
      <p className="mb-8">
        Product #{params.id} in {params.category} category doesn't exist.
      </p>
      <Link href={`/products/${params.category}`} className="not-found-button">
        Back to {params.category}
      </Link>
    </div>
  );
}
