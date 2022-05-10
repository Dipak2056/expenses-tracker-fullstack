import React from "react";
import { Container } from "react-bootstrap";
import { TopNav } from "./TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNav />
      {/* dynamic content */}
      <div className="main">
        <Container>{children}</Container>
      </div>

      {/* footer */}
      <footer className="footer bg-dark text-light p-5 text-center">
        &copy; right all right reserved. Build with 💝 by me
      </footer>
    </div>
  );
};
