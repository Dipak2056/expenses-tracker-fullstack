import React, { useEffect, useState } from "react";
import { Alert, Button, FormCheck, ListGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  const handleOnDelete = async (ids) => {
    if (!window.confirm("Are you sure you want to delete this expense?"))
      return;
    dispatch(handleOnDeleteExpenses(ids));
  };
  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };
  console.log(ids);

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
            <span className="check-group">
              <FormCheck
                type="checkbox"
                className="mr-2"
                onClick={handleOnSelect}
                value={item._id}
              />
              <span className="title">{item.name}</span>
            </span>

            <span className="cost">${item.amount}</span>
            <button onClick={() => handleOnDelete([item._id])}>🚮</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="mt-2 text-end">
        {ids.length > 0 && (
          <Button variant="danger" onClick={() => handleOnDelete(ids)}>
            Delete selected Expenses
          </Button>
        )}
      </div>
    </div>
  );
};
