import React from "react";

const footer = () => {
  return (
    <div className="flex flex-row justify-around items-center w-full shadow-md border-t-2 p-8 border-solid font-medium text-lg phone:flex-col phone:items-start phone:gap-6 phone:text-base">
      <p>2023 © All Rights Reserved.</p>
      <p>Built with<span className="text-red-500"> ♡ </span>by Bilal Shweike</p>
      <a target="_blank" href="mailto:shweike000@gmail.com">
        <u>Say Hello</u>
      </a>
    </div>
  );
};

export default footer;
