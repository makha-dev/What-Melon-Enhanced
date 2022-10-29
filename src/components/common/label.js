import React from "react";

const Label = ({ htmlFor, text, children, ...rest }) => {
  return (
    <label
      className="w-full mb-0.5 font-semibold text-lg"
      htmlFor={htmlFor}
      {...rest}
    >
      {text}
      {children}
    </label>
  );
};

export default Label;
