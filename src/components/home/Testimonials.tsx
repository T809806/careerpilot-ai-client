const Testimonials = () => {
  const reviews = [
    {
      name: "Mayra Poddar",
      role: "Frontend Developer",
      comment:
        "CareerPilot AI helped me discover the right opportunities and improve my resume with AI.",
    },
    {
      name: "Mahmud Hasan",
      role: "UI/UX Designer",
      comment:
        "The AI recommendation feature was surprisingly accurate and easy to use.",
    },
    {
      name: "Abhira",
      role: "Software Engineer",
      comment:
        "A clean platform with useful features. I found my internship through CareerPilot AI.",
    },
  ];

  return (

    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-4xl font-bold text-violet-700">  What Our Users Say </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <p className="italic text-gray-600">
                "{review.comment}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-violet-700">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;