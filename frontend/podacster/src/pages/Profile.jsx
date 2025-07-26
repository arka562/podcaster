import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
  });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login"); // Redirect if not logged in
    }

    // Get user data from localStorage
    const email = localStorage.getItem("userEmail");
    const username = localStorage.getItem("username");

    setUser({ email, username });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome 👋</h2>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Username:</strong> {user.username || "Not Provided"}
        </p>
        <p className="text-lg text-gray-600 mb-6">
          <strong>Email:</strong> {user.email}
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
