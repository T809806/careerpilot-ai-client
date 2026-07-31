import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const SERVER_URL = import.meta.env.VITE_API_URL.replace("/api", "");

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext)!;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value;

    try {
      setLoading(true);

      const result = await signIn(email, password);

      await axios.post(
        `${SERVER_URL}/jwt`,
        {
          email: result.user.email,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Login Successful");

      navigate("/");
    } catch (error: any) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      const result = await signInWithGoogle();

      await axios.post(
        `${SERVER_URL}/jwt`,
        {
          email: result.user.email,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Google Login Successful");

      navigate("/");
    } catch (error: any) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Google Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-[#5B3DF5]">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Login to continue your career journey
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
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
            disabled={loading}
            className="w-full rounded-xl bg-[#5B3DF5] py-3 font-semibold text-white"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-5">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full rounded-xl border py-3 font-semibold"
          >
            Continue with Google
          </button>
        </div>

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
          <h3 className="text-lg font-semibold text-violet-700">
            Demo Account
          </h3>

          <p className="mt-3 text-sm">
            <strong>Email:</strong> demo@careerpilot.com
          </p>

          <p className="text-sm">
            <strong>Password:</strong> 123456
          </p>
        </div>

        <p className="mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-orange-500"
          >
            Register
          </Link>
        </p>

      </div>
    </section>
  );
};

export default Login;