import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

export default function Survey() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll never share your name with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>How satisfied are you?</Form.Label>
          <Form.Check
            type="radio"
            id="radio"
            name="question"
            label="Not Satisfied"
          />
          <Form.Check
            type="radio"
            id="radio"
            name="question"
            label="Somewhat Satisfied"
          />
          <Form.Check
            type="radio"
            id="radio"
            name="question"
            label="Very Satisfied"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Range</Form.Label>
          <Form.Range />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>How satisfied are you?</Form.Label>
          <Form.Check
            type="checkbox"
            id="checkbox"
            name="question"
            label="Not Satisfied"
          />
          <Form.Check
            type="checkbox"
            id="checkbox"
            name="question"
            label="Somewhat Satisfied"
          />
          <Form.Check
            type="checkbox"
            id="checkbox"
            name="question"
            label="Very Satisfied"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
