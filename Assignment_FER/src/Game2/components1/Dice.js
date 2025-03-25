import React from "react";

const Dice = ({ id }) => {
  return (
    <div className="dice" id={id}>
      <div className="top side"></div>
      <div className="left side"></div>
      <div className="right side"></div>
      <div className="back side"></div>
      <div className="front side"></div>
      <div className="bottom side"></div>
    </div>
  );
};

export default Dice;