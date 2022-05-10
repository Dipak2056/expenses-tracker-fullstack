import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5 mb-3 custom-list fs-3">
      <ListGroup>
        <ListGroup.Item>
          <span className="title">Tv</span>
          <span className="cost">$555</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">Tv</span>
          <span className="cost">$555</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">Tv</span>
          <span className="cost">$555</span>
        </ListGroup.Item>
        <ListGroup.Item className="fw-bolder">
          <span className="title">Total</span>
          <span className="cost">$15555</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
