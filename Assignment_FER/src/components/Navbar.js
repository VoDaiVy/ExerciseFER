import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow py-3">
      <Container>
        {/* Logo hoặc tiêu đề */}
        <Navbar.Brand as={Link} to="/home" className="fw-bold text-warning fs-4">
          🎮 Tam Thái Tử
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/game1" className="text-light fw-semibold px-3">
              TicTacToe
            </Nav.Link>
            <Nav.Link as={Link} to="/game2" className="text-light fw-semibold px-3">
              Bầu Cua Tôm Cá
            </Nav.Link>
            <Nav.Link as={Link} to="/game3" className="text-light fw-semibold px-3">
              Tài Xỉu Vận May
            </Nav.Link>
            <Nav.Link as={Link} to="/game4" className="text-light fw-semibold px-3">
            Blackjack
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Button variant="outline-danger" onClick={handleLogout} className="fw-bold">
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;