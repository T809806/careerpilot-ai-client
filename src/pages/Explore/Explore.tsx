import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../../services/career.service";
import CareerCard from "../../components/home/CareerCard";
import SkeletonCard from "../../components/common/SkeletonCard";
import EmptyState from "../../components/common/EmptyState";

const Explore = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["explore-careers", page, search, location, sort],
    queryFn: () => getCareers(page, search, location, sort),
  });

  const careers = data?.careers || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-center text-4xl font-bold text-violet-700">
        Explore Careers
      </h1>

      <p className="mt-3 text-center text-gray-500">
        Find the perfect career opportunity.
      </p>

      {/* Search + Filter */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border p-3"
        />

        <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border p-3"
        />

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value);
            setPage(1);
          }}
          className="rounded-xl border p-3"
        >
          <option value="">Sort Salary</option>
          <option value="salary-low">Low → High</option>
          <option value="salary-high">High → Low</option>
        </select>
      </div>

      {/* Loading */}
      {isLoading ? (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : careers.length === 0 ? (
        <div className="mt-10">
          <EmptyState message="No careers found." />
        </div>
      ) : (
        <>
          {/* Career Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careers.map((career: any) => (
              <CareerCard
                key={career._id}
                career={career}
              />
            ))}
          </div>

          {/* Pagination */}
          {data?.totalPages > 1 && (
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from(
                { length: data.totalPages },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={`rounded-lg px-4 py-2 ${
                      page === index + 1
                        ? "bg-violet-700 text-white"
                        : "border"
                    }`}
                  >
                    {index + 1}
                  </button>
                )
              )}

              <button
                disabled={page === data.totalPages}
                onClick={() => setPage(page + 1)}
                className="rounded-lg border px-4 py-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Explore;