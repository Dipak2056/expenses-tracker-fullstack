import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/customtable/CustomTable";
import { ExpensesForm } from "../components/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";

export const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <hr />
      <ExpensesForm />
      <CustomTable />
    </MainLayout>
  );
};
