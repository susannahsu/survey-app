import { Formik } from "formik";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { createSurvey } from "../services/firebase";

export default function Survey() {
  const onFormSubmit = async (values) => {
    await createSurvey(values);
    console.log("done");
  };

  return (
    <Container>
      <Formik initialValues={{ name: "" }} onSubmit={onFormSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                value={values.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter name"
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>How satisfied are you?</Form.Label>
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="howSatisfied"
                label="Not Satisfied"
                value="Not Satisfied"
              />
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="howSatisfied"
                label="Somewhat Satisfied"
                value="Somewhat Satisfied"
              />
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="howSatisfied"
                label="Very Satisfied"
                value="Very Satisfied"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Range</Form.Label>
              <Form.Range />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                value={values.select}
                name="select"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Where have you visited? (select all that apply)
              </Form.Label>
              <Form.Check
                type="checkbox"
                name="visitedChecked"
                label="New York"
                value="New York"
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                name="visitedChecked"
                label="Los Angeles"
                value="Los Angeles"
                onChange={handleChange}
              />
              <Form.Check
                type="checkbox"
                name="visitedChecked"
                label="Austin"
                value="Austin"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
