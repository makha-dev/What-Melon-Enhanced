import React from "react";

const CallIndicator = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-blue-500">
      <p className="text-white font-bold">hello@gmail.com</p>
      <div className="flex items-center gap-2">
        <p className="text-white">12:23</p>
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default CallIndicator;
