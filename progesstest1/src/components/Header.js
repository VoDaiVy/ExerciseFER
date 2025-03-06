import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      {/* Thanh điều hướng */}
      <Navbar bg="warning" expand="lg" variant="light" className="py-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/94/FPT_University_logo.png"
              alt="FPT University"
              height="40"
            />
          </Navbar.Brand>

          {/* Toggle button cho mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Menu */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Trang chủ</Nav.Link>
              <Nav.Link href="#">Đào tạo</Nav.Link>
              <Nav.Link href="#">Tuyển sinh</Nav.Link>
              <Nav.Link href="#">Liên hệ</Nav.Link>
            </Nav>

            {/* Thanh tìm kiếm */}
            <Form className="d-flex">
              <FormControl type="search" placeholder="Tìm kiếm" className="me-2" />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Ảnh Banner */}
      <div className="banner">
        <img
          src="ảnh chung.jpg"
          alt="FPT University"
          className="img-fluid w-100"
        />
      </div>
    </>
  );
};

export default Header;
