import React from "react";
import { Container } from "react-bootstrap";
import ToDoList from "./components/ToDoList";
import Calculator from "./components/Calculator";
import SearchFilter from "./components/SearchFilter";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container className="mt-4">
      <h1 className="text-center">React Exercises</h1>
      <ToDoList />
      <Calculator />
      <SearchFilter />
    </Container>
  );
};

export default App;