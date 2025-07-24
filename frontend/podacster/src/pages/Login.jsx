import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-200 mb-6 text-center">
          Welcome Back! Login to listen
        </h2>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-300 text-black py-2 rounded-full font-medium hover:bg-yellow-400 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-white">
          Don’t have an account?{" "}
          <Link to="/signup">
            <span className="text-yellow-300 cursor-pointer underline">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
