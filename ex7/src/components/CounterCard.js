import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterCard = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="card shadow-lg text-center p-4"
      style={{
        width: "18rem",
        background: "linear-gradient(135deg, #74ebd5, #acb6e5)",
        borderRadius: "15px",
      }}
    >
      <div className="card-body">
        <h5 className="card-title text-white">{title}</h5>
        <p className="card-text text-white fs-4">Count: {count}</p>
        <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default CounterCard;
