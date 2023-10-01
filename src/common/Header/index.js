import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { DarkThemeContext } from "../../context/DarkThemeContext";
import { HeaderMenu } from "../Navigation";
import SearchBox from "../SearchBox";
import DrawerMenu from "../Navigation/DrawerMenu";

const Header = () => {
  const { theme } = useContext(DarkThemeContext);

  return (
    <header>
      <div
        bg={theme ? "dark" : null}
        data-bs-theme={theme ? "dark" : null}
        className="bg-body-tertiary"
      >
        <Container>
          <Row>
            <Col>
              <HeaderMenu />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={{ offset: 3, span: 6 }}>
              <div className="d-flex justify-content-center">
              <SearchBox />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
