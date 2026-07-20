import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="bg-[#FAFAFC]">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-between gap-10 px-5 py-16 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
            🚀 AI Powered Career Coach
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Build Your Dream Career
            <span className="text-violet-700">
              {" "}with AI
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Get AI-powered career guidance, resume feedback,
            personalized job recommendations, and interview
            preparation—all in one platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Button>
              Get Started
            </Button>

            <Button className="bg-orange-500 hover:bg-orange-600">
              Explore Careers
            </Button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl bg-violet-100 shadow-xl">

            <p className="text-center text-lg font-semibold text-violet-700">
              AI Career Illustration
              <br />
            
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;