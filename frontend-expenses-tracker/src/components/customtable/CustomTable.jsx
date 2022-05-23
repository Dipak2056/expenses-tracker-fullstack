import React, { useEffect } from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../pages/dashboard/dashboardAction";

export const CustomTable = ({ handleOnDelete }) => {
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div className="mt-5 mb-3 custom-list fs-3">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {res?.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          Expenses created successfully
        </Alert>
      )}
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroup.Item key={i}>
            <span className="title">{item.name}</span>
            <span className="cost">${item.amount}</span>
            <button onClick={() => handleOnDelete(item._id)}>🚮</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
