import React, { useState, useRef } from "react";
import "./TaiXiu.css";
import dice1 from "./Dice/dice1.png";
import dice2 from "./Dice/dice2.png";
import dice3 from "./Dice/dice3.png";
import dice4 from "./Dice/dice4.png";
import dice5 from "./Dice/dice5.png";
import dice6 from "./Dice/dice6.png";
import backgroundLeft from "./Dice/CNP.webp"; // Thêm hình ảnh bên trái
import backgroundRight from "./Dice/CTT.jpg"; // Thêm hình ảnh bên phải

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const TaiXiu = () => {
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const [bet, setBet] = useState(null);
  const [betAmount, setBetAmount] = useState(10000);
  const [gameResult, setGameResult] = useState("");
  const [rolling, setRolling] = useState(false);
  const [covered, setCovered] = useState(true);
  const [balance, setBalance] = useState(100000);
  const [finalResult, setFinalResult] = useState(null);
  const coverRef = useRef(null);

  const rollDice = () => {
    if (!bet) {
      setGameResult("Bạn cần đặt cược trước!");
      return;
    }

    if (betAmount <= 0 || betAmount > balance) {
      setGameResult("Số tiền cược không hợp lệ!");
      return;
    }

    setRolling(true);
    setCovered(true);
    setGameResult("");
    setFinalResult(null);

    setTimeout(() => {
      const newValues = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ];
      setDiceValues(newValues);

      const total = newValues.reduce((sum, num) => sum + num, 0);
      const result = total >= 11 ? "Tài" : "Xỉu";

      setRolling(false);
      setFinalResult({ total, result });
    }, 2000);
  };

  const handleMouseEnter = () => {
    if (!rolling && finalResult && covered) {
      setCovered(false); // Mở vật tròn

      if (bet === finalResult.result) {
        setBalance((prev) => prev + betAmount);
        setGameResult(`🎉 Bạn thắng! +${betAmount.toLocaleString()} VNĐ (Kết quả: ${finalResult.total} - ${finalResult.result})`);
      } else {
        setBalance((prev) => prev - betAmount);
        setGameResult(`😞 Bạn thua! -${betAmount.toLocaleString()} VNĐ (Kết quả: ${finalResult.total} - ${finalResult.result})`);
      }
    }
  };

  return (
    <div className="game-container">
      {/* Nhạc nền */}
      <audio autoPlay loop>
        <source src="/audio/sunwin.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      {/* Hình ảnh hai bên */}
      <img src={backgroundLeft} alt="Background Left" className="background-left" />
      <img src={backgroundRight} alt="Background Right" className="background-right" />

      {/* Nội dung chính */}
      <div className="taixiu-container">
        <h1 className="title">Game Tài Xỉu 🎲</h1>
        <div className="balance">💰 Số dư: <strong>{balance.toLocaleString()} VNĐ</strong></div>
        <div className="bet-input">
          <label>Nhập số tiền cược: </label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(Math.max(0, Math.min(balance, Number(e.target.value))))}
          />
        </div>
        <div className="game-board">
          <div className="section">
            <h2>TÀI </h2>
            <button className={`bet-button ${bet === "Tài" ? "active" : ""}`} onClick={() => setBet("Tài")}>
              Đặt
            </button>
          </div>
          <div className="dice-container">
            <div className="dice-row">
              <img src={diceImages[diceValues[0] - 1]} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
              <img src={diceImages[diceValues[1] - 1]} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
            </div>
            <div className="dice-row single">
              <img src={diceImages[diceValues[2] - 1]} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
            </div>
            {covered && (
              <div ref={coverRef} className="cover-circle" onMouseEnter={handleMouseEnter}>
                Di chuột vào để mở!
              </div>
            )}
          </div>
          <div className="section">
            <h2>XỈU </h2>
            <button className={`bet-button ${bet === "Xỉu" ? "active" : ""}`} onClick={() => setBet("Xỉu")}>
              Đặt
            </button>
          </div>
        </div>
        <button className="roll-button" onClick={rollDice} disabled={rolling}>
          {rolling ? "Đang lắc..." : "Lắc Xúc Xắc 🎲"}
        </button>
        {!covered && <p className="result">{gameResult}</p>}
      </div>
    </div>
  );
};

export default TaiXiu;
