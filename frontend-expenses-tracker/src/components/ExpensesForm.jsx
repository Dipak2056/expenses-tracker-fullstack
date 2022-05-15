import React, { useState } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

const initialState = {
  name: "",
  amount: " ",
  date: "",
};
export const ExpensesForm = ({ handleOnPost }) => {
  const [frmData, setFrmData] = useState(initialState);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnPost(frmData);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFrmData({
      ...frmData,
      [name]: value,
    });
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-3 bg-dark p-4">
        <Col md="4">
          <FormControl
            type="text"
            required
            onChange={handleOnChange}
            className="form-control"
            placeholder="Expenses detail"
            aria-label="First name"
            name="name"
          />
        </Col>
        <Col md="2">
          <FormControl
            type="number"
            name="amount"
            required
            onChange={handleOnChange}
            className="form-control"
            placeholder="25.5"
            aria-label="Amount"
          />
        </Col>
        <Col md="2">
          <FormControl
            type="date"
            name="date"
            required
            onChange={handleOnChange}
            className="form-control"
            placeholder="Date"
            aria-label="Date"
          />
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
