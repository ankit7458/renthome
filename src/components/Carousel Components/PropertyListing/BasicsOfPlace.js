import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function BasicsOfPlace() {
  const [guestroom, setGuestroom] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [beds, setBeds] = useState(0);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={6}>
            <p>Guestroom</p>
          </Col>
          <Col xs={6}>
            <Form>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={() => setGuestroom(guestroom - 1)}
                >
                  -
                </Button>
                <FormControl
                  className="text-center"
                  type="number"
                  value={guestroom}
                  onChange={(e) => setGuestroom(e.target.value)}
                />
                {/* <InputGroup.Append> */}
                <Button
                  variant="outline-secondary"
                  onClick={() => setGuestroom(guestroom + 1)}
                >
                  +
                </Button>

                {/* </InputGroup.Append> */}
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p>Bedrooms</p>
          </Col>
          <Col>
            <Form>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={() => setBedrooms(bedrooms - 1)}
                >
                  -
                </Button>
                <FormControl
                  className="text-center"
                  type="number"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />
                {/* <InputGroup.Append> */}
                <Button
                  variant="outline-secondary"
                  onClick={() => setBedrooms(bedrooms + 1)}
                >
                  +
                </Button>

                {/* </InputGroup.Append> */}
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p>Beds</p>
          </Col>
          <Col>
            <Form>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={() => setBathrooms(bathrooms - 1)}
                >
                  -
                </Button>
                <FormControl
                  className="text-center"
                  type="number"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                />
                {/* <InputGroup.Append> */}
                <Button
                  variant="outline-secondary"
                  onClick={() => setBathrooms(bathrooms + 1)}
                >
                  +
                </Button>

                {/* </InputGroup.Append> */}
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <p>Bathrooms</p>
          </Col>
          <Col>
            <Form>
              <InputGroup>
                <Button
                  variant="outline-secondary"
                  onClick={() => setBeds(beds - 1)}
                >
                  -
                </Button>
                <FormControl
                  className="text-center"
                  type="number"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                />
                {/* <InputGroup.Append> */}
                <Button
                  variant="outline-secondary"
                  onClick={() => setBeds(beds + 1)}
                >
                  +
                </Button>

                {/* </InputGroup.Append> */}
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BasicsOfPlace;
