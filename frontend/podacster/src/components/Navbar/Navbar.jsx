import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/category" },
    { name: "All Podcasts", path: "/all-podcasts" },
  ];

  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-2/6">
          <Link to="/" className="text-2xl font-bold">
            Podacster
          </Link>
        </div>

        {/* Nav Links */}
        <div className="w-2/6 flex justify-center items-center">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="ms-4 hover:font-bold transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login / Sign Up */}
        <div className="w-2/6 flex justify-end items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-black text-white border border-black rounded-full hover:bg-white hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
