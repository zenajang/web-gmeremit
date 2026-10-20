import { AdminLoginBranding, AdminLoginForm } from "@/components/admin/organisms";

const AdminLoginTemplate = () => {
  return (
    <div className="min-h-screen flex">
      <AdminLoginBranding />
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginTemplate;
