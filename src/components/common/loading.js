import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <RefreshIcon className="w-8 h-8 animate-spin text-gray-600" />
    </div>
  );
};

export default Loading;
