import { useState } from "react";
import { Form, Button, Container, Row, InputGroup } from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container fluid>
      <h2 className="mt-4">Contact</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          
            <Form.Group style={{width: '35%'}} controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="Mark" defaultValue="Mark" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group style={{width: '35%'}} controlId="validationLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Otto" defaultValue="Otto" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          
            <Form.Group style={{width: '30%'}} controlId="validationUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control type="text" placeholder="Username" required />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          
        </Row>

        <Row className="mb-3">
          
            <Form.Group style={{width: '50%'}} controlId="validationCity">
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" placeholder="City" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          
          
            <Form.Group style={{width: '25%'}} controlId="validationState">
              <Form.Label>State</Form.Label>
              <Form.Control required type="text" placeholder="State" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          
          
            <Form.Group style={{width: '25%'}} controlId="validationZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control required type="text" placeholder="Zip" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Contact;
