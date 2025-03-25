import React, { useState } from "react";

const images = {
  shrimp: "/images/shrimp.png",
  fish: "/images/fish.png",
  crab: "/images/crab.png",
  rooster: "/images/rooster.png",
  gourd: "/images/gourd.png",
  deer: "/images/deer.png",
};

const choices = Object.keys(images);

const Board = ({ bets, setMoney, setBets, setResult }) => {
  const [dice, setDice] = useState(["shrimp", "fish", "crab"]);
  const [isRolling, setIsRolling] = useState(false);

  const totalBet = Object.values(bets).reduce((sum, value) => sum + value, 0);

  const rollDice = () => {
    if (totalBet === 0) {
      setResult("Bạn phải đặt cược trước khi quay!");
      return;
    }

    setIsRolling(true);
    let rollTimes = 10; // Số lần thay đổi ngẫu nhiên trước khi dừng
    let count = 0;

    const interval = setInterval(() => {
      const randomDice = Array(3)
        .fill(null)
        .map(() => choices[Math.floor(Math.random() * choices.length)]);
      setDice(randomDice);
      count++;
      
      if (count >= rollTimes) {
        clearInterval(interval);
        setTimeout(() => {
          const finalDice = Array(3)
            .fill(null)
            .map(() => choices[Math.floor(Math.random() * choices.length)]);
          setDice(finalDice);
          calculateWinnings(finalDice);
          setIsRolling(false);
        }, 300);
      }
    }, 100);
  };

  const calculateWinnings = (finalDice) => {
    let winnings = 0;
    finalDice.forEach((item) => {
      if (bets[item] > 0) {
        winnings += bets[item] * 2;
      }
    });

    setMoney((prev) => prev + winnings);
    setResult(winnings > 0 ? `Bạn thắng ${winnings} xu!` : "Bạn thua cược!");

    // Reset cược sau khi quay
    setBets({
      shrimp: 0,
      fish: 0,
      crab: 0,
      rooster: 0,
      gourd: 0,
      deer: 0,
    });
  };

  return (
    <div id="game">
      <div id="dice-container" className={isRolling ? "rolling" : ""}>
        {dice.map((d, index) => (
          <img key={index} src={images[d]} alt={d} className="dice" />
        ))}
      </div>

      <button id="roll-button" onClick={rollDice} disabled={isRolling || totalBet === 0}>
        {isRolling ? "Đang quay..." : "Quay"}
      </button>
    </div>
  );
};

export default Board;