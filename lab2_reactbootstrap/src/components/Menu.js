import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const menuItems = [
    { id: 1, title: "Margherita Pizza", price: "$20.00", img: "https://source.unsplash.com/200x200/?pizza" },
    { id: 2, title: "Mushroom Pizza", price: "$25.00", img: "https://source.unsplash.com/200x200/?mushroom,pizza" },
    { id: 3, title: "Hawaiian Pizza", price: "$30.00", img: "https://source.unsplash.com/200x200/?hawaiian,pizza" },
    { id: 4, title: "Pesto Pizza", price: "$30.00", img: "https://source.unsplash.com/200x200/?pesto,pizza" }
];

const Menu = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center text-white">Our Menu</h2>
            <Row className="mt-4">
                {menuItems.map(item => (
                    <Col key={item.id} md={3}>
                        <Card className="text-center bg-dark text-white">
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.price}</Card.Text>
                                <Button variant="warning">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;
