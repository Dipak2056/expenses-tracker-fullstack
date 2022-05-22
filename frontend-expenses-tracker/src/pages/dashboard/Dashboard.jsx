import React, { useEffect, useState } from "react";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/customtable/CustomTable";
import { ExpensesForm } from "../../components/ExpensesForm";
import { MainLayout } from "../../components/layout/MainLayout";
import {
  getExpense,
  postExpense,
  deleteExpense,
} from "../../helpers/axiosHelper";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [resp, setResp] = useState({
    status: "",
    message: "",
  });
  // const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
    // !expenses.length && fetchExpenses();
  }, [navigate]);

  const handleOnPost = async (frmData) => {
    setIsLoading(true);
    const data = await postExpense(frmData);
    setIsLoading(false);
    setResp(data);
    // data.status === "success" && fetchExpenses();
  };
  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this expense?"))
      return;
    const data = await deleteExpense(_id);
    setResp(data);
    // data.status === "success" && fetchExpenses();
  };

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <Row>
        <Col>
          {isLoading && <Spinner variant="primary" animation="border" />}
        </Col>
        <Col>
          {resp?.message && (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp?.message}
            </Alert>
          )}
        </Col>
      </Row>

      <ExpensesForm handleOnPost={handleOnPost} />
      <CustomTable handleOnDelete={handleOnDelete} />
    </MainLayout>
  );
};
