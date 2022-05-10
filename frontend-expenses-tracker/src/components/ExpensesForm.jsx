import React from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <Row className="g-3 bg-dark p-4">
      <Col md="4">
        <FormControl
          type="text"
          className="form-control"
          placeholder="Expenses detail"
          aria-label="First name"
        />
      </Col>
      <Col md="2">
        <FormControl
          type="number"
          className="form-control"
          placeholder="25.5"
          aria-label="Amount"
        />
      </Col>
      <Col md="2">
        <FormControl
          type="date"
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
  );
};
