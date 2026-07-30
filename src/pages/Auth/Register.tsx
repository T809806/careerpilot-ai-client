import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {

  const { createUser } = useContext(AuthContext)!;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

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
      setLoading(true);

      
      console.log("🔥 Before Firebase");

      const result = await createUser(
        email,
        password
      );

      const firebaseUser = result.user;

      console.log(
        "✅ Firebase Success:",
        firebaseUser
      );

     
      const userData = {
        name,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL || "",
        uid: firebaseUser.uid,
        role: "user",
      };

      console.log(
        "📤 Sending user to MongoDB:",
        userData
      );

      
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        userData
      );

      
      console.log(
        "✅ MongoDB Success:",
        response.data
      );

      toast.success("Registration Successful");

      navigate("/login");

    } catch (error: unknown) {
      console.error(
        "❌ Registration Error:",
        error
      );

      if (axios.isAxiosError(error)) {
        console.log(
          "Axios Error Response:",
          error.response?.data
        );

        console.log(
          "Axios Error Status:",
          error.response?.status
        );

        alert(
          error.response?.data?.message ||
          "MongoDB registration failed"
        );

      } else if (error instanceof Error) {
       toast.error(error.message);

      } else {
        alert("Registration failed");
      }

    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-[#5B3DF5]"> Create Account </h1>

        <p className="mt-2 text-center text-gray-500">
          Join CareerPilot AI and start your career journey

        </p>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-5"
        >

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

     <input
         name="name"
         type="text"
         placeholder="Full Name"
         className="w-full rounded-xl border p-3 outline-none focus:border-[#5B3DF5]"
         required
       />
   </div>


          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-3 outline-none focus:border-[#5B3DF5]"
              required
            />
          </div>


          <div>
            <label className="mb-2 block font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Password"
              minLength={6}
              className="w-full rounded-xl border p-3 outline-none focus:border-[#5B3DF5]"
              required
            />
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#5B3DF5] py-3 font-semibold text-white transition hover:bg-[#4A2FE0] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

        </form>


        <p className="mt-5 text-center text-gray-600">
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