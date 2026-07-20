import { useQuery } from "@tanstack/react-query";
import { getCareers } from "../../services/career.service";
import CareerCard from "./CareerCard";

const FeaturedCareers = () => {
  const { data: careers = [], isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: getCareers,
  });

  if (isLoading) {
    return (
      <div className="text-center py-20 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Careers
      </h2>

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