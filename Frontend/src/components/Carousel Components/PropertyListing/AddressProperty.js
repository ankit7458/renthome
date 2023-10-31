import React from "react";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddressProperty() {
  return (
    <div>
        <h3 class="d-flex justify-content-center mb-4">Address</h3>
      <Form className="shadow p-5">
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicHouseNumber">
              <Form.Control type="text" placeholder="House Number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Control type="text" placeholder="City/Town" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicArea">
              <Form.Control type="text" placeholder="Area" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicStreetAddress">
              <Form.Control type="text" placeholder="Street Address" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLandmark">
              <Form.Control type="text" placeholder="Nearby Landmark" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Control type="text" placeholder="State" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPincode">
              <Form.Control type="number" placeholder="Pincode" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddressProperty;
