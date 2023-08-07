import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PersonalDetails from "../components/PersonalDetails";
import Experience from "../components/Experience";
import Education from "../components/Education";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Navbar />
      <PersonalDetails/>
      <Experience/>
      <Education/>
      <Footer />
    </div>
  );
};

export default page;
