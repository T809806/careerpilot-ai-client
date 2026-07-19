import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-violet-700"
          >
            CareerPilot AI
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-6">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/explore">
              Explore
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

            <NavLink to="/login">
              Login
            </NavLink>

            <NavLink to="/register">
              Register
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;