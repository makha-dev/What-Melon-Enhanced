import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

const ProfileNavbar = ({ title }) => {
  return (
    <nav className="w-full h-14 bg-white relative flex justify-center items-center shadow-sm">
      <ArrowCircleLeftIcon
        onClick={() => window.history.back()}
        className="w-7 h-7 text-gray-600 absolute left-4"
        tabIndex={0}
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <Link
        to="/logout"
        className="h-7 text-red-500 flex items-center absolute right-4"
      >
        <span className="font-semibold">Log out</span>
      </Link>
    </nav>
  );
};

export default ProfileNavbar;
