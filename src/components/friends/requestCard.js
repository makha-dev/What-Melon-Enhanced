import React from "react";
import { XIcon, CheckIcon } from "@heroicons/react/solid";

const RequestCard = ({ user, onAccept, onReject }) => {
  return (
    <div className="mb-4 rounded-md bg-white border border-gray-100 h-16 px-3 flex items-center justify-around ">
      <div className="flex flex-1 items-center space-x-2">
        <img
          src={user.avatar}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
          alt=""
        />
        <p className="text-lg truncate">{user.email}</p>
      </div>
      <div className="flex  items-center space-x-2">
        <button
          onClick={() => onReject(user._id)}
          className="p-2 bg-red-50 hover:bg-red-200 rounded-lg"
        >
          <XIcon className="h-5 w-5 text-red-500" />
        </button>
        <button
          onClick={() => onAccept(user._id)}
          className="p-2 bg-blue-50 hover:bg-blue-200 rounded-lg"
        >
          <CheckIcon className="h-5 w-5 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
