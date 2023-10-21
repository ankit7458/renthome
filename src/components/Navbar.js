import "bootstrap/dist/css/bootstrap.css";
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

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar fixed="top" expand="lg" className=" bg-dark navbar-c text-light">
      <Container fluid>
        <Nav.Link className="navbar_home_icon" href="#home"><i class="bi bi-house"></i></Nav.Link>
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
        </Navbar.Collapse>
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
              
            </Col>
            <Col xs="auto">
              <Button className="navbar_search_button" type="submit"><i class="bi bi-search"></i></Button>
            </Col>
          </Row>
        </Form>
        &nbsp;

        {/* Modal Sign-in Button:  */}
        <Button className="navbar_login_button" variant="secondary" onClick={handleShow}>
          <i class="bi bi-person"></i>
        </Button>
        <Modal show={show} onHide={handleClose}>

          {/* Modal Form: */}
          <div className="container_login_form ">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Stay Signed-in" />
              </Form.Group>
            </Form>
          </div>

          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Experiment */}
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
