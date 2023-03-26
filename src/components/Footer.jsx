import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-[#ededed1a] h-[300px] md:h-[350px] flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10">
        <div className="flex items-center gap-4 text-[#eee] font-poppins text-lg hover:text-[#00ADB5] cursor-pointer transition">
          <BiHomeAlt />
          Home
        </div>
        <div className="flex items-center gap-4 text-[#eee] font-poppins text-lg hover:text-[#00ADB5] cursor-pointer transition">
          <AiOutlineUser />
          About
        </div>
        <div className="flex items-center gap-4 text-[#eee] font-poppins text-lg hover:text-[#00ADB5] cursor-pointer transition">
          <BsTelephone />
          Contact
        </div>
      </div>
      <div className="flex items-center gap-8 md:gap-20 text-[#eee] text-xl md:text-4xl">
        <VscGithubAlt
          className="cursor-pointer hover:text-black transition"
          title="See what I am upto!"
          onClick={() => {
            window.open("https://github.com/yuviS003", { target: "blank" });
          }}
        />
        <FiTwitter
          className="cursor-pointer hover:text-blue-400 transition"
          title="Keep tweeting along!"
        />
        <CiLinkedin
          className="cursor-pointer hover:text-blue-700 transition"
          title="Let's just be professional!"
          onClick={() => {
            window.open("https://www.linkedin.com/in/yuvraj-singh-4ab111156/", {
              target: "blank",
            });
          }}
        />
        <CgMail
          className="cursor-pointer hover:text-yellow-500 transition"
          title="No pigeons.. You think? Let's just mail!"
          onClick={() => {
            window.open("mailto:yuvi7860808034@gmail.com", {
              target: "blank",
            });
          }}
        />
      </div>
      <div className="flex gap-3">
        <div className="tracking-tight font-oswald font-semibold text-xl text-[#eee]">
          Developed By:
        </div>
        <div className="tracking-tighter font-oswald font-semibold text-xl text-[#00ADB5] brightness-200">
          Yuvraj
        </div>
      </div>
    </div>
  );
};

export default Footer;
