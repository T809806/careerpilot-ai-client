import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
const authContext = useContext(AuthContext);
const user = authContext?.user;

  return (

    <section className="min-h-screen bg-slate-50 px-4 py-12">

      <div className="mx-auto max-w-6xl">

   <h1 className="text-3xl font-bold text-[#5B3DF5]"> Welcome to Your Dashboard  </h1>

        <p className="mt-2 text-gray-600">
          Manage your career journey from here.
        </p>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow">

          <h2 className="text-xl font-semibold">
            Profile Information
          </h2>

          <p className="mt-4 text-gray-600">
            Email: {user?.email}
          </p>

        </div>

      </div>

    </section>
  );
};

export default Dashboard;