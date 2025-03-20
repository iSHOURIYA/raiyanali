import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
