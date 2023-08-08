'use client';
import Image from "next/image";
import FlightsImage from "../assets/p1.png";
import EventsImage from "../assets/p2.png";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="phone:-mt-12"
    >
      <div className="flex items-center justify-center">
        <h1 className="text-7xl font-bold p-20 text-gray-900 phone:text-3xl phone:text-center">
          Imagination surpasses knowledge!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center border gap-20 p-16 pb-24 phone:pb-16 phone:p-10">
        <div className="flex flex-col items-center justify-center gap-6 shadow-xl border p-6 rounded-xl w-2/3 h-auto phone:w-72">
          <div className="flex flex-row justify-between w-full items-center phone:order-last phone:flex-col phone:gap-6">
            <h1 className="font-medium phone:text-base phone:font-bold">Booking Flights Website</h1><span className="phone:hidden">|</span>
            <div className="flex flex-row gap-8 items-center phone:gap-12">
              <Link
                target="_blank"
                href="https://booking-flights-website.vercel.app/"
                className="inline-flex items-center justify-center h-8 px-4 font-medium text-sm tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Visit Project
              </Link>
              <a
                className="hover:text-neutral-800 transition-all duration-100"
                target="_blank"
                href="https://github.com/BilalSh10/Booking_Flights_Website"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
          <div>
            <Image className="rounded-lg" src={FlightsImage} alt="pic" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 shadow-xl border p-6 rounded-xl w-2/3 h-auto phone:w-72">
          <div className="flex flex-row justify-between w-full items-center phone:order-last phone:flex-col phone:gap-6">
            <h1 className="font-medium phone:text-base phone:font-bold">Booking Events Website</h1><span className="phone:hidden">|</span>
            <div className="flex flex-row gap-8 items-center phone:gap-12">
              <Link
                target="_blank"
                href="https://teatro-369c1.web.app/"
                className="inline-flex items-center justify-center h-8 px-4 font-medium text-sm tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
              >
                Visit Project
              </Link>
              <a
                className="hover:text-neutral-800 transition-all duration-100"
                target="_blank"
                href="https://github.com/BilalSh10/Ekhtar-Al-Saadah"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
          <div>
            <Image className="rounded-lg" src={EventsImage} alt="pic" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
