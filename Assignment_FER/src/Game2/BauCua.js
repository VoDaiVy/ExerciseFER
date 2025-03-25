import React, { useState } from "react";
import Board from "./components1/Board";
import Money from "./components1/Money";
import Choices from "./components1/Choices";
import Result from "./components1/Result";
import "./styles.css";

const BauCua = () => {
  const [money, setMoney] = useState(200);
  const [result, setResult] = useState("");
  const [bets, setBets] = useState({
    shrimp: 0,
    fish: 0,
    crab: 0,
    rooster: 0,
    gourd: 0,
    deer: 0,
  });

  const placeBet = (choice) => {
    if (money >= 10) {
      setBets((prev) => ({ ...prev, [choice]: prev[choice] + 10 }));
      setMoney(money - 10);
    } else {
      setResult("Không đủ tiền đặt cược!");
    }
  };

  return (
    <div id="game" className="p-6 text-center bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Nhạc nền */}
      <audio autoPlay loop>
        <source src="/audio/sunwin.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      <h1 className="text-4xl font-bold text-red-600 mb-6 drop-shadow-lg">Bầu Cua Tôm Cá</h1>
      <Money money={money} />
      <Board bets={bets} setMoney={setMoney} setBets={setBets} setResult={setResult} />
      <Result result={result} />
      <Choices placeBet={placeBet} bets={bets} />
    </div>
  );
}

export default BauCua;
