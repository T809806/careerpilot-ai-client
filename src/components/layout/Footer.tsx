import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {

  return (

    <footer className="mt-20 bg-gradient-to-br from-violet-50 via-white to-orange-50 border-t">

      <Container>

 <div className="grid gap-10 py-14 md:grid-cols-3">

       

  <div>

    <h2 className="text-3xl font-extrabold">
       <span className="text-violet-700"> CareerPilot </span>
       <span className="text-orange-500"> AI </span>

    </h2>

     <p className="mt-5 leading-7 text-gray-600">
              CareerPilot AI helps students and job seekers
              build professional resumes, generate AI-powered
              cover letters, discover careers, and receive
              personalized career recommendations.
   </p>

  </div>

        

   <div>

     <h3 className="mb-5 text-xl font-bold text-gray-800"> Quick Links </h3>

       <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-600 transition hover:text-violet-700"
              >
                Home
              </Link>

              <Link
                to="/explore"
                className="text-gray-600 transition hover:text-violet-700"
              >
                Explore Careers
              </Link>

              <Link
                to="/ai-recommendation"
                className="text-gray-600 transition hover:text-violet-700"
              >
                AI Recommendation
              </Link>

              <Link
                to="/cover-letter"
                className="text-gray-600 transition hover:text-violet-700"
              >
                AI Cover Letter
              </Link>

              <Link
                to="/about"
                className="text-gray-600 transition hover:text-violet-700"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-gray-600 transition hover:text-violet-700 "
              >
                Contact
              </Link>

            </div>

          </div>

         

          <div>

            <h3 className="mb-5 text-xl font-bold text-gray-800"> Contact </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <FaEnvelope className="text-violet-700" />

                <span className="text-gray-600">
                  support@careerpilotai.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaMapMarkerAlt className="text-orange-500" />

                <span className="text-gray-600">
                  Dhaka, Bangladesh
                </span>

              </div>

            </div>

            <div className="mt-7 flex gap-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-xl text-violet-700 transition hover:bg-red-600 hover:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-xl text-violet-700 transition hover:bg-red-600 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-xl text-violet-700 transition hover:bg-red-600 hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t py-6 text-center text-sm text-gray-500">

          © 2026 CareerPilot AI • All Rights Reserved

        </div>

      </Container>

    </footer>
  );
};

export default Footer;