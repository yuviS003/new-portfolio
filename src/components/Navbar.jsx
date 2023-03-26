import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const NavLink = ({ label, href }) => (
  <li
    className="text-white font-poppins font-medium cursor-pointer
    hover:text-[#00adb5] transition tracking-wider text-lg"
  >
    <a href={href}>{label}</a>
  </li>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sticky top-0 right-0 left-0 border-b-[1px] border-[#ededed1a] h-[100px] sm:h-[130px] z-[103] flex justify-between items-center  py-0 px-[10%] backdrop-blur-xl bg-[#222831]/30 ">
      <a
        href="/"
        className="text-[#eee] font-oswald text-[1.5rem] font-semibold tracking-tighter"
      >
        YuvrajSingh
      </a>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <AiOutlineClose color="#eee" size={40} />
        ) : (
          <CgMenuRight color="#eee" size={40} />
        )}
      </div>
      {toggle && (
        <ul className="fixed lg:hidden top-[100px] right-[60px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black z-[105] rounded px-8 py-4 flex flex-col justify-center items-start gap-2 list-none transition">
          <NavLink label="Home" href="/" />
          <NavLink label="About" href="#about" />
          <NavLink label="Project" href="#project" />
          <NavLink label="Contact" href="#contact" />
        </ul>
      )}
      <ul className="hidden lg:flex items-center justify-center gap-10 list-none">
        <NavLink label="Home" href="/" />
        <NavLink label="About" href="#about" />
        <NavLink label="Project" href="#project" />
        <NavLink label="Contact" href="#contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
