const Statistics = () => {
  const stats = [
    {
      number: "500+",
      title: "Active Jobs",
    },
    {
      number: "120+",
      title: "Companies",
    },
    {
      number: "2,000+",
      title: "Job Seekers",
    },
    {
      number: "95%",
      title: "Success Rate",
    },
  ];

  return (

    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">

        <h2 className="text-center text-4xl font-bold text-violet-700"> CareerPilot in Numbers </h2>

        <p className="mt-4 text-center text-gray-500"> Trusted by thousands of job seekers and recruiters </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-violet-700 p-8 text-center text-white shadow-lg"
            >
              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-3 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Statistics;