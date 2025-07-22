import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 px-12 h-screen text-white">
      <div className="flex justify-between gap-4 items-center h-full">
        <div className="w-4/6">
          <h1 className="text-7xl font-bold leading-tight">
            Create and Listen <br /> to Podcasts
          </h1>
        </div>
        <div className="w-2/6 flex justify-center">
          <div className="px-6 py-6 text-2xl border border-yellow-200 rounded-full -rotate-90">
            Scroll Down
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
