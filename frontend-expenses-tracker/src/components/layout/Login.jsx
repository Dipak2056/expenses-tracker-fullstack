import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome back</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className="text-end">
          New here ? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
