import { useContext } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log("REGISTER CLICKED");

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value;

    try {
      console.log("Before Firebase");

      const result = await createUser(email, password);

      console.log("Firebase Success", result.user);
      console.log("Name:", name);

      alert("Registration Successful");

      navigate("/");

    } catch (error: any) {
      console.log("Firebase Error", error);
      alert(error.message);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-[#5B3DF5]">
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-xl border p-3"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border p-3"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-[#5B3DF5] py-3 font-semibold text-white"
          >
            Register
          </button>

        </form>


        <p className="mt-5 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#D97706]"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Register;