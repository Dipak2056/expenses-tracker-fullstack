import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  emai: "",
  password: "",
};
export const Register = () => {
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formDt);
    //call api using axios
  };
  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3> Register to Join us</h3>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Enter fullname"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Password"
          />
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
