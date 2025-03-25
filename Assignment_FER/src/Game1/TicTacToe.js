import React, { useState, useEffect, useRef } from "react";
import "./Game1.css";

const TicTacToe = () => {
  const [size, setSize] = useState(15); // Kích thước bàn cờ
  const [board, setBoard] = useState(Array(size * size).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const audioRef = useRef(null); // Tham chiếu đến audio

  useEffect(() => {
    // Xử lý autoplay bị chặn
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Trình duyệt chặn autoplay:", error));
      }
    };
    document.addEventListener("click", playAudio, { once: true });
    return () => document.removeEventListener("click", playAudio);
  }, []);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    checkWinner(newBoard, index);
  };

  const checkWinner = (newBoard, index) => {
    const player = newBoard[index];
    if (!player) return;

    const directions = [
      [1, 0], // Hàng ngang
      [0, 1], // Cột dọc
      [1, 1], // Chéo chính
      [1, -1], // Chéo phụ
    ];

    for (let [dx, dy] of directions) {
      let count = 1;
      for (let i = 1; i < 5; i++) {
        const nx = (index % size) + dx * i;
        const ny = Math.floor(index / size) + dy * i;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) break;
        if (newBoard[ny * size + nx] === player) count++;
        else break;
      }
      for (let i = 1; i < 5; i++) {
        const nx = (index % size) - dx * i;
        const ny = Math.floor(index / size) - dy * i;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) break;
        if (newBoard[ny * size + nx] === player) count++;
        else break;
      }
      if (count >= 5) {
        setWinner(player);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(size * size).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const changeSize = (newSize) => {
    setSize(newSize);
    setBoard(Array(newSize * newSize).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe">
      {/* Nhạc nền */}
      <audio ref={audioRef} autoPlay loop>
        <source src="audio/sunwin.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      <h1>Cờ Ca Rô</h1>
      <div className="size-controls">
        <label>Chọn kích thước: </label>
        <select onChange={(e) => changeSize(Number(e.target.value))} value={size}>
          {[10, 15, 20, 25].map((s) => (
            <option key={s} value={s}>{`${s} x ${s}`}</option>
          ))}
        </select>
      </div>
      <div className="board" style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
        {board.map((value, index) => (
          <div
            key={index}
            className={`square ${value ? value : ""}`}
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {winner && <div className="status">Người thắng: {winner}</div>}
      <button className="reset-button" onClick={resetGame}>Bắt đầu lại</button>
    </div>
  );
};

export default TicTacToe;
