const About = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">

        <h1 className="text-center text-5xl font-bold text-violet-700">
          About CareerPilot AI
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
          CareerPilot AI is an AI-powered career guidance platform designed
          to help students, fresh graduates, and job seekers discover the
          right career path.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-violet-700">
              🎯 Our Mission
            </h2>

            <p className="mt-4 text-gray-600">
              Help every learner make smarter career decisions using
              Artificial Intelligence.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-violet-700">
              🚀 Our Vision
            </h2>

            <p className="mt-4 text-gray-600">
              Make career planning simple, personalized, and accessible for
              everyone.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-violet-700">
              💡 What We Offer
            </h2>

            <p className="mt-4 text-gray-600">
              AI Recommendations, Resume Tips, Cover Letter Generator,
              Career Explorer, and Interview Preparation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;