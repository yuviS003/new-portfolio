import React, { useState } from "react";
import { ContactBG, ContactForm } from "../assets";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || query === "") {
      alert("Fields are empty");
    } else {
      emailjs
        .send(
          "service_r65h5qs",
          "template_2342ocl",
          {
            from_name: name,
            to_name: "Yuvraj",
            from_email: email,
            to_email: "yuvi7860808034@gmail.com",
            message: query,
          },
          "9Ka-4ajJeg2KC29Uu"
        )
        .then(() => {
          alert("Thank you. I will get back to you as soon as possible");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div id="contact">
      <div className="absolute w-full">
        <img
          src={ContactBG}
          alt="bg"
          className="w-full object-contain h-[35rem]"
        />
      </div>
      <div className="flex items-center justify-between flex-col lg:flex-row py-16 md:py-28 gap-28 lg:gap-5">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start h-[20rem] gap-3 z-[10] px-16 md:px-28">
          <div className="flex flex-col gap-3 text-4xl sm:text-5xl md:text-7xl ">
            <span className="font-poppins font-semibold text-[#eee] tracking-tighter">
              Got a project in
            </span>
            <span className="font-poppins font-semibold text-[#00adb5] tracking-tighter">
              mind?
            </span>
          </div>
          <img src={ContactForm} alt="form" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-5 md:px-24 gap-5 z-[10]">
          <div className="flex gap-4 w-full flex-col md:flex-row">
            <div className="flex flex-col gap-2 items-start w-full md:w-1/2">
              <span className="font-oswald text-white text-lg">Your Name:</span>
              <input
                type="text"
                className="bg-[#393e46] rounded-[1rem] border-0 box-border text-[#eee] font-poppins text-[1.125rem] py-[1rem] px-[1.5rem] w-full placeholder:font-bold placeholder:tracking-wide outline-none focus:outline-[#00adb5]"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full md:w-1/2">
              <span className="font-oswald text-white text-lg">
                Your Email:
              </span>
              <input
                type="email"
                className="bg-[#393e46] rounded-[1rem] border-0 box-border text-[#eee] font-poppins text-[1.125rem] py-[1rem] px-[1.5rem] w-full placeholder:font-bold placeholder:tracking-wide outline-none focus:outline-[#00adb5]"
                placeholder="johndoe@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <span className="font-oswald text-white text-lg">
              Your Message:
            </span>
            <textarea
              className="bg-[#393e46] rounded-[1rem] border-0 box-border text-[#eee] font-poppins text-[1.125rem] py-[1rem] px-[1.5rem] w-full placeholder:font-bold placeholder:tracking-wide outline-none focus:outline-[#00adb5]"
              placeholder="Hey! Want to hire you..."
              value={query}
              rows={7}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#00adb5] py-3 px-5 text-[#eee] font-poppins text-lg font-semibold justify-center rounded-lg hover:shadow-black hover:shadow-lg transition"
            onClick={handleSubmit}
          >
            Send Message
            <FiSend color="#eee" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
