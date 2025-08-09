import Link from "next/link";

export default function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { category: string };
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
        <span
          className="breadcrumb-current"
          style={{ textTransform: "capitalize" }}
        >
          {params.category}
        </span>
      </div>
      {children}
    </div>
  );
}
