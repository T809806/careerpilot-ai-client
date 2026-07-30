const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Jobs",
      description: "Browse trusted job opportunities from verified companies.",
    },
    {
      title: "AI Career Guidance",
      description: "Get personalized career recommendations powered by AI.",
    },
    {
      title: "Easy Application",
      description: "Apply for your dream job with just a few clicks.",
    },
  ];

  return (

    <section className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-center text-4xl font-bold text-violet-700">  Why Choose CareerPilot AI? </h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
        Everything you need to discover the right career opportunity in one
        platform.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-3 text-2xl font-semibold text-violet-700">
              {item.title}
            </h3>

            <p className="leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default WhyChooseUs;