import Link from "next/link";

export default function SettingDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/" className="breadcrumb-item">
          Home
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/dashboard" className="breadcrumb-item">
          Dashboard
        </Link>
        <span className="breadcrumb-separator">/</span>
        <Link href="/dashboard/settings" className="breadcrumb-item">
          Settings
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Setting #{params.id}</span>
      </div>
      {children}
    </div>
  );
}
