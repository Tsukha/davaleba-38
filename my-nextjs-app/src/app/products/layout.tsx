import Link from "next/link";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-item">
          Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Products</span>
      </div>
      {children}
    </div>
  );
}
