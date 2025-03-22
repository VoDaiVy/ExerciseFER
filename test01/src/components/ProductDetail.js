import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import { ArrowLeft, CartPlus } from "react-bootstrap-icons"; // Import icon

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:5005/Products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="product-detail-wrapper">
            <Container className="mt-5 d-flex justify-content-center">
                {loading ? (
                    <Spinner animation="border" />
                ) : product ? (
                    <Card className="product-detail-card">
                        <Card.Img variant="top" src={product.image} alt={product.name} className="product-detail-img" />
                        <Card.Body>
                            <Card.Title className="text-center">{product.name}</Card.Title>
                            <Card.Text className="text-muted text-center">{product.category}</Card.Text>
                            <Card.Text className="price-text">${product.price}</Card.Text>
                            <Card.Text className="stock-text">
                                <strong>Stock:</strong> {product.stock}
                            </Card.Text>
                            <Card.Text className="description-text">{product.description}</Card.Text>

                            <div className="d-flex justify-content-between">
                                <Button variant="secondary" onClick={() => navigate("/products")}>
                                    <ArrowLeft className="me-2" /> Back to Products
                                </Button>
                                <Button variant="success">
                                    <CartPlus className="me-2" /> Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ) : (
                    <p>Product not found!</p>
                )}
            </Container>
        </div>

    );
};

export default ProductDetail;
