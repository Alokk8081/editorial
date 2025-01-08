import React from "react";
import Logo from "./Logo.png";

function Footer() {
  return (
    <div className="h-auto flex flex-col justify-between bg-gradient-to-r from-gray-900 to-gray-500 p-4 text-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-4 sm:mb-0">
          <div>
            <img className="w-[50px] p-1" src={Logo} alt="IMG" />
          </div>
          <div className="text-sm mt-2">
            <p>The Editorial Board</p>
            <p>Madan Mohan Malaviya</p>
            <p>University Of Technology</p>
            <p>Gorakhpur, Uttar Pradesh</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-4 sm:mb-0">
          <ul className="text-sm">
            <li className="font-bold underline">Navigation</li>
            <li>Home</li>
            <li>Members</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <ul className="text-sm">
          <li className="font-bold underline">Reach Us</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>LinkedIn</li>
          <li>Telegram</li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-4">
        <div className="bg-white h-[1px] w-full mb-2"></div>
        <div>
          <span className="text-sm">Copyright The Editorial Board</span>
          <span className="text-sm"> | All rights reserved |</span>
        </div>
        <div>
          <span className="text-sm">
            Designed by The Editorial Board, MMMUT Gorakhpur
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
