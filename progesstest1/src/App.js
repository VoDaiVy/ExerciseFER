import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";

const students = [
  {
    id: "DE180881",
    name: "Nguyễn Thành Sơn",
    location: "Kom Tum",
    image: "1.jpg",
  },
  {
    id: "DE180819",
    name: "Trịnh Minh Hải",
    location: "Đà Nẵng",
    image: "2.jpg",
  },
  {
    id: "DE180817",
    name: "Võ Đại Vỹ",
    location: "Quảng Nam",
    image: "3.jpg",
  },
  {
    id: "DE180740",
    name: "Nguyễn Trương Hoàng Vũ",
    location: "Hội An",
    image: "4.jpg",
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Container className="text-center mt-4">
        <h2>Students Detail</h2>
        <Row>
          {students.map((student) => (
            <Col key={student.id} sm={12} md={6} lg={4} xl={3}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;