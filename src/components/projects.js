import React, { Component } from "react";

import { projectsList } from "../utils/projectsData";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import Carousel from "../utils/carousel";
import { miniProjectsList } from "../utils/miniProjectsData";
import Srpdt from "../utils/srpdt";

class Projects extends Component {
  state = { projects: projectsList, searchInput: "" };
  render() {
    const { projects, searchInput } = this.state;
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="flex flex-col items-center bg-[#f4f2ee] min-h-screen ">
        <h1 className="p-3 font-semibold text-lg md:text-3xl">SRPDT </h1>
        <div className="flex justify-evenly items-center w-[80%]  rounded-md bg-white flex-wrap m-3 p-3 ">
          <Srpdt />
        </div>

        <h1 className="p-3 font-semibold text-lg md:text-3xl">Mini Projects</h1>
        <div className="flex justify-evenly items-center w-[80%]  rounded-md bg-white flex-wrap m-3 p-3 ">
          <Carousel miniProject={miniProjectsList} />
        </div>

        <h1 className="p-3 font-semibold text-lg md:text-3xl">Assignments</h1>

        <ul className="flex justify-evenly items-center w-[80%] rounded-md bg-white flex-wrap m-3 p-3 ">
          {filteredProjects.map((project) => (
            <li
              className="flex flex-col  transition ease-in-out delay-150  hover:-translate-y-1  items-start m-2 hover:scale-105"
              key={project.id}
            >
              <img
                src={project.imageURL}
                alt={project.title}
                className="w-72 h-48 rounded-md	 "
              />
              <div className="flex justify-between w-[100%] py-2">
                <p className="font-semibold">{project.title}</p>
                <div className="flex ">
                  <a
                    href={project.repositoryLink}
                    target="__blank"
                    rel="noopener"
                    className="mr-2 text-[#5e5e5e]"
                  >
                    <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.projectLink}
                    target="__blank"
                    rel="noopener"
                    className="mr-2 text-[#5e5e5e]"
                  >
                    <FaFileCode />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
