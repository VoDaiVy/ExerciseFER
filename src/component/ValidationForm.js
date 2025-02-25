import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ValidationForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [option, setOption] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormValid(name.trim() !== "" && gender !== "" && option !== "" && agreed);
  }, [name, gender, option, agreed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (formValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Họ và Tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={submitted && name.trim() === ""}
        />
        <Form.Control.Feedback type="invalid">Vui lòng nhập tên.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label>
        <Form.Check
          type="radio"
          label="Nam"
          name="gender"
          onChange={() => setGender("Nam")}
          isInvalid={submitted && gender === ""}
        />
        <Form.Check
          type="radio"
          label="Nữ"
          name="gender"
          onChange={() => setGender("Nữ")}
          isInvalid={submitted && gender === ""}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Chọn quốc gia của bạn</Form.Label>
        <Form.Control
          as="select"
          value={option}
          onChange={(e) => setOption(e.target.value)}
          isInvalid={submitted && option === ""}
        >
          <option value="">-- Chọn Quốc gia --</option>
          <option value="A">Việt Nam</option>
          <option value="B">Nhật Bản</option>
          <option value="C">Hàn Quốc</option>
          <option value="C">Trung Quốc</option>
          <option value="C">Tây Ban Nha</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">Vui lòng chọn một giá trị.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          isInvalid={submitted && !agreed}
        />
        <Form.Control.Feedback type="invalid">Bạn phải đồng ý với điều khoản.</Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
};

export default ValidationForm;
