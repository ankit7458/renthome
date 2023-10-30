import "bootstrap/dist/css/bootstrap.css";
import LoginButton from "./Navbar_Components/LoginButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputGroup from "react-bootstrap/InputGroup";
import LoginMenu from "./Navbar_Components/LoginMenu";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar navbar-dark bg-dark navbar-c"
    >
      <Container fluid>
          <Navbar.Brand as={Link} to="/" className="text-light">
            <Image
              src="./Images/rentHomeLogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt="React Bootstrap logo"
              roundedCircle
            />
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
              {/* <LoginButton /> */}
              <LoginMenu />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
