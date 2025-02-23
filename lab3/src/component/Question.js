import React from "react";

const Question = ({ question, options, handleAnswerClick }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleAnswerClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;