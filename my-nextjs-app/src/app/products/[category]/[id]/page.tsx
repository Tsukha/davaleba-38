import ParamsReader from "@/components/ParamsReader";

interface ProductDetailPageProps {
  params: { category: string; id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProductDetailPage({
  params,
  searchParams,
}: ProductDetailPageProps) {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Product #{params.id}</h1>
        <p className="page-subtitle">
          Detailed view of {params.category} product
        </p>
      </div>

      <ParamsReader />

      <div className="card">
        <h2>Product Details</h2>
        <p>
          This is a detailed page for product #{params.id} in the{" "}
          {params.category} category. Here you would typically display product
          images, descriptions, pricing, and other relevant information.
        </p>

        <div className="params-container">
          <h3 className="params-title">Product Information</h3>
          <div className="param-item">
            <span className="param-key">Category:</span>
            <span className="param-value">{params.category}</span>
          </div>
          <div className="param-item">
            <span className="param-key">Product ID:</span>
            <span className="param-value">{params.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
