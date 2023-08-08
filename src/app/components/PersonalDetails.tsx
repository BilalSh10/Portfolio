'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "../assets/aha2.jpg";

const PersonalDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center pb-28"
    >
      <h1 className="text-7xl font-bold p-20 text-gray-900  phone:text-3xl phone:text-center phone:w-full phone:p-10">
        Passion Fuels Purpose!
      </h1>
      <div className="flex flex-row items-start justify-evenly phone:flex-col phone:items-center">
        <div className="phone:pl-8 phone:pr-8 phone:pt-12 phone:pb-4">
          <h1 className="font-bold text-gray-600 phone:">
            <i>BIOGRAPHY</i>
          </h1>
          <p className="my-6 font-medium">
            Hi, Im Bilal Shweike, a web developer and UI/UX
            <br />
            designer with a passion for creating beautiful,
            <br />
            functional, and user-centered digital experiences.
            <br />
            With 2 years of experience in the field. I am always
            <br />
            looking for new and innovative ways to bring my
            <br />
            clients visions to life.
          </p>
          <p className="my-6 font-medium">
            I believe that design is about more than just making
            <br />
            things look pretty – its about solving problems and
            <br />
            creating intuitive, enjoyable experiences for users.
          </p>
          <p className="my-6 font-medium">
            Whether Im working on a website, mobile app, or
            <br />
            other digital product, I bring my commitment to
            <br />
            design excellence and user-centered thinking to
            <br />
            every project I work on. I look forward to the
            <br />
            opportunity to bring my skills and passion to your
            <br />
            next project.
          </p>
        </div>
        <div className="w-1/4 h-auto rounded-2xl border-2 border-solid bg-light p-8 border-gray-700 shadow-lg shadow-black phone:order-first phone:w-3/4">
          <Image className="rounded-2xl" src={myPhoto} alt="pic" />
        </div>
        <div className="flex flex-col justify-around items-center gap-20 phone:flex-row phone:gap-2 phone:pl-5">
          <div className="flex items-end flex-col phone:items-center">
            <h1 className="font-bold text-5xl phone:text-3xl">2+</h1>
            <p className="text-gray-700 font-semiboldbold text-xl phone:text-base">
              Satisfied Clients
            </p>
          </div>
          <div className="flex items-end flex-col phone:items-center">
            <h1 className="font-bold text-5xl phone:text-3xl">4+</h1>
            <p className="text-gray-700 font-semiboldbold text-xl phone:text-base">
              Projects Completed
            </p>
          </div>
          <div className="flex items-end flex-col phone:items-center">
            <h1 className="font-bold text-5xl phone:text-3xl">2+</h1>
            <p className="text-gray-700 font-semiboldbold text-xl phone:text-base">
              Years Of Experience
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalDetails;
