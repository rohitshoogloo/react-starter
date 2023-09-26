import React, { useContext } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

import FormSwitch from "../../components/form/switch";

import { DarkThemeContext } from "../../context/DarkThemeContext";

const HeaderMenu = () => {
  
  const { theme, changeThemeMode } = useContext(DarkThemeContext);
  
  return (
    <>
      <Navbar bg={theme ? "dark" : null} data-bs-theme={theme ? "dark" : null} expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">PlayGround</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form className="ms-auto">
              <FormSwitch
                id={"theme-switch"}
                label={"Change Theme"}
                name={"theme-switch-check"}
                value={theme ? "on" : "off"}
                onChange={changeThemeMode}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderMenu;
