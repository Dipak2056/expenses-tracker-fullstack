import React, { useState } from "react";
import { Form, Row, Button, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helpers/axiosHelper";

import { useDispatch, useSelector } from "react-redux";
import { isLoadingpending, setResponse } from "./userSlice";

const initialState = {
  name: "",
  emai: "",
  password: "",
};
export const Register = () => {
  const dispatch = useDispatch();
  const [formDt, setFormDt] = useState(initialState);
  // const [isLoading, setIsLoading] = useState(false);
  // const [res, setRes] = useState({});

  const { res, isLoading } = useSelector((state) => state.user);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(isLoadingpending());

    //call api using axios
    const { data } = await postRegister(formDt);
    // setRes(data);
    dispatch(setResponse(data));
    // setIsLoading(false);
    dispatch(isLoadingpending(false));

    console.log(data);
  };
  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3> Register to Join us</h3>
        <hr />
        {isLoading && <Spinner animation="border" variant="primary" />}
        {res.message && (
          <Alert variant={res.status === "success" ? "success" : "danger"}>
            {res.message}
          </Alert>
        )}
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
