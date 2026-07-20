import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-[#5B3DF5]">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join CareerPilot AI and start your career journey.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#5B3DF5]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#5B3DF5]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#5B3DF5]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#5B3DF5] py-3 font-semibold text-white transition hover:bg-[#4A2FE0]"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#D97706] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;