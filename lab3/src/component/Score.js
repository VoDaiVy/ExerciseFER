import React from "react";

const Score = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>
        Your score: {score} / {totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Restart Quiz</button>
    </div>
  );
};

export default Score;
