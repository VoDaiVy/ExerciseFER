import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Card, Alert } from "react-bootstrap";
import background from "./UK88/background.avif"; // Import ảnh nền
import "./Login.css"; // Import file CSS

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const audioRef = useRef(null); // Tham chiếu tới audio

  useEffect(() => {
    // Xử lý autoplay bị chặn trên trình duyệt
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => console.log("Trình duyệt chặn autoplay:", error));
      }
    };
    document.addEventListener("click", playAudio, { once: true });
    return () => document.removeEventListener("click", playAudio);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/UserAccounts?username=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        alert(`Chào Mừng, ${username}! Đã đến với cổng game UK88!`);
        navigate("/Home");
      } else {
        setError("Invalid username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${background})` }}>
      {/* Âm thanh nền */}
      <audio ref={audioRef} autoPlay loop>
        <source src="audio/nn.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      <Card className="login-card">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
