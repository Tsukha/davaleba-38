import ParamsReader from "@/components/ParamsReader";

export default function ProfilePage() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Profile</h1>
        <p className="page-subtitle">
          Manage your personal information and preferences
        </p>
      </div>

      <ParamsReader />

      <div className="card">
        <h2>User Profile</h2>
        <p>
          This is your profile page where you can view and edit your personal
          information, manage account settings, and customize your experience.
        </p>
      </div>
    </div>
  );
}
