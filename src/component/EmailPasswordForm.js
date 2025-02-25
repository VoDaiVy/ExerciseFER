import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email); // Regex kiểm tra email hợp lệ
};

const validatePassword = (password) => {
  return password.length >= 8; // Mật khẩu ít nhất 8 ký tự
};

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(validatePassword(password));
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={submitted && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={submitted && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary" disabled={!emailValid || !passwordValid}>
        Submit
      </Button>
    </Form>
  );
};

export default EmailPasswordForm;
