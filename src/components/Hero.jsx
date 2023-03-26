import React from "react";
import { arrow, hero } from "../assets";

const Hero = () => {
  return (
    <div
      id="#hero"
      className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-10 px-8 sm:px-24 md:px-32 py-14"
    >
      <div className="flex justify-center items-end">
        <div className="hidden sm:block">
          <img src={arrow} alt="arrow" className="object-fill" />
        </div>
        <div className="flex flex-col">
          <div className="font-poppins text-2xl sm:text-6xl md:text-8xl uppercase font-bold">
            <div className="text-[#EEEEEE]">
              creative <br className="hidden sm:block" /> software
            </div>
            <div className="text-[#00ADB5]">developer</div>
          </div>
          <br />
          <div className="flex gap-5 items-center sm:pl-3 text-[14px] sm:text-[18px]">
            <a href="#contact">
              <button
                type="button"
                className="bg-[#393E46BF] px-3 sm:px-5 py-2 rounded-3xl cursor-pointer hover:shadow-black hover:shadow-lg transition"
              >
                <span className="font-poppins font-bold text-white">
                  Hire me
                </span>
              </button>
            </a>
            <button
              type="button"
              className="bg-[#00ADB5] px-3 sm:px-5 py-2 rounded-3xl cursor-pointer ho hover:shadow-black hover:shadow-lg transition"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1SNbrBOgGZ_v-CGc3kyQI6ZfwB_KE999q/view?usp=sharing",
                  { target: "blank" }
                );
              }}
            >
              <span className="font-poppins font-bold text-white">
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-w-[8rem] sm:min-w-[20rem]">
        <img src={hero} alt="hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
