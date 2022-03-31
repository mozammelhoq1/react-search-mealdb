import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" expand="lg" sticky="top" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="#" className=" fw-bold text-dark fs-1">
          Meal Db
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link
                to="/home"
                className="text-decoration-none fw-bold text-dark"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/meals"
                className="text-decoration-none fw-bold text-dark"
              >
                Meals
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                className="text-decoration-none fw-bold text-dark"
              >
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className="text-decoration-none fw-bold text-dark"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
