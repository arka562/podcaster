import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">
          Login Failed
        </h2>
        <p className="mb-6 text-lg">
          Oops! Something went wrong. Please check your credentials and try
          again.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-yellow-300 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-400 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
