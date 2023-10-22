import "bootstrap/dist/css/bootstrap.css";
import LoginButton from "./Navbar_Components/LoginButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap-icons/font/bootstrap-icons.css";

import InputGroup from "react-bootstrap/InputGroup";

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar navbar-dark bg-dark navbar-c"
    >
      <Container fluid>
        <Nav.Link className="navbar_home_icon  text-light" href="#home">
          <i class="bi bi-house"></i>
        </Nav.Link>
        <Navbar.Brand href="#" className="text-light">
          RentHome.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 bg-dark text-light"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form inline>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
              <InputGroup.Text id="basic-addon1">
                <i class="bi bi-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Form>
          &nbsp;
          <div className="d-flex flex-row-reverse">
            <div>
              <LoginButton />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
