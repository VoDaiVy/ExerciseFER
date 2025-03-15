import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { FaUser, FaUtensils } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

// User list
const users = [
  { id: 1, name: 'Huong Ly', age: 32, image: '/images/user/HuongLy.jpg' },
  { id: 2, name: 'Tran Thanh', age: 38, image: '/images/user/TranThanh.webp' },
  { id: 3, name: 'Truong Giang', age: 41, image: '/images/user/TruongGiang.webp' },
  { id: 4, name: 'Viet Huong', age: 48, image: '/images/user/VietHuong.webp' },
  { id: 5, name: 'Vy Vo', age: 21, image: '/images/user/VyVo.JPG' }
];

// Dish list
const dishes = [
  { id: 1, name: 'Uthappizza', category: 'Main Course', price: '4.99', image: '/images/dishes/Uthappizza.jpg' },
  { id: 2, name: 'Vadonut', category: 'Dessert', price: '2.99', image: '/images/dishes/Vadonut.webp' },
  { id: 3, name: 'Zucchipakoda', category: 'Dessert', price: '2.99', image: '/images/dishes/Zucchipakoda.jpg' },
  { id: 4, name: 'ElaiCheese Cake', category: 'Dessert', price: '2.99', image: '/images/dishes/ElaiCheese Cake.jpg' }
];

// Component to display the user list
const UserList = () => (
  <Container className="mt-4">
    <h2>User List</h2>
    <Row>
      {users.map(user => (
        <Col key={user.id} md={4}>
          <Card className="mb-4 shadow">
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Button variant="primary" as={Link} to={`/users/${user.id}`}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

// Component to display user details
const UserDetails = () => {
  const { id } = useParams();
  const user = users.find(u => u.id === parseInt(id));
  return user ? (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Img variant="top" src={user.image} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>Age: {user.age}</Card.Text>
          <Button variant="secondary" as={Link} to="/users">Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  ) : <h2 className="mt-4 text-danger">User not found</h2>;
};

// Component to display the dish list
const DishList = () => (
  <Container className="mt-4">
    <h2>Dish List</h2>
    <Row>
      {dishes.map(dish => (
        <Col key={dish.id} md={4}>
          <Card className="mb-4 shadow">
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>Price: ${dish.price}</Card.Text>
              <Button variant="primary" as={Link} to={`/dishes/${dish.id}`}>View Details</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

// Component to display dish details
const DishDetails = () => {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));
  return dish ? (
    <Container className="mt-4">
      <Card className="shadow">
        <Card.Img variant="top" src={dish.image} />
        <Card.Body>
          <Card.Title>{dish.name}</Card.Title>
          <Card.Text>Category: {dish.category}</Card.Text>
          <Card.Text>Price: ${dish.price}</Card.Text>
          <Button variant="secondary" as={Link} to="/dishes">Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  ) : <h2 className="mt-4 text-danger">Dish not found</h2>;
};

// Navigation bar component
const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      {/* Logo */}
      <Navbar.Brand as={Link} to="/">
        <img src="/images/logo/logo.jpeg" alt="Logo" width="40" height="40" className="d-inline-block align-top me-2" />
        F&B Management
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* User link with icon */}
          <Nav.Link as={Link} to="/users">
            <FaUser className="me-2" /> Users
          </Nav.Link>
          {/* Dishes link with icon */}
          <Nav.Link as={Link} to="/dishes">
            <FaUtensils className="me-2" /> Dishes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

// Main App Component
const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="/dishes" element={<DishList />} />
      <Route path="/dishes/:id" element={<DishDetails />} />
      <Route path="/" element={<DishList />} />
    </Routes>
  </Router>
);

export default App;
