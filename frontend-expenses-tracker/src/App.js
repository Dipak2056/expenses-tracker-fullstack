import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
