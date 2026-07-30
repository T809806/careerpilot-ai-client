import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../../services/career.service";
import CareerCard from "./CareerCard";
import SkeletonCard from "../common/SkeletonCard";

const FeaturedCareers = () => {

  const { data, isLoading } = useQuery({
  queryKey: ["careers"],
  queryFn: () => getCareers(),
});

const careers = data?.careers || [];
  if (isLoading) {

  return (

    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold"> Featured Careers </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </section>
  );
}

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center"> Featured Careers </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {careers.map((career: any) => (
  <CareerCard
    key={career._id}
    career={career}
  />
))}
      </div>
    </section>
  );
};

export default FeaturedCareers;