import { Img } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import {
  BsHouseDoorFill,
  BsPersonCircle,
  BsFillTelephoneFill,
  BsFileTextFill,
} from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import "./Navbar.css";

function myNavbar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <Img className="myLogo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <BsHouseDoorFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              Home
            </Nav.Link>
            <Nav.Link href="/counter">
              <SiRedux style={{ marginBottom: "3px", marginRight: "5px" }} />
              Counter
            </Nav.Link>

            <Nav.Link href="/about">
              <BsFileTextFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              About
            </Nav.Link>
            <Nav.Link href="/contact">
              <BsFillTelephoneFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="/login">
              <BsPersonCircle className="personIcon" />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
