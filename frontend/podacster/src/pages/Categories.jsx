import React from "react";
import { Link } from "react-router-dom";
import { categoryImages } from "../assets/asset.js"; // Adjust path as needed

const Categories = () => {
  const cat = [
    { name: "Comedy", color: "bg-purple-200", to: "/categories/Comedy" },
    { name: "Business", color: "bg-green-200", to: "/categories/Business" },
    { name: "Education", color: "bg-red-200", to: "/categories/Education" },
    { name: "Hobbies", color: "bg-zinc-200", to: "/categories/Hobby" },
    {
      name: "Government",
      color: "bg-indigo-200",
      to: "/categories/Government",
    },
    { name: "Health", color: "bg-rose-200", to: "/categories/Health" },
    { name: "Science", color: "bg-blue-200", to: "/categories/Science" },
    { name: "Sports", color: "bg-yellow-200", to: "/categories/Sports" },
  ];

  return (
    <div className="p-10 bg-gray-900 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-yellow-200">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cat.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`rounded-lg shadow-md overflow-hidden ${item.color} transition-transform hover:scale-105`}
            >
              <img
                src={categoryImages[item.name]}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 text-center text-xl font-semibold text-gray-900">
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
