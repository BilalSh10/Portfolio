"use client";
import React from "react";
import HeaderAnimation from "../assets/HeaderAnimation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row justify-evenly items-center gap-4 phone:flex-col phone:gap-0"
    >
      <div className="w-[45rem] h-[35rem] phone:h-72 phone:w-96">
        <Lottie
          animationData={HeaderAnimation}
        />
      </div>

      <div
        className="flex flex-col gap-7 phone:p-8 phone:mb-6"
      >
        <h1 className="text-5xl font-bold phone:text-2xl">
          Turning Vision Into
          <br />
          Realty With Code <br />
          And Design
        </h1>
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into <br />
          innovative web applications. Explore my latest projects, showcasing{" "}
          <br />
          my expertise in React.js, Next.js and web development.
        </p>
        <div className="flex flex-row gap-4">
          <a
            target="_blank"
            href="mailto:shweike000@gmail.com"
            className="inline-flex items-center justify-center h-12 px-8 phone:h-10 phone:text-sm phone:px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
          >
            Hire Me
          </a>
          <a
            target="_blank"
            download={true}
            href="/myCV.pdf"
            className="inline-flex items-center justify-center h-12 px-8 phone:h-10 phone:text-sm phone:px-6 font-medium tracking-wide text-black transition duration-200 bg-white rounded-lg hover:bg-gray-50 focus:shadow-outline focus:outline-none border"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
