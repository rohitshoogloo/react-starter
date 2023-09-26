import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import { DarkThemeContext } from "../../context/DarkThemeContext";

const Footer = () => {
  const { theme } = useContext(DarkThemeContext);
  return (
    <footer data-bs-theme={theme ? "dark" : null} className={`${theme ? "bg-dark" : null} footer mt-auto py-3 bg-light`}>
      <Container>
        <span className="text-muted">React Playground. &copy; Rohit Choudhary</span>
      </Container>
    </footer>
  );
};

export default Footer;
