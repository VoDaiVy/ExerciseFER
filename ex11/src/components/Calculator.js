import React, { useState } from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (!isNaN(a) && !isNaN(b)) {
      let res;
      switch (operator) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = b !== 0 ? a / b : "Error"; break;
        default: res = "Invalid";
      }
      setResult(res);
    }
  };

  return (
    <Card className="mt-4 p-3">
      <h3>Calculator</h3>
      <InputGroup className="mb-2">
        <Form.Control type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="First number" />
        <Form.Control type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Second number" />
      </InputGroup>
      <div className="d-flex gap-2">
        {["+", "-", "*", "/"].map((op) => (
          <Button key={op} variant="secondary" onClick={() => calculate(op)}>{op}</Button>
        ))}
      </div>
      {result !== null && <h5 className="mt-3">Result: {result}</h5>}
    </Card>
  );
};

export default Calculator;
