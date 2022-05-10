import React, { useRef, useState } from "react";
import { Form, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postLogin } from "../../helpers/axiosHelper";

export const Login = () => {
  const emailref = useRef("");
  const passwordref = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async () => {
    const email = emailref.current.value;
    const password = passwordref.current.value;

    if (!email || !password) {
      return alert("please enter email and password ");
    }
    setLoading(true);
    const { data } = await postLogin({ email, password });
    setLoading(false);
    console.log(data);

    if (data.status === "success") {
      //if login success, store user dataa in session storage
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
    }

    //else show the error message
    setError(data.message);
  };
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome back</h3>
        {loading && <Spinner animation="border" variant="primary"></Spinner>}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailref} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordref}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleOnSubmit}>
          Login
        </Button>
        <div className="text-end">
          New here ? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
