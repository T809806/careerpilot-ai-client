import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="text-center ">

        <h1 className="text-8xl font-bold text-violet-700">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-violet-700 px-8 py-3 text-white transition hover:text-orange-600 "
        >
          Back to Home
        </Link>
       

      </div>
    </section>
  );
};

export default ErrorPage;