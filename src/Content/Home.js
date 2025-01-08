import React from "react";
import Logo from "../components/Logo.png";

function Home() {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-800 text-white">
      {/* Text Section */}
      <div className="sm:ml-9 sm:mt-20 mt-10 text-center sm:text-left">
        <div
          className="text-4xl sm:text-5xl text-white/60"
          style={{ fontFamily: "Alba,sans-serif" }}
        >
          The Editorial Board
        </div>
        <div
          className="text-2xl sm:text-3xl text-white/50 sm:ml-[142px] sm:-mt-2 font-serif mt-3"
        >
          Beckoning Creati'wit'y
        </div>
        <div
          className="text-xl sm:text-3xl font-bold mt-4 sm:mt-7"
          style={{ fontFamily: "cursive" }}
        >
          Official Publishing Body
        </div>
        <div
          className="text-xl sm:text-3xl font-bold mt-2"
          style={{ fontFamily: "cursive" }}
        >
          MMMUT, Gorakhpur...
        </div>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center sm:justify-start">
        <img
          className="mt-10 sm:mt-[20vh] sm:ml-[10vw] w-2/3 sm:w-[25vw]"
          src={Logo}
          alt="IMG"
        />
      </div>
    </div>
  );
}

export default Home;
