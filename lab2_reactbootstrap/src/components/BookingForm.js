import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const BookingForm = () => {
    return (
        <Container className="my-5 p-4 bg-dark text-white rounded">
            <h2 className="text-center">Book Your Table</h2>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Control type="text" placeholder="Your Name *" />
                    </Col>
                    <Col>
                        <Form.Control type="email" placeholder="Your Email *" />
                    </Col>
                    <Col>
                        <Form.Select>
                            <option>Select a Service</option>
                            <option>Dine-in</option>
                            <option>Takeaway</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Form.Control as="textarea" rows={3} placeholder="Please write your comment" />
                <Button variant="warning" className="w-100 mt-3">Send Message</Button>
            </Form>
        </Container>
    );
};

export default BookingForm;
