import React from "react";
import { Link, useLocation } from "react-router-dom";
import AudioPlayer from "./audioPlayer";
import { PROFILE_IMG_URL } from "../utils/constants";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { navMenuList } from "../utils/navMenuList";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const renderMobileNavbar = () => {
    return (
      <div ref={ref} className="hamburger md:hidden">
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          className="hamburger"
        />
        {isOpen && (
          <div className="flex flex-col   absolute   left-0 bg-[#37383a] opacity-99 min-h-[50vh] w-[100%] z-1">
            <ul className="flex justify-center items-center flex-col">
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/" ? "text-[#ffffff]" : ""
                }`}
              >
                <Link to="/" className="mobile-link" onClick={handleCloseMenu}>
                  HOME
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/skills" ? "text-[#ffffff]" : ""
                }`}
              >
                <Link
                  to="/skills"
                  className="mobile-link"
                  onClick={handleCloseMenu}
                >
                  SKILLS
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/projects" ? "text-[#ffffff]" : ""
                }`}
              >
                <Link
                  to="/projects"
                  className="mobile-link"
                  onClick={handleCloseMenu}
                >
                  PROJECTS
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/about" ? "text-[#ffffff]" : ""
                }`}
              >
                <Link
                  to="/about"
                  className="mobile-link"
                  onClick={handleCloseMenu}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  

  return (
    <div className="flex justify-between px-5 py-3 text-[#5e5e5e]">
      <div className="flex items-center logo font-extrabold text-[28px] ">
        <img
          src={PROFILE_IMG_URL}
          alt="logo"
          className="rounded-full h-10 w-10 mr-3 "
        />
        Tb.
      </div>

      {/* Desktop screen */}
      <ul className="hidden items-center font-semibold lg:flex block">
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
          <AudioPlayer  />
        </li>
      </ul>

      {/* Mobile Navbar */}
      {renderMobileNavbar()}
    </div>
  );
};

export default Header;
