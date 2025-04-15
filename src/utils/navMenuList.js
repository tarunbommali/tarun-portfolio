// Export all icons
import { GoHomeFill } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { FiAward } from "react-icons/fi";

export const navMenuList = [
  { displayText: "Home", hrefText: "home", icon: GoHomeFill },
  { displayText: "Skills", hrefText: "skills", icon: FiAward },
  { displayText: "Projects", hrefText: "projects", icon: GoProjectRoadmap },
  { displayText: "About", hrefText: "about", icon: IoIosDocument },
];