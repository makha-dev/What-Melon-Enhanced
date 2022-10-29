import React from "react";
import { ArrowCircleLeftIcon, RefreshIcon } from "@heroicons/react/outline";

const Navbar = ({ title, showRefresh = false, onRefresh }) => {
  return (
    <nav className="w-full h-14 bg-white relative  flex justify-center items-center shadow-sm z-10">
      <ArrowCircleLeftIcon
        onClick={() => window.history.back()}
        className="w-7 h-7 text-gray-600 absolute left-4"
        tabIndex={0}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      {showRefresh && (
        <RefreshIcon
          onClick={() => onRefresh(true)}
          className="w-6 h-6 text-gray-600 absolute right-4"
          tabIndex={0}
        />
      )}
    </nav>
  );
};

export default Navbar;
