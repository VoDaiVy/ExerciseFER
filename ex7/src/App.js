import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CounterCard from "./components/CounterCard";

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4 text-primary">Interactive Cards Demo</h1>
      <div className="d-flex gap-4">
        <CounterCard title="Event Handling Demo" />
        <CounterCard title="Render and Commit Demo" />
        <CounterCard title="State as a Snapshot Demo" />
      </div>
    </div>
  );
};

export default App;
