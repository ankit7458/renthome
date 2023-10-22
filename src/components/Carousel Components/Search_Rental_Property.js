import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Search_Rental_Property() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i class="bi bi-building"> Rent</i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Search Rental Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Container>
                <Row>
                  <Col>
                  <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Select aria-label="Default select example">
                <option>Select - Property</option>
                <option value="1">Residential</option>
                <option value="2">Commercial</option>
                <option value="2">Office</option>
                <option value="2">Retail</option>
                <option value="2">Plot</option>
                <option value="2">Storage</option>
                <option value="2">Industry</option>
                <option value="2">Hospitality</option>
                <option value="2">Other</option>
              </Form.Select>
            </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword"><Form.Control type="text" placeholder="Enter Location" />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="number" placeholder="No. of Rooms" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="number" placeholder="No. of Bathrooms" />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="number" placeholder="₹ Min_Range" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="number" placeholder="₹ Max_Range" />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Search_Rental_Property;
