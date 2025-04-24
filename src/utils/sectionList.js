import { GoHomeFill, GoProjectRoadmap } from "react-icons/go";
import { IoIosDocument } from "react-icons/io";
import { FiAward } from "react-icons/fi";

import Home from "../section/Home";
import { Skills } from "../section/Skills";
import { Project } from "../section/Project";
import About from "../section/About";

export const sectionList = [
  {
    id: 1,
    displayText: "Home",
    sectionID: "home",
    component: Home,
    icon: GoHomeFill,
    subSection: 1
  },
  {
    id: 2,
    displayText: "Skills",
    sectionID: "skills",
    component: Skills,
    icon: FiAward,
    subSection: 2
  },
  {
    id: 3,
    displayText: "Projects",
    sectionID: "projects",
    component: Project,
    icon: GoProjectRoadmap,
    subSection: 2
  },
  {
    id: 4,
    displayText: "About",
    sectionID: "about",
    component: About,
    icon: IoIosDocument,
    subSection: 4
  },
];
