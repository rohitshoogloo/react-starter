import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <span className="text-muted">React Playground. &copy; Rohit Choudhary</span>
      </Container>
    </footer>
  );
};

export default Footer;
