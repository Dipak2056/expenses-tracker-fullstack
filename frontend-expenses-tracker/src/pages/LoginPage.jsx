import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Login } from "../components/layout/Login";

export const LoginPage = () => {
  return (
    <div>
      <MainLayout>
        <Login />
      </MainLayout>
    </div>
  );
};
