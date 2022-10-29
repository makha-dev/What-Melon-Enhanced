import React from "react";

const MainNavbar = ({ title }) => {
  return (
    <nav className="absolute top-0 w-full h-14 bg-white flex justify-center items-center shadow-sm z-10">
      <h2 className="text-xl font-bold">{title}</h2>
    </nav>
  );
};

export default MainNavbar;
