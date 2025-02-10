import React from 'react';
import { projectsList } from '../../utils/projectsData';
import { FaExternalLinkAlt, FaFileCode } from "react-icons/fa";

const ColumnOne = ({ color }) => {
  return (
    <div className="column ring-offset-4 column-reverse flex flex-col gap-2">
      {projectsList.map((project) => (
        <li
          className={`flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 items-start m-2 hover:scale-105 my-4 ml-10 mr-10 p-6 sm:w-[180px] md:w-[250px] lg:w-[300px] h-[300px] sm:h-[350px] md:h-[420px] ${color} rounded-lg shadow-md flex items-center justify-center text-lg font-semibold`}
          key={project.id}
        >
          <img
            src={project.imageURL}
            alt={project.title}
            className="w-72 h-48 rounded-md"
          />
          <div className="flex justify-between w-[100%] py-2">
            <p className="font-semibold">{project.title}</p>
            <div className="flex">
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
    </div>
  );
};

export default ColumnOne;
