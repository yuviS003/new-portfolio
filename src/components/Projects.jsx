import React from "react";
import { projectBg } from "../assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="project">
      <div className="absolute opacity-80">
        <img src={projectBg} alt="bg" className="object-cover" />
      </div>
      <div className="relative">
        <div className="flex flex-col gap-5 items-start justify-center px-28 py-28">
          <div className="flex flex-wrap gap-5">
            <span className="font-poppins text-7xl font-semibold text-[#eee] tracking-tighter">
              About
            </span>
            <span className="font-poppins text-7xl font-semibold text-[#00adb5] tracking-tighter">
              me
            </span>
          </div>
          <div className="flex flex-wrap justify-start gap-10">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
