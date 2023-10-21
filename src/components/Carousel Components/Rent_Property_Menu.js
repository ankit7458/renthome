import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Rent_Property_Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        <i class="bi bi-file-earmark-plus"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Post Your Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Row>
                <Col>
                  {["radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Sell`}
                      />
                    </div>
                  ))}
                </Col>
                <Col>
                  {["radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Rent/Lease`}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
            </Container>

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

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Add Discription"
                rows={3}
              />
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Upload Pictures</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="number" placeholder="Phone Number" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Rent_Property_Menu;
