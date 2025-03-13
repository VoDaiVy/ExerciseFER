import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Login = () => {
  //Lưu email và mật khẩu nhập vào
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); //Dùng để chuyển trang

  //Hàm xử lý khi nhấn nút Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault(); 

    // Tài khoản mẫu 
    const correctEmail = 'vyvdde180817@fpt.edu.vn';
    const correctPassword = 'Daivyluonnoluc1324';

    if (email === correctEmail && password === correctPassword) {
      setError(''); //Xóa lỗi nếu đúng
      navigate('/posts'); //Chuyển hướng trang
    } else {
      setError('Invalid email or password!'); //Hiển thị lỗi
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>

      {/*Hiển thị thông báo lỗi nếu có */}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin}>
        {/*Ô nhập email */}
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //Cập nhật state
            required
          />
        </Form.Group>

        {/* Ô nhập mật khẩu */}
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} //Cập nhật state
            required
          />
        </Form.Group>

        {/*Nút Đăng nhập */}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
