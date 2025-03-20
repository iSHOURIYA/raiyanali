import React from "react";

export const Card = ({ children, className }) => {
  return <div className={`bg-gray-800 p-6 rounded-lg ${className}`}>{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};
