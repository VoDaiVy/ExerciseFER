import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Spinner, Row, Col } from "react-bootstrap";

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5001/Products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="background-wrapper">
            <Container className="content">
                <h2 className="text-center mb-4">Product View</h2>
                {loading ? (
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" />
                    </div>
                ) : (
                    <Row className="g-4">
                        {products.map((product) => (
                            <Col key={product.id} md={4} sm={6} xs={12}>
                                <Card className="product-card">
                                    <Card.Img variant="top" src={product.image} alt={product.name} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            <strong>Category:</strong> {product.category} <br />
                                            <strong>Price:</strong> ${product.price} <br />
                                            <strong>Stock:</strong> {product.stock}
                                        </Card.Text>
                                        <Link to={`/products/${product.id}`}>
                                            <Button variant="primary" className="w-100">View Details</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>

    );
};

export default ProductManagement;
