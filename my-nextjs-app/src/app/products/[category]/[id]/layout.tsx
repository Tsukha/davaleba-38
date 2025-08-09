import Link from "next/link";

export default function ProductDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string; id: string };
}) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-item">
          Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/products" className="breadcrumb-item">
          Products
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link
          href={`/products/${params.category}`}
          className="breadcrumb-item"
          style={{ textTransform: "capitalize" }}
        >
          {params.category}
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Product #{params.id}</span>
      </div>
      {children}
    </div>
  );
}
