import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  return (
    <div id="projects" className="w-full  md:px-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16 ">
        <h2 className="py-4  dark:text-white">Some of my Projects:</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {ProjectsList.slice(0, 4).map((project) => {
            return (
              <ProjectItem
                key={project?.id}
                title={project.title}
                backgroundImg={project.backgroundImg}
                source={project.source}
                skill={project.skill}
                projectUrl={project.projectUrl}
              />
            );
          })}
        </div>
        <div className="flex justify-end">
          <Link href="/moreprojects">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              More Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
