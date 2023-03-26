import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "react-elastic-carousel";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="project" className="overflow-x-hidden">
      <div className="flex flex-col gap-5 items-start justify-center py-32">
        <div className="flex flex-wrap gap-3 md:gap-5 px-10 md:px-24 w-full text-4xl sm:text-5xl md:text-7xl">
          <span className="font-poppins font-semibold text-[#eee] tracking-tighter">
            My recent
          </span>
          <span className="font-poppins font-semibold text-[#00adb5] tracking-tighter brightness-200">
            works
          </span>
        </div>
        <Carousel
          breakPoints={[
            { width: 1, itemsToShow: 1, showArrows: false },
            { width: 850, itemsToShow: 2, showArrows: true },
            { width: 1150, itemsToShow: 3 },
          ]}
          pagination={true}
          itemsToScroll={1}
          itemPadding={[0, 5]}
          enableTilt={true}
          enableSwipe={true}
          enableMouseSwipe={true}
          showEmptySlots
          className="md:px-5"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
