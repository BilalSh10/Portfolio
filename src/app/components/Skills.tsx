"use client";
import Image from "next/image";
import reactPic from "../assets/skillsPictures/react.png";
import nextPic from "../assets/skillsPictures/next.png";
import pythonPic from "../assets/skillsPictures/python.png";
import githubPic from "../assets/skillsPictures/github.png";
import firebasePic from "../assets/skillsPictures/firebase.png";
import tailwindPic from "../assets/skillsPictures/tailwind.png";
import cssPic from "../assets/skillsPictures/css.png";
import htmlPic from "../assets/skillsPictures/html.png";
import javascriptPic from "../assets/skillsPictures/javascript.png";
import Nodejs from "../assets/skillsPictures/mySQL.png";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-20 phone:p-0 phone:pb-10"
    > 
      <h1 className="font-bold text-7xl text-gray-900 p-8 phone:text-3xl phone:text-center ">Skills unlock doors!</h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-x-7 gap-y-11 border border-gray-400 rounded-xl shadow-xl p-16 phone:grid-cols-2 phone:p-0 phone:pl-6 phone:pr-6 phone:gap-y-0 phone:shadow-none phone:border-none">
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28">
            <Image src={reactPic} alt="pic" />
          </div>
          <h1 className="font-medium">React.js</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={nextPic} alt="pic" />
          </div>
          <h1 className="font-medium">Next.js</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={pythonPic} alt="pic" />
          </div>
          <h1 className="font-medium">Python</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={githubPic} alt="pic" />
          </div>
          <h1 className="font-medium">Github</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={firebasePic} alt="pic" />
          </div>
          <h1 className="font-medium">Firebase</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={tailwindPic} alt="pic" />
          </div>
          <h1 className="font-medium">Tailwind css</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={cssPic} alt="pic" />
          </div>
          <h1 className="font-medium">CSS</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={htmlPic} alt="pic" />
          </div>
          <h1 className="font-medium">HTML</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={javascriptPic} alt="pic" />
          </div>
          <h1 className="font-medium">JavaScript</h1>
        </div>
        <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
          <div className="w-28 h-28 ">
            <Image src={Nodejs} alt="pic" />
          </div>
          <h1 className="font-medium">mySQL</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
