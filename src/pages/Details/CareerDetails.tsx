import { useParams } from "react-router-dom";

const CareerDetails = () => {
  const { id } = useParams();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">

        {/* Left */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Career"
            className="h-[420px] w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right */}
        <div>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
            Full Time
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#5B3DF5]">
            Frontend Developer
          </h1>

          <p className="mt-2 text-lg text-gray-500">
            TechVision Ltd • Dhaka
          </p>

          <p className="mt-6 text-3xl font-bold text-[#D97706]">
            ৳ 50,000
          </p>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">
              Job Description
            </h2>

            <p className="leading-8 text-gray-600">
              This page will later load real data from MongoDB.
              For now we are creating the UI only.
            </p>
          </div>

          <button className="mt-10 rounded-xl bg-[#5B3DF5] px-8 py-3 font-semibold text-white transition hover:bg-[#4A2FE0]">
            Apply Now
          </button>

          <p className="mt-8 text-sm text-gray-400">
            Career ID : {id}
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareerDetails;