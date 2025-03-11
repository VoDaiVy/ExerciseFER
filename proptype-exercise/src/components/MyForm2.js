import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (formData.name.length < 3 || formData.name.length > 50) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự!";
    }
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (formData.phone.length < 10 || formData.phone.length > 15) {
      newErrors.phone = "Số điện thoại phải có từ 10-15 chữ số!";
    }
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center text-primary">{title}</h2>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          Lỗi: Vui lòng kiểm tra lại thông tin!
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white">
        <Form.Group>
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Giới tính</Form.Label>
          <Form.Select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Chọn giới tính</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Check
            type="checkbox"
            name="termsAccepted"
            label="Đồng ý với điều khoản"
            checked={formData.termsAccepted}
            onChange={handleChange}
            isInvalid={!!errors.termsAccepted}
          />
          <Form.Control.Feedback type="invalid">{errors.termsAccepted}</Form.Control.Feedback>
        </Form.Group>

        <Button className="mt-3 w-100" variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </div>
  );
};

export default MyForm;