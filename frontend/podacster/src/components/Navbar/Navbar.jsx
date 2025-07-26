import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage on mount
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileNav ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileNav]);

  const toggleMobileNav = () => setMobileNav(!mobileNav);
  const closeMobileNav = () => setMobileNav(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    closeMobileNav();
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/categories" },
    { name: "All Podcasts", path: "/all-podcasts" },
    ...(isLoggedIn ? [{ name: "Profile", path: "/profile" }] : []),
  ];

  return (
    <>
      <nav className="px-4 md:px-8 lg:px-12 py-4 relative bg-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-black">
            Podacster
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-gray-800 hover:text-black hover:font-semibold transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-2 text-3xl text-black hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={toggleMobileNav}
              aria-label="Toggle mobile menu"
            >
              <IoReorderThreeOutline />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileNav && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMobileNav}
          />
          <div className="fixed top-0 left-0 h-full w-full bg-blue-100 z-50 lg:hidden">
            <div className="flex justify-end p-6">
              <button
                className="p-2 text-3xl text-white border-black bg-black rounded-full hover:bg-blue-200 transition-colors duration-200"
                onClick={closeMobileNav}
                aria-label="Close mobile menu"
              >
                <RxCross2 />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
              {/* Nav Links */}
              {navLinks.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="text-3xl text-black hover:font-bold transition-all duration-300"
                  onClick={closeMobileNav}
                >
                  {item.name}
                </Link>
              ))}

              {/* Auth Buttons */}
              <div className="flex flex-col items-center space-y-4 mt-8">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      className="px-8 py-3 border-2 border-black rounded-full text-xl text-black hover:bg-black hover:text-white transition-all duration-300"
                      onClick={closeMobileNav}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-8 py-3 bg-black text-white rounded-full text-xl hover:bg-gray-800 transition-all duration-300"
                      onClick={closeMobileNav}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="px-8 py-3 border-2 border-black rounded-full text-xl text-black hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
