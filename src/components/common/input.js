import React from "react";
import Label from "./label";

const Input = ({
  onChange,
  name,
  value,
  label,
  type = "text",
  placeholder = "",
  innerRef,
  error,
  ...rest
}) => {
  return (
    <div className="mt-0.5 mb-0.5">
      <Label htmlFor={name} text={label} />
      <input
        onChange={(e) => onChange(e)}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        ref={innerRef}
        className={`w-full text-lg text-black placeholder-gray-500 border border-gray-200  rounded-md py-2 pl-4 focus:border-light-blue-500  focus:outline-none focus:ring-1 focus:ring-light-blue-500`}
        {...rest}
      />

      {error && (
        <div className="w-full p-3 bg-red-50 text-red-500 border-red-800 rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
