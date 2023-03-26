import React from "react";
import { Gericht } from "../assets";

const ProjectCard = () => {
  return (
    <div className="border border-gray-800 rounded-lg bg-gray-600 bg-opacity-60 p-3 font-oswald flex flex-col gap-4">
      <div className="text-3xl font-bold text-white tracking-tighter">
        Gericht
      </div>
      <img src={Gericht} alt="gri" className="object-fill max-h-[40%]" />
      <div className="text-white tracking-tight leading-6">
        The sun was setting over the mountains, casting a warm glow over the
        landscape. Birds sang in the trees as a gentle breeze blew through the
        valley.As the sun dipped below the horizon, the sky turned a fiery red.
        A flock of geese flew overhead, honking loudly. The air was filled with
        the sweet scent of wildflowers.
      </div>
      <div className="flex gap-3">
        <span>#meta</span>
        <span>#react</span>
      </div>
    </div>
  );
};

export default ProjectCard;
