import { Link } from "react-router-dom";
import Button from "../common/Button";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="bg-gradient-to-br from-violet-50 via-white to-orange-50">
      <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">

       
 <div className="flex-1">

<motion.span
  initial={{ opacity: 0, y: -20 }}
  animate={{
    opacity: 1,
    y: [0, -6, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="inline-flex w-fit items-center rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700 shadow-lg"
>
  🚀 AI Powered Career Coach

</motion.span>

  <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
       Build Your Dream Career
     <span className="text-violet-700"> with AI </span>
  </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Discover career opportunities, receive AI-powered
            recommendations, generate professional cover letters,
            and prepare for your next interview—all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <Link to="/explore">
              <Button className="bg-orange-500 hover:text-orange-600">
                Explore Careers
              </Button>
            </Link>

            <Link to="/ai-recommendation">
              <Button className=" text-white transition hover:text-orange-600">
                Try AI Advisor
              </Button>
            </Link>

          </div>

        </div>

       

        <div className="flex flex-1 justify-center">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80"
            alt="Career AI"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Hero;