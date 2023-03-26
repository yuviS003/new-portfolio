import React from "react";
import { aboutBg, aboutDesk } from "../assets";

const About = () => {
  return (
    <div id="about">
      <div className="absolute left-[20rem] my-14">
        <img src={aboutBg} alt="bg" className="object-cover" />
      </div>
      <div className="relative px-28 py-32">
        <div className="flex justify-center items-center flex-col lg:flex-row">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-5">
              <span className="font-poppins text-7xl font-semibold text-[#eee] tracking-tighter">
                About
              </span>
              <span className="font-poppins text-7xl font-semibold text-[#00adb5] tracking-tighter">
                me
              </span>
            </div>
            <div className="font-poppins text-lg font-medium text-[#eee] tracking-tighter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, veritatis! Nulla sunt optio facere eaque recusandae
              dignissimos. Sequi reprehenderit ducimus vitae eius aliquid
              possimus perspiciatis accusamus dignissimos dolorem, veritatis
              obcaecati.
            </div>
          </div>
          <div className="flex justify-center items-center min-w-[50%]">
            <img src={aboutDesk} alt="desk" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
