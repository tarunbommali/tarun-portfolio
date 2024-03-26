import React from "react";

import { Link, useLocation } from "react-router-dom";

import AudioPlayer from "./audioPlayer";
import { PROFILE_IMG_URL } from "../utils/constants";


const navMenuList = [
  { displayText: "Home", pathname: "/" },
  { displayText: "Skills", pathname: "/skills" },
  { displayText: "Projects", pathname: "/projects" },
  { displayText: "About", pathname: "/about" },
  { displayText: "Setting", pathname: "/setting" },
];
const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex justify-between px-5 py-3 text-[#5e5e5e]">
      
      <div className="flex items-center logo font-extrabold text-[28px] ">
      <img src={PROFILE_IMG_URL} alt="logo" className="rounded-full h-10 w-10 mr-3 " />
        Tb.</div>

     
      <ul className=" hidden items-center font-semibold lg:flex block">
        {navMenuList.map((navMenuLink, index) => (
          <li
            key={index}
            className={`mx-5 ${
              pathname === navMenuLink.pathname
                ? "underline text-[#191919]"
                : ""
            }`}
          >
            <Link to={navMenuLink.pathname} className="link">
              {navMenuLink.displayText}
            </Link>
          </li>
        ))}
         <li className="mx-5">
          <AudioPlayer/></li>
       
      </ul>
    </div>
  );
};

export default Header;
