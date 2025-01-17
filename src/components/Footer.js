import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";




function Footer() {
  const editorial = ['https://www.instagram.com/the_editorial_board/','https://www.facebook.com/edboard.mmmut','https://www.linkedin.com/company/theeditorialboard/posts/?feedView=all']

  return (
    <div className="h-auto flex flex-col justify-between bg-gradient-to-r from-gray-900 to-gray-500 p-4 text-white">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-4 sm:mb-0">
          <div>
            <img className="w-[50px] p-1" src={Logo} alt="IMG" />
          </div>
          <div className="mt-4">
            <p>The Editorial Board</p>
            <p>Madan Mohan Malaviya</p>
            <p>University Of Technology</p>
            <p>Gorakhpur, Uttar Pradesh</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mb-4 mt-10 sm:mb-0">
          <ul className="">
            <li className="font-bold underline">Navigation</li>
            <li >Home</li>
            <li>Members</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <ul className="mt-10 mr-8 ">
          <li className="font-bold underline">Reach Us</li>
          <li><Link to={editorial[0]} target="_blank" className="flex items-center gap-2"><FaInstagramSquare />Instagram</Link></li>
          <li><Link to={editorial[1]} target="_blank" className="flex items-center gap-2"><CiFacebook />Facebook</Link></li>
          <li><Link to={editorial[2]} target="_blank" className="flex items-center gap-2"><FaLinkedin />LinkedIn</Link></li>
          <li><Link to={editorial[2]} target="_blank">Telegram</Link></li>
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
