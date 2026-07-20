import { useContext } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../context/AuthContext";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();


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
      const result = await signIn(
        email,
        password
      );

      console.log(result.user);

      alert("Login Successful");

      navigate("/");

    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold text-[#5B3DF5]">
          Login
        </h1>


        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >

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
            Login
          </button>

        </form>


        <p className="mt-5 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-[#D97706]"
          >
            Register
          </Link>
        </p>


      </div>

    </div>
  );
};


export default Login;