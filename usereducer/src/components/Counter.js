import { Button } from "react-bootstrap";
import React, { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}
function Counter() {
  // Sử dụng useReducer để quản lý trạng thái count
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div style={{margin: 10, padding: 10}}>
      <h1>Counter: {state.count}</h1>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
      <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
      <Button variant="secondary"onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </div>
  );
}

export default Counter;