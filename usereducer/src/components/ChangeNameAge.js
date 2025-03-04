import React, { useReducer } from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }}
function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
              placeholder="Enter name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              value={state.age}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value < 131) {  // Chỉ nhận số (0-9)
                  dispatch({ type: "SET_AGE", value });
                }
              }}
              placeholder="Enter age"
            />
          </Form.Group>
        </Col>
      </Row>

      <Card className="p-3 mt-3">
        <h3>Name: {state.name || "N/A"}</h3>
        <h3>Age: {state.age || "N/A"}</h3>
      </Card>
    </Container>
  );
}

export default ChangeNameAge;