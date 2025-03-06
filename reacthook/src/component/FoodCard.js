import React from "react";
import { Card, Button } from "react-bootstrap";


const FoodCard = ({product}) => {
  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        alt={`${product.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{product.id}</Card.Title>
        <Card.Text> {product.name}</Card.Text>
        <Button variant="outline-secondary" >Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
