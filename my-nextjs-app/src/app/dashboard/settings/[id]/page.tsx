import ParamsReader from "@/components/ParamsReader";

interface SettingDetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function SettingDetailPage({
  params,
  searchParams,
}: SettingDetailPageProps) {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Setting #{params.id}</h1>
        <p className="page-subtitle">Configure this specific setting</p>
      </div>

      <ParamsReader />

      <div className="card">
        <h2>Setting Configuration</h2>
        <p>
          This is the detailed configuration page for setting #{params.id}. Here
          you can modify various parameters and options.
        </p>

        <div className="params-container">
          <h3 className="params-title">Setting Information</h3>
          <div className="param-item">
            <span className="param-key">Setting ID:</span>
            <span className="param-value">{params.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
