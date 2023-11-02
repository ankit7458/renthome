import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const options = ["The Entire Place", "A Seprate Room", "A Shared Room"];

function PlaceType() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCardClick = (option) => {
    setSelectedOption(option);
  };

  const selectedCardCSS="shadow text-secondary hover-card";
  const unSelectedCardCSS = " shadow selected bg-danger text-white hover-card";

  return (
    <div>
      <h3 className="d-flex justify-content-center mb-5">Select one that describes your property best?</h3>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${selectedOption === option ? unSelectedCardCSS : selectedCardCSS}`}
              onClick={() => handleCardClick(option)}
            >
              <Card.Body>
                <Card.Title>{option}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PlaceType;
