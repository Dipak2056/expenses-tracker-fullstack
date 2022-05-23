import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../pages/dashboard/dashboardAction";

export const CustomTable = ({ handleOnDelete }) => {
  const { expenses } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);
  return (
    <div className="mt-5 mb-3 custom-list fs-3">
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
