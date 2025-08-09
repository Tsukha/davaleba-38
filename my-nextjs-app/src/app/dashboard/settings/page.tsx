import Link from "next/link";
import ParamsReader from "@/components/ParamsReader";

export default function SettingsPage() {
  const settingIds = ["123", "456", "789"];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Configure your application preferences</p>
      </div>

      <ParamsReader />

      <div className="grid grid-3">
        {settingIds.map((id) => (
          <div key={id} className="card">
            <h2>Setting #{id}</h2>
            <p>
              Configure specific setting parameters and options for your
              account.
            </p>
            <Link
              href={`/dashboard/settings/${id}`}
              className="not-found-button mt-4"
              style={{ display: "inline-block" }}
            >
              Edit Setting
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
