"use client";
import Image from "next/image";
import skillsData from "./SkillsData.json";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-20 phone:p-0 phone:pb-10"
    >
      <h1 className="font-bold text-7xl text-gray-900 p-8 phone:text-3xl phone:text-center ">
        Skills unlock doors!
      </h1>
      <div className="grid grid-cols-5 grid-rows-2 gap-x-7 gap-y-11 border border-gray-400 rounded-xl shadow-xl p-16 phone:grid-cols-2 phone:p-0 phone:pl-6 phone:pr-6 phone:gap-y-0 phone:shadow-none phone:border-none">
        {skillsData.map((skill) => {
          return (
            <>
              <div className="flex flex-col items-center gap-4 hover:shadow-lg p-12 hover:rounded-xl">
                <div className="w-28 h-28">
                  <Image src={skill.image} width={200} height={200} alt="pic" />
                </div>
                <h1 className="font-medium">{skill.name}</h1>
              </div>
            </>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
