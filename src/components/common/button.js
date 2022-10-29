import React from "react";
import { RefreshIcon } from "@heroicons/react/solid";

const Button = ({ title, type = "button", iconName, ...rest }) => {
  function getIcon(iconName) {
    switch (iconName) {
      case "check":
        return (
          <svg
            className="h-7 w-7 text-indigo-200 group-hover:text-indigo-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "lock":
        return (
          <svg
            className="h-5 w-5 text-indigo-200 group-hover:text-indigo-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "refresh":
        return (
          <RefreshIcon className="h-5 w-5 text-indigo-200 animate-spin group-hover:text-indigo-100" />
        );
      default:
        return <></>;
    }
  }
  return (
    <button
      type={type}
      {...rest}
      className="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        {getIcon(iconName)}
      </span>
      {title}
    </button>
  );
};

export default Button;
