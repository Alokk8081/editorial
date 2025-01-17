import React from "react";
import Logo from "../components/Logo.png";

function Home() {
  return (
    <div className="flex h-[125vh]">
      <div className="ml-[11.25rem] mt-[10rem]">
        <div
          className="text-6xl text-white/60"
          style={{ fontFamily: "Alba, sans-serif" }}
        >
          The Editorial Board
        </div>

        <div
          className="text-4xl text-white/50 ml-[177.5px] -mt-[1rem] font-serif"
        >
          Beckoning Creati'wit'y
        </div>

        <div
          className="text-4xl font-bold mt-[6.75rem] ml-[.75rem]"
          style={{ fontFamily: "cursive" }}
        >
          Official Publishing Body
        </div>

        <div
          className="text-4xl font-bold mt-[2.5rem] ml-[.75rem]"
          style={{ fontFamily: "cursive" }}
        >
          MMMUT, Gorakhpur...
        </div>
      </div>
      <div className="">
        <img
          className="mt-[25vh] ml-[12.5vw] w-[31.25vw]"
          src={Logo}
          alt="IMG"
        />
      </div>
    </div>
  );
}

export default Home;
