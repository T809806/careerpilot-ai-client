import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-3">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-violet-700">
              CareerPilot AI
            </h2>

            <p className="mt-3 text-gray-600">
              AI-powered career guidance to help students and job seekers
              build resumes, discover opportunities, and prepare with
              confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-600">
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact
            </h3>

            <p className="text-gray-600">
              Email: support@careerpilotai.com
            </p>

            <p className="mt-2 text-gray-600">
              Dhaka, Bangladesh
            </p>

            <div className="mt-5 flex gap-4 text-2xl text-violet-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
          © 2026 CareerPilot AI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;