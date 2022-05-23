import React, { useEffect, useState } from "react";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/customtable/CustomTable";
import { ExpensesForm } from "../../components/ExpensesForm";
import { MainLayout } from "../../components/layout/MainLayout";

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

      <ExpensesForm />
      <CustomTable />
    </MainLayout>
  );
};
