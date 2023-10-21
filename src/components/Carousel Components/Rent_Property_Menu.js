import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";

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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Default select example">
                <option>Select - Rent or Sell</option>
                <option value="1">Sell</option>
                <option value="2">Rent/Lease</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Default select example">
                <option>Property</option>
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
