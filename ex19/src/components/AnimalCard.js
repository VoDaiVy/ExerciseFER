import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AnimalCard = ({ animal }) => {
  const handleMoreInfo = () => {
    alert(`notes: No Additional Information\nlink: No Additional Information`);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#f4c542' }}>
      <Card.Img variant="top" src={animal.image} alt={animal.name} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold' }}>{animal.name}</Card.Title>
        <Card.Text>
          <strong>Scientific Name:</strong> {animal.scientificName} <br />
          <strong>Size:</strong> {animal.size} <br />
          <strong>Diet:</strong> {animal.diet}
        </Card.Text>
        <Button variant="danger" onClick={handleMoreInfo}>More Info</Button>
      </Card.Body>
    </Card>
  );
};

export default AnimalCard;
