import React from "react";

const Card = ({ children, className }) => {
  return <div className={`bg-white rounded-lg p-4 shadow ${className}`}>{children}</div>;
};

export default Card;
