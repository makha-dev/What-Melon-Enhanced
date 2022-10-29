import React from "react";
import Input from "./input";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

const AutoComplate = ({ query, onChange, onSearch, onCancel, matches }) => {
  return (
    <>
      <div className="relative">
        <Input
          name="query"
          type="text"
          placeholder="Search for users"
          value={query}
          autoComplete={"off"}
          onChange={(e) => onChange(e)}
        />
        {query.length !== 0 && (
          <XIcon
            onClick={() => onCancel()}
            className="absolute top-4 right-3 h-4 w-4 text-gray-500"
          />
        )}
      </div>
      <ul>
        {matches.map((match, index) => (
          <li
            onClick={() => onSearch(match)}
            key={index}
            className="flex items-center border-b first:rounded-t first:border-t border-x rounded-none last:rounded-md-b last:rounded-b-md text-lg bg-white text-black  border-gray-200 py-2 px-3 hover:bg-gray-50"
          >
            <SearchIcon className="h-4 w-4 text-gray-500 mr-2 inline-block" />
            <div>
              <span className="font-bold">{query}</span>
              <span className="font-light">{match}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AutoComplate;
