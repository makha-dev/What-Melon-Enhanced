import React, { useState } from "react";
import { UserAddIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

const UserCard = ({ user, onRequest }) => {
  const [requested, setRequested] = useState(false);
  return (
    <div className="mb-2 rounded-md bg-white border border-gray-100">
      <div className="h-16 px-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
            alt=""
          />
          <p className="text-lg truncate">{user.email}</p>
        </div>
        <button
          onClick={() => {
            if (!requested) {
              onRequest(user._id);
            }
            setRequested(true);
          }}
          className="flex items-center space-x-2 bg-blue-50 hover:bg-blue-100 rounded-lg p-2"
        >
          <span className="bg-blue-200 p-2 rounded-lg ">
            {!requested ? (
              <UserAddIcon className="h-4 w-4 text-blue-600" />
            ) : (
              <CheckIcon className="h-4 w-4 text-blue-600" />
            )}
          </span>
          <span className="text-blue-500">
            {!requested ? "Follow" : "Requested"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
