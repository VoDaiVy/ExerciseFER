import React from "react";
import Counter from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeNameAge from "./components/ChangeNameAge";
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";
import { Container } from "react-bootstrap";
import './App.css';


function App() {
  return (
    <div>
      <Container className="d-flex flex-column align-items-center">
      <Counter />
      </Container>
      <ChangeNameAge/>
      <ItemList/>
      <QuestionBank/>
    </div>
  );
}

export default App;
