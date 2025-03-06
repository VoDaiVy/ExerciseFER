import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={student.image} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>ID: {student.id}</Card.Text>
        <Card.Text>Location: {student.location}</Card.Text>
        <Form>
          <Form.Check type="radio" label="Absent" name={student.id} />
          <Form.Check type="radio" label="Present" name={student.id} />
          <Button variant="warning" className="mt-2">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;