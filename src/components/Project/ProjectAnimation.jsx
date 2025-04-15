/* eslint-disable react/prop-types */
import { projectsList } from "../../utils/projectsData";
import { ProjectCard } from "./ProjectCard";

export function ProjectAnimation() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:grid-rows-2 my-2">
      {projectsList.map((project, index) => {
        const colStart =
          index % 2 === 0 ? "md:[grid-area:auto/1/auto/7]" : "md:[grid-area:auto/7/auto/13]";
        return (
          <ProjectCard
            key={project.projectId}
            area={colStart}
            title={project.title}
            description={project.description}
            imageURL={project.imageURL}
            repoLink={project.repositoryLink}
            liveLink={project.projectLink}
          />
        );
      })}
    </ul>
  );
}

