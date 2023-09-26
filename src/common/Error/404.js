import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center flex-column min-vh-100">
              <h1>Page Not Found</h1>
              <p>
                Oops! the page you're looking for is not found. please try
                again!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;
