import React, { useEffect, useState } from "react";
import { Alert, Button, FormCheck, ListGroup, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";
import { setExpenses } from "../../pages/dashboard/dashboardSlice";

export const CustomTable = () => {
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);

  const [all, setAll] = useState([]);
  const [income, setIncome] = useState([]);
  const [onlyExpense, setOnlyExpense] = useState([]);

  const [ids, setIds] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenses());
    res.status === "success" && setIds([]);
  }, [res]);

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
  const handleAll = () => {
    const allitem = expenses;
    setAll(allitem);
    setIncome([]);
    setOnlyExpense([]);
  };
  const handleOnSelectIncome = () => {
    const onlyincome = expenses.filter((item) => item.type === "income");
    setIncome(onlyincome);
    setOnlyExpense([]);
    setAll([]);
  };
  const handleOnSelectExpenses = () => {
    const onlyexpense = expenses.filter((item) => item.type !== "income");
    setOnlyExpense(onlyexpense);
    setIncome([]);
    setAll([]);
  };

  return (
    <div className="mt-5 mb-3 custom-list fs-3">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {res?.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          {res.message}
        </Alert>
      )}
      <Button variant="primary" onClick={handleAll}>
        Display All Income
      </Button>
      <Button variant="primary" onClick={handleOnSelectIncome}>
        Display only Income
      </Button>
      <Button variant="danger" onClick={handleOnSelectExpenses}>
        Display only Expenses
      </Button>
      {all && (
        <ListGroup>
          {all.map((item, i) => (
            <ListGroup.Item key={item._id}>
              <span className="check-group">
                <FormCheck
                  type="checkbox"
                  className="mr-2"
                  onClick={handleOnSelect}
                  value={item._id}
                />
                <span className="title">{item.name}</span>
              </span>

              <span className="cost">
                {item.type === "expenses" ? "-" : " "}${item.amount}
              </span>
              <button onClick={() => handleOnDelete([item._id])}>🚮</button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {income && (
        <ListGroup>
          {income.map((item, i) => (
            <ListGroup.Item key={item._id}>
              <span className="check-group">
                <FormCheck
                  type="checkbox"
                  className="mr-2"
                  onClick={handleOnSelect}
                  value={item._id}
                />
                <span className="title">{item.name}</span>
              </span>

              <span className="cost">
                {item.type === "expenses" ? "-" : " "}${item.amount}
              </span>
              <button onClick={() => handleOnDelete([item._id])}>🚮</button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {onlyExpense && (
        <ListGroup>
          {onlyExpense.map((item, i) => (
            <ListGroup.Item key={item._id}>
              <span className="check-group">
                <FormCheck
                  type="checkbox"
                  className="mr-2"
                  onClick={handleOnSelect}
                  value={item._id}
                />
                <span className="title">{item.name}</span>
              </span>

              <span className="cost">
                {item.type === "expenses" ? "-" : " "}${item.amount}
              </span>
              <button onClick={() => handleOnDelete([item._id])}>🚮</button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <div className="mt-2 text-end">
        {ids.length > 0 && (
          <Button variant="danger" onClick={() => handleOnDelete(ids)}>
            Delete All selected Expenses
          </Button>
        )}
      </div>
    </div>
  );
};
