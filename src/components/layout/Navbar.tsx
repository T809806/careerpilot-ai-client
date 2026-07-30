import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

import AuthContext from "../../context/AuthContext";
import Container from "./Container";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const authContext = useContext(AuthContext);

  const user = authContext?.user;
  const logOut = authContext?.logOut;

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/explore",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const handleLogout = async () => {
    await logOut?.();
    setOpen(false);
    setDashboardOpen(false);
  };

  return (

    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          

          <Link
            to="/"
            className="text-2xl font-extrabold text-violet-700"
          >
            CareerPilot
            <span className="text-orange-500">
              AI
            </span>
          </Link>

      

  <div className="hidden items-center gap-8 lg:flex">

            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-violet-700"
                    : "text-gray-700 transition hover:text-orange-500"
                }
              >
                {item.name}
              </NavLink>
            ))}

            {user && (
              <NavLink
                to="/my-applications"
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-violet-700"
                    : "text-gray-700 transition hover:text-orange-500"
                }
              >
                My Applications
              </NavLink>
            )}

            {user && (
              <div className="relative">

                <button
                  onClick={() =>
                    setDashboardOpen(!dashboardOpen)
                  }
                  className="rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                >
                  Dashboard ▼
                </button>

                {dashboardOpen && (
                  <div className="absolute right-0 mt-3 w-60 rounded-2xl border bg-white p-3 shadow-xl">

                    <Link
                      to="/dashboard"
                      className="block rounded-lg px-3 py-2 hover:bg-violet-50"
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/add-career"
                      className="block rounded-lg px-3 py-2 hover:bg-violet-50"
                    >
                      Add Career
                    </Link>

                    <Link
                      to="/manage-careers"
                      className="block rounded-lg px-3 py-2 hover:bg-violet-50"
                    >
                      Manage Careers
                    </Link>

                    <Link
                      to="/ai-recommendation"
                      className="block rounded-lg px-3 py-2 hover:bg-violet-50"
                    >
                      AI Recommendation
                    </Link>

                    <Link
                      to="/cover-letter"
                      className="block rounded-lg px-3 py-2 hover:bg-violet-50"
                    >
                      AI Cover Letter
                    </Link>

                  </div>
                )}

              </div>
            )}

          </div>

     

          <div className="hidden items-center gap-4 lg:flex">

            {user ? (
              <>
                <span className="max-w-[180px] truncate text-sm text-gray-500">
                  {user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="rounded-xl bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-xl border border-violet-700 px-5 py-2 font-medium text-violet-700 transition hover:bg-violet-700 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-xl bg-violet-700 px-5 py-2 font-medium text-white transition hover:bg-orange-500"
                >
                  Register
                </Link>
              </>
            )}

          </div>

       

          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-violet-700 lg:hidden"
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>

        </nav>

        

        {open && (
          <div className="space-y-3 border-t py-5 lg:hidden">

            {links.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 hover:bg-violet-50"
              >
                {item.name}
              </NavLink>
            ))}

            {user && (
              <>
                <NavLink
                  to="/my-applications"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  My Applications
                </NavLink>

                <NavLink
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/add-career"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  Add Career
                </NavLink>

                <NavLink
                  to="/manage-careers"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  Manage Careers
                </NavLink>

                <NavLink
                  to="/ai-recommendation"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  AI Recommendation
                </NavLink>

                <NavLink
                  to="/cover-letter"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 hover:bg-violet-50"
                >
                  AI Cover Letter
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="mt-3 w-full rounded-xl bg-red-500 py-3 text-white"
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-violet-700 py-3 text-center text-violet-700"
                >
                  Login
                  
                </Link>

                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-violet-700 py-3 text-center text-white"
                >
                  Register

                </Link>
              </>
            )}

          </div>
        )}

      </Container>
    </header>
  );
};

export default Navbar;