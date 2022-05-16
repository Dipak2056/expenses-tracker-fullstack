import React, { useEffect, useState } from "react";
import { Alert, Spinner, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/customtable/CustomTable";
import { ExpensesForm } from "../components/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";
import { postExpenses } from "../helpers/axiosHelper";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [resp, setResp] = useState({
    status: "asdf",
    message: "asdff",
  });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);
  const handleOnPost = async (frmData) => {
    console.log("submit", frmData);
    setIsLoading(true);
    const data = await postExpenses(frmData);
    setIsLoading(false);
    setResp(data);
  };

  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <Row></Row>
      <Col>{isLoading && <Spinner variant="primary" animation="border" />}</Col>
      <Col mt-5>
        {resp?.message && (
          <Alert variant={resp.status === "success" ? "success" : "danger"}>
            {resp?.message}
          </Alert>
        )}
      </Col>

      <ExpensesForm handleOnPost={handleOnPost} />
      <CustomTable />
    </MainLayout>
  );
};
