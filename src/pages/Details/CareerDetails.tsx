import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleCareer } from "../../services/career.service";

const CareerDetails = () => {
  const { id } = useParams();

  const {
    data: career,
    isLoading,
  } = useQuery({
    queryKey: ["career", id],
    queryFn: () => getSingleCareer(id!),
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!career) {
    return (
      <div className="flex h-screen items-center justify-center text-2xl font-semibold">
        Career Not Found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left */}
        <div>
          <img
            src={career.image}
            alt={career.title}
            className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
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

          <p className="mt-2 text-lg text-gray-500">
            {career.company} • {career.location}
          </p>

          <p className="mt-6 text-3xl font-bold text-[#D97706]">
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

          <button className="mt-10 rounded-xl bg-[#5B3DF5] px-8 py-3 font-semibold text-white transition hover:bg-[#4A2FE0]">
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