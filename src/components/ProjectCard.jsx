import React from "react";
import { GitHub, Link } from "../assets";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <div className="border border-gray-800 rounded-lg bg-gray-600 bg-opacity-60 p-3 font-oswald flex flex-col gap-4">
      <div className="text-3xl font-bold text-white tracking-tighter w-full flex items-center justify-between">
        {name}
        <div className="flex gap-2">
          {true ? (
            <div
              className="bg-gradient-to-r from-neutral-100 via-cyan-100 to-sky-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="Checkout live"
              onClick={() => window.open(live_link, "_blank")}
            >
              <img
                src={Link}
                alt="link"
                className="w-[80%] h-[80%] object-contain"
              />
            </div>
          ) : null}
          <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            title="Checkout code"
            onClick={() => window.open(source_code_link, "_blank")}
          >
            <img
              src={GitHub}
              alt="github"
              className="w-[75%] h-[75%] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[250px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div
        className="text-white tracking-tight leading-6 h-[180px] overflow-hidden"
        title={description}
      >
        {description}
      </div>
      <div className="flex gap-3">
        {tags.map((tag, index) => (
          <span key={index} className={`font-poppins ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
