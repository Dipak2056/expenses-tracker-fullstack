import React, { useEffect } from "react";
import { Alert, ListGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  const handleOnDelete = async (ids) => {
    if (!window.confirm("Are you sure you want to delete this expense?"))
      return;
    dispatch(handleOnDeleteExpenses(ids));
  };

  return (
    <div className="mt-5 mb-3 custom-list fs-3">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {res?.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          {res.message}
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
