import React, { useState, useEffect } from "react";
import background from "./assets/BlackjackTable.webp";
import "./XiLac.css";

const getCardValue = (card) => {
  if (["J", "Q", "K"].includes(card)) return 10;
  if (card === "A") return 11;
  return parseInt(card);
};

const generateDeck = () => {
  const suits = ["♠", "♣", "♦", "♥"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  return suits.flatMap((suit) => values.map((value) => ({ value, suit })));
};

const shuffleDeck = (deck) => deck.sort(() => Math.random() - 0.5);

const calculateTotal = (hand) => {
  let total = hand.reduce((sum, card) => sum + getCardValue(card.value), 0);
  let aceCount = hand.filter((card) => card.value === "A").length;
  while (total > 21 && aceCount) {
    total -= 10;
    aceCount -= 1;
  }
  return total;
};

const XiLac = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [message, setMessage] = useState("");
  const [revealDealer, setRevealDealer] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [gameStarted, setGameStarted] = useState(false);

  const placeBet = () => {
    if (bet > balance) {
      setMessage("⚠ Không đủ tiền cược!");
      return;
    }
    setBalance(balance - bet);
    startGame();
  };

  const startGame = () => {
    const newDeck = shuffleDeck(generateDeck());
    setDeck(newDeck);
    setPlayerHand([newDeck.pop(), newDeck.pop()]);
    setDealerHand([newDeck.pop(), newDeck.pop()]);
    setMessage("");
    setPlayerTurn(true);
    setRevealDealer(false);
    setGameStarted(true);
  };

  const hit = () => {
    if (!playerTurn) return;

    const newDeck = [...deck];
    const newCard = newDeck.pop();
    setDeck(newDeck);
    setPlayerHand((prevHand) => {
      const newHand = [...prevHand, newCard];
      if (calculateTotal(newHand) > 21) {
        setMessage("❌ Bạn đã quá 21 điểm! Bạn thua!");
        setPlayerTurn(false);
        setRevealDealer(true);
        setTimeout(() => dealerPlay(newDeck, dealerHand), 1000);
      }
      return newHand;
    });
  };

  const stand = () => {
    setPlayerTurn(false);
    setRevealDealer(true);
    setTimeout(() => dealerPlay(deck, dealerHand), 1000);
  };

  const dealerPlay = (newDeck, currentDealerHand) => {
    let dealerTotal = calculateTotal(currentDealerHand);
    let newDealerHand = [...currentDealerHand];

    const drawCard = () => {
      if (dealerTotal < 17) {
        const newCard = newDeck.pop();
        newDealerHand.push(newCard);
        dealerTotal = calculateTotal(newDealerHand);
        setDealerHand([...newDealerHand]);

        if (dealerTotal < 17) {
          setTimeout(drawCard, 1000);
        } else {
          setTimeout(() => determineWinner(newDealerHand), 1000);
        }
      } else {
        setTimeout(() => determineWinner(newDealerHand), 1000);
      }
    };

    drawCard();
  };

  const determineWinner = (finalDealerHand) => {
    const playerTotal = calculateTotal(playerHand);
    const dealerTotal = calculateTotal(finalDealerHand);
    let newBalance = balance;

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      setMessage("🎉 Chúc mừng! Bạn thắng!");
      newBalance += bet * 2;
    } else if (playerTotal < dealerTotal) {
      setMessage("💀 Nhà cái thắng!");
    } else {
      setMessage("⚖ Hòa! Bạn nhận lại tiền cược.");
      newBalance += bet;
    }

    setBalance(newBalance);
    setGameStarted(false);
  };

  return (
    <div className="xilac-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="game-container">
        <h1>Xì Lác (Blackjack)</h1>
        <h2>Ví của bạn: ${balance}</h2>

        {!gameStarted ? (
          <div>
            <label>Đặt cược: </label>
            <button onClick={() => setBet((prev) => Math.max(10, prev - 10))}>➖ 10</button>
            <span style={{ margin: "0 10px" }}>${bet}</span>
            <button onClick={() => setBet((prev) => Math.min(balance, prev + 10))}>➕ 10</button>
            <button onClick={placeBet}>💰 Đặt cược</button>
          </div>
        ) : (
          <>
            <div className="dealer-section">
              <h2>Nhà cái ({revealDealer ? calculateTotal(dealerHand) : "?"})</h2>
              <div className="hand">
                {dealerHand.map((card, i) => (
                  <span key={i}>{revealDealer || i === 0 ? `${card.value}${card.suit}` : "🂠"} </span>
                ))}
              </div>
            </div>

            <div className="player-section">
              <h2>Bạn ({calculateTotal(playerHand)})</h2>
              <div className="hand">
                {playerHand.map((card, i) => (
                  <span key={i}>{card.value}{card.suit} </span>
                ))}
              </div>
            </div>

            <div className="controls">
              {playerTurn && <button onClick={hit}>🃏 Bốc bài</button>}
              {playerTurn && <button onClick={stand}>✋ Dừng</button>}
              {!playerTurn && <button onClick={() => setGameStarted(false)}>🔄 Chơi lại</button>}
            </div>
          </>
        )}

        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default XiLac;
