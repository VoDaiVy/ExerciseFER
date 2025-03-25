import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./components/Home";
import NavigationBar from "./components/Navbar";
import TicTacToe from "./Game1/TicTacToe";
import TaiXiu from "./Game3/TaiXiu";
import BauCua from "./Game2/BauCua";
import XiLac from "./Game4/XiLac";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <NavigationBar />
              <Home />
            </>
          }
        />
        <Route
          path="/game1"
          element={
            <>
              <NavigationBar />
              <TicTacToe />
            </>
          }
        />
        <Route
          path="/game2"
          element={
            <>
              <NavigationBar />
              <BauCua />
            </>
          }
        />
        <Route
          path="/game3"
          element={
            <>
              <NavigationBar />
              <TaiXiu />
            </>
          }
        />
        <Route
          path="/game4"
          element={
            <>
              <NavigationBar />
              <XiLac />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;