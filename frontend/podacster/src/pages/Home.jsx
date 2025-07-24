import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 px-6 lg:px-12 min-h-screen text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center py-12 lg:h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-4/6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Create and Listen <br /> to Podcasts
          </h1>
          <p className="mt-8 text-xl lg:text-2xl">
            Listen to the popular Podcast on <b>Podcaster</b>
          </p>
          <button className="bg-yellow-200 text-xl lg:text-2xl text-black rounded-full px-6 py-2 mt-4 font-medium">
            Login to view
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/6 flex flex-col items-center justify-center mt-8 lg:mt-0">
          <div className="px-6 py-6 text-xl lg:text-2xl border border-yellow-200 rounded-full -rotate-90">
            Scroll Down
          </div>
          <div className="text-xl lg:text-2xl font-medium mt-10 py-10 text-center">
            <p>
              Our website contains more than <b>2000</b> podcasts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
