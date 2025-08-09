import Link from "next/link";

export default function SettingsLayout({
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
        <Link href="/dashboard" className="breadcrumb-item">
          Dashboard
        </Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Settings</span>
      </div>
      {children}
    </div>
  );
}
