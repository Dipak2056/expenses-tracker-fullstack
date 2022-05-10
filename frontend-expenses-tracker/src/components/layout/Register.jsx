import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3> Register to Join us</h3>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter fullname" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          Already have account ? <Link to="/">Login</Link>
        </div>
      </Form>
    </Row>
  );
};
