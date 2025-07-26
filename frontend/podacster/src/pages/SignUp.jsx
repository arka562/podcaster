import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    try {
      const res = await axios.post(
        "http://localhost:2000/api/auth/sign-up",
        newUser
      );

      toast.success("Account created successfully!");

      // ✅ Store user info in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      localStorage.setItem("username", username);

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/profile");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Error creating account. Please try again.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-semibold text-yellow-200 mb-6 text-center">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-white mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
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
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-white">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-300 cursor-pointer underline"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
