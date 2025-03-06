import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import UserProfile from "./components/UserProfile";
import NameList from "./components/NameList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
// Dùng Container, Row, Col để bố trí các Card
import StudentCard from "./components/StudentCard"; // Import StudentCard component


function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/images/student1.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/images/student2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/images/student3.jpg" },
  ];

  return (
    <div>
      <>
      <Welcome name="traltb@fe.edu.vn" />
      <Welcome name="fptdn@fe.edu.vn" />
      <UserProfile user={userData} />
      <NameList names={namesList} />
    </>
    
    </div>
  );
}

export default App;
