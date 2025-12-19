import Header from "../Header";
import AdminForm from "../AdminForm";
import Footer from "../Footer";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <Header />
      </div>
      <div className="flex-1 px-6 overflow-y-auto">
        <AdminForm />
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
