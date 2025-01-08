import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="list-none flex items-center w-full bg-gradient-to-r from-gray-900 to-gray-500 h-12 justify-between px-4">
        {/* Logo */}
        <div>
          <img className="w-[40px]" src={Logo} alt="IMG" />
        </div>

        {/* Navigation Menu */}
        <div>
          <ul className="hidden sm:flex">
            <li className="text-sm px-4 py-1 bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm px-4 py-1 bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-2">
              <Link to="/about">About</Link>
            </li>
            <li className="text-sm px-4 py-1 bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-2">
              <Link to="/publications">Publications abc</Link>
            </li>
            <li className="text-sm px-4 py-1 bg-white/10 border border-white/20 text-white rounded-lg shadow-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 cursor-pointer mx-2">
              <Link to="/Team">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
