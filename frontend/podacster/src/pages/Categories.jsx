import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const cat = [
    {
      name: "Comedy",
      color: "bg-purple-200",
      to: "/categories/Comedy",
      img: "https://cdn.pixabay.com/photo/2016/03/27/22/16/audience-1285560_1280.jpg", // laughing audience
    },
    {
      name: "Business",
      color: "bg-green-200",
      to: "/categories/Business",
      img: "https://img.freepik.com/free-vector/hand-drawn-business-innovation_23-2149153450.jpg",
    },
    {
      name: "Education",
      color: "bg-red-200",
      to: "/categories/Education",
      img: "https://cdn.pixabay.com/photo/2016/09/04/20/05/teacher-1641430_1280.jpg", // classroom
    },
    {
      name: "Hobbies",
      color: "bg-zinc-200",
      to: "/categories/Hobby",
      img: "https://cdn.pixabay.com/photo/2017/01/30/15/50/woman-2029942_1280.jpg", // painting
    },
    {
      name: "Government",
      color: "bg-indigo-200",
      to: "/categories/Government",
      img: "https://cdn.pixabay.com/photo/2017/05/05/22/28/congress-228690_1280.jpg", // government building
    },
    {
      name: "Health",
      color: "bg-rose-200",
      to: "/categories/Health",
      img: "https://cdn.pixabay.com/photo/2017/02/01/22/02/doctor-2035330_1280.jpg", // doctor
    },
    {
      name: "Science",
      color: "bg-blue-200",
      to: "/categories/Science",
      img: "https://cdn.pixabay.com/photo/2017/08/30/07/52/analysis-2691262_1280.jpg", // lab scene
    },
    {
      name: "Sports",
      color: "bg-yellow-200",
      to: "/categories/Sports",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80", // sports field
    },
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cat.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`rounded-lg shadow-md overflow-hidden ${item.color} transition-transform hover:scale-105`}
            >
              <img
                src={item.img}
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
