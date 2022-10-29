import React from "react";
import { Link } from "react-router-dom";
import { CogIcon, MapIcon, CollectionIcon } from "@heroicons/react/outline";

const Navigation = () => {
  return (
    <nav className="w-full absolute bottom-0 h-16 pt-2.5 px-3 bg-white border-t border-gray-200 grid grid-cols-3 ">
      <Link
        to="/search"
        className="flex flex-col text-sm items-center text-black hover:text-gray-600"
      >
        <MapIcon className="h-6 w-6" />
        <span>Карта</span>
      </Link>
      <Link
        to="/friends"
        className="flex relative flex-col text-sm items-center text-black hover:text-gray-600"
      >
        <CollectionIcon className="h-6 w-6" />
        <span>Покупки</span>
      </Link>
      <Link
        to="/profile"
        className="flex flex-col text-sm items-center text-black hover:text-gray-600"
      >
        <CogIcon className="h-6 w-6" />
        <span>Профиль</span>
      </Link>
    </nav>
  );
};

export default Navigation;
