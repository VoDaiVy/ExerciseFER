import React, { useState } from "react";
import { Button, Alert, Dropdown, DropdownButton, Container, Card, Modal, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


// Example 1: Click event handling with useState
function EventHandlingDemo() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => setCount(count + 1);

  return (
    <Card className="custom-card text-center shadow-lg p-3 border-0 bg-gradient-primary">
      <Card.Body>
        <Button onClick={handleButtonClick} className="custom-button">Click me</Button>
        <p className="mt-2 fw-bold text-light">Count: {count}</p>
      </Card.Body>
    </Card>
  );
}

// Example 2: Click event triggering an alert
function MyAlert() {
  const [show, setShow] = useState(false);
  return (
    <Card className="custom-card text-center shadow-lg p-3 border-0 bg-gradient-success">
      <Card.Body>
        <Button onClick={() => setShow(true)} className="custom-button">Show Alert</Button>
        {show && (
          <Alert variant="success" onClose={() => setShow(false)} dismissible className="mt-2 shadow-sm">
            <Alert.Heading className="fw-bold">Success!</Alert.Heading>
            <p>This is a success alert—check it out!</p>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}

// Example 3: Dropdown selection event
function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Card className="custom-card text-center shadow-lg p-3 border-0 bg-gradient-warning">
      <Card.Body>
        <DropdownButton title={selectedItem || "Select an item"} className="custom-dropdown" onSelect={(eventKey, event) => setSelectedItem(event.target.innerText)}>
          <Dropdown.Item eventKey="1">Item 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Item 2</Dropdown.Item>
          <Dropdown.Item eventKey="3">Item 3</Dropdown.Item>
        </DropdownButton>
        {selectedItem && <p className="mt-2 fw-bold text-dark">You selected: {selectedItem}</p>}
      </Card.Body>
    </Card>
  );
}

// Example 4: Modal handling
function MyModal() {
  const [show, setShow] = useState(false);
  return (
    <Card className="custom-card text-center shadow-lg p-3 border-0 bg-gradient-info">
      <Card.Body>
        <Button onClick={() => setShow(true)} className="custom-button">Launch demo modal</Button>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton><Modal.Title className="fw-bold">Modal heading</Modal.Title></Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary" onClick={() => setShow(false)}>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

// Example 5: Radio button selection with alert
function MyRadioButton() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);
  return (
    <Card className="custom-card text-center shadow-lg p-3 border-0 bg-gradient-secondary">
      <Card.Body>
        <Form.Check type="radio" label="Option 1" value="option1" checked={selectedValue === "option1"} onChange={(e) => {setSelectedValue(e.target.value); setShowAlert(true);}} />
        <Form.Check type="radio" label="Option 2" value="option2" checked={selectedValue === "option2"} onChange={(e) => {setSelectedValue(e.target.value); setShowAlert(true);}} />
        {showAlert && (
          <Alert variant="info" dismissible onClose={() => setShowAlert(false)} className="mt-2 shadow-sm">
            You selected: {selectedValue}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}




export { EventHandlingDemo, MyAlert, MyDropdown, MyModal, MyRadioButton };
