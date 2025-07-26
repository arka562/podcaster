import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:2000/api/auth/login", {
        email,
        password,
      });

      toast.success("Logged in successfully!");

      // ✅ Store login status and user info in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", res.data.user.username); // ✅ correct

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid credentials. Redirecting to error page...");

      setTimeout(() => {
        navigate("/error"); // 👈 redirect to ErrorPage
      }, 1500); // give user time to see the toast
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ToastContainer position="top-center" />
      <div className="bg-gray-800 p-10 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-200 mb-6 text-center">
          Welcome Back! Login to listen
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
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
