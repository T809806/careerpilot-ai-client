import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleCareer } from "../../services/career.service";
import { useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

const CareerDetails = () => {
    console.log("NEW CareerDetails Loaded");
  const { id } = useParams();
  const { user } = useContext(AuthContext)!;

  const {
  data: career,
  isLoading,
  isError,
} = useQuery<any>({
  queryKey: ["career", id],
  queryFn: () => getSingleCareer(id!),
  enabled: !!id,
});

  if (isLoading) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold">
          Loading...
        </h1>
      </section>
    );
  }

  if (isError || !career) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Career Not Found
        </h1>
      </section>
    );
  }
  const handleApply = async () => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    const application = {
      careerId: career._id,
      title: career.title,
      company: career.company,
      email: user.email,
      name: user.displayName || "Unknown User",
      appliedAt: new Date(),
    };

    const res = await axios.post(
      "http://localhost:5000/api/applications",
      application,
      {
        withCredentials: true,
      }
    );

    alert(res.data.message);

  } catch (error: any) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Application failed"
    );
  }
};

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-2">

        {/* Left */}
        <div>
          <img
            src={career.image}
            alt={career.title}
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Right */}
        <div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            {career.type}
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#5B3DF5]">
            {career.title}
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            <span className="font-semibold">
              Company:
            </span>{" "}
            {career.company}
          </p>

          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold">
              Location:
            </span>{" "}
            {career.location}
          </p>

          <p className="mt-5 text-3xl font-bold text-[#D97706]">
            ৳ {career.salary}
          </p>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">
              Job Description
            </h2>

            <p className="leading-8 text-gray-600">
              {career.description}
            </p>
          </div>

         <button
  onClick={handleApply}
  className="mt-10 rounded-xl bg-[#5B3DF5] px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
>
  Apply Now
</button>

<p className="mt-8 text-sm text-gray-400">
  Career ID: {career._id}
</p>
        </div>

      </div>
    </section>
  );
};

export default CareerDetails;