import React, { useRef, useState } from "react";
import { Form, Row, Button, Spinner, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../helpers/axiosHelper";

import {
  isLoadingpending,
  setResponse,
  loginSuccessResponse,
} from "./userSlice";

import { useDispatch, useSelector } from "react-redux";

export const Login = () => {
  const emailref = useRef("");
  const passwordref = useRef("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { res, isLoading } = useSelector((state) => state.user);

  const handleOnSubmit = async () => {
    const email = emailref.current.value;
    const password = passwordref.current.value;

    if (!email || !password) {
      return alert("please enter email and password ");
    }
    // setLoading(true);
    dispatch(isLoadingpending(true));
    const { data } = await postLogin({ email, password });

    if (data.status === "success") {
      const { name, email, _id } = data.user;
      dispatch(loginSuccessResponse(data.user));
      //if login success, store user data in session storage
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
      // setError("");
      navigate("/dashboard");
      return;
    }
    dispatch(setResponse(data));

    //else show the error message
    // setError(data.message);
  };
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome back</h3>
        <hr />
        {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
        {res?.message && <Alert variant="danger">{res.message}</Alert>}
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
