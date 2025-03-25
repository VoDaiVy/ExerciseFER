import React from "react";
import Choice from "./Choice";

const choices = ["shrimp", "fish", "crab", "rooster", "gourd", "deer"];

const Choices = ({ placeBet, bets }) => {
  return (
    <div className="choices">
      {choices.map((choice) => (
        <Choice
          key={choice}
          id={choice}
          name={choice}
          onClick={() => placeBet(choice)}
          betAmount={bets[choice]}
        />
      ))}
    </div>
  );
};

export default Choices;
