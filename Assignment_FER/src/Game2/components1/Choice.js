import React from "react";

const images = {
  shrimp: "/images/shrimp.png",
  fish: "/images/fish.png",
  crab: "/images/crab.png",
  rooster: "/images/rooster.png",
  gourd: "/images/gourd.png",
  deer: "/images/deer.png",
};

const Choice = ({ id, name, onClick, betAmount }) => {
  return (
    <div className="choice" onClick={onClick}>
      <img src={images[id]} alt={name} className="choice-image" />
      <p className="choice-name">{name.toUpperCase()}</p>
      <p>Đặt: {betAmount} xu</p>
    </div>
  );
};

export default Choice;
