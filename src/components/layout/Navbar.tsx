import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Button from "../common/Button";
import Container from "./Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-violet-700"
          >
            CareerPilot AI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-violet-700"
                    : "text-gray-700 hover:text-violet-700 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </div>

          {/* Mobile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-violet-700 md:hidden"
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-violet-700"
                      : "text-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link to="/login" onClick={() => setOpen(false)}>
                <Button className="w-full">
                  Login
                </Button>
              </Link>

              <Link to="/register" onClick={() => setOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Register
                </Button>
              </Link>

            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;