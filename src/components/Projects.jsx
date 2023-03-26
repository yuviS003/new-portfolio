import React from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "react-elastic-carousel";
import { projects } from "../constants";

const Projects = () => {
  return (
    <div id="project">
      <div className="flex flex-col gap-5 items-start justify-center py-32">
        <div className="flex flex-wrap gap-5 px-24 w-full">
          <span className="font-poppins text-7xl font-semibold text-[#eee] tracking-tighter">
            My recent
          </span>
          <span className="font-poppins text-7xl font-semibold text-[#00adb5] tracking-tighter">
            works
          </span>
        </div>
        <Carousel
          breakPoints={[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 1 },
            { width: 850, itemsToShow: 2 },
            { width: 1150, itemsToShow: 3 },
            { width: 1450, itemsToShow: 3 },
            { width: 1750, itemsToShow: 3 },
          ]}
          pagination={false}
          itemsToScroll={1}
          itemPadding={[0, 5]}
          enableAutoPlay
          autoPlaySpeed={6000}
          enableTilt={true}
          enableSwipe={true}
          enableMouseSwipe={true}
          showEmptySlots
          className="px-5"
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
