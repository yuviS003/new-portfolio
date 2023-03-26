import React from "react";
import { arrow, hero } from "../assets";

const Hero = () => {
  return (
    <div
      id="#hero"
      className="flex flex-col lg:flex-row justify-center items-center gap-10 px-32 py-14"
    >
      <div className="flex justify-center items-end">
        <div className="">
          <img src={arrow} alt="arrow" className="object-fill" />
        </div>
        <div className="flex flex-col">
          <div className="font-poppins text-6xl md:text-8xl uppercase font-bold">
            <div className="text-[#EEEEEE]">
              creative <br /> software
            </div>
            <div className="text-[#00ADB5]">developer</div>
          </div>
          <br />
          <div className="flex gap-5 items-center pl-3 text-[18px]">
            <button
              type="button"
              className="bg-[#393E46BF] px-5 py-2 rounded-3xl cursor-pointer hover:drop-shadow-xl transition"
            >
              <span className="font-poppins font-bold text-white">Hire me</span>
            </button>
            <button
              type="button"
              className="bg-[#00ADB5] px-5 py-2 rounded-3xl cursor-pointer hover:drop-shadow-xl transition"
            >
              <span className="font-poppins font-bold text-white">
                Download Resume
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-w-[20rem]">
        <img src={hero} alt="hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
