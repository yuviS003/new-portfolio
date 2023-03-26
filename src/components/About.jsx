import React from "react";
import { aboutBg, aboutDesk } from "../assets";

const About = () => {
  return (
    <div id="about">
      <div className="absolute left-[0] md:left-[20rem] my-14">
        <img src={aboutBg} alt="bg" className="object-contain" />
      </div>
      <div className="relative px-10 sm:px-16 md:px-28 py-20 md:py-32">
        <div className="flex justify-center items-center flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap gap-5">
              <span className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-[#eee] tracking-tighter">
                About
              </span>
              <span className="font-poppins text-4xl sm:text-5xl md:text-7xl font-semibold text-[#00adb5] tracking-tighter">
                me
              </span>
            </div>
            <div className="flex flex-col">
              <div className="font-poppins text-8xl font-[800] text-[#eee]">
                "
              </div>
              <div className="font-poppins text-lg font-medium text-[#eee] tracking-tighter -mt-8">
                Hi! I'm Yuvraj, a software developer with 7+ months of
                experience in MERN stack and a keen interest in machine
                learning, open source, and remote work. As an undergrad student,
                I strive to create user-friendly, efficient, and scalable
                applications that make a difference. I'm a strong communicator
                who thrives in remote work environments and always seeking new
                challenges.
              </div>
              <div
                className="font-poppins text-lg font-bold text-[#eee] tracking-tighter cursor-pointer mt-4 hover:underline hover:underline-offset-8 transition"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/yuvraj-singh-4ab111156/",
                    { target: "blank" }
                  );
                }}
              >
                Let's connect!
              </div>
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
