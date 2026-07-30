const CareerCategories = () => {
  const categories = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Digital Marketing",
    "Data Science",
    "Mobile App Development",
  ];

  return (

    <section className="bg-gray-50 py-20">

      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold text-violet-700"> Popular Categories </h2>
        <p className="mt-4 text-center text-gray-500">  Explore careers by your favorite technology or profession </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-violet-700">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default CareerCategories;