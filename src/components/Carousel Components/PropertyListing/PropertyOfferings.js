import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const options = [
  "Wifi",
  "TV",
  "Kitchen",
  "Washing machine",
  "Free parking on premises",
  "Paid parking on premises",
  "Air conditioning",
  "Dedicated workspace",
];

const options2 = [
  "Pool",
  "Hot tub",
  "Patio",
  "BBQ grill",
  "Outdoor dining area",
  "Fire pit",
  "Pool table",
  "Indoor fireplace",
  "Piano",
  "Exercise equipment",
  "Lake access",
  "Beach access",
  "Ski-in/Ski-out",
  "Outdoor shower",
];

const options3 = [
  "First aid kit",
  "Fire extinguisher",
  "Carbon monoxide alarm",
];

function PropertyOfferings() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCardClick = (option) => {
    setSelectedOption(option);
  };

  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleCardClick2 = (option2) => {
    setSelectedOption2(option2);
  };

  const [selectedOption3, setSelectedOption3] = useState(null);

  const handleCardClick3 = (option3) => {
    setSelectedOption3(option3);
  };
  return (
    <div>
      <h3 className="mb-3 mt-4">Which of these best describes your place?</h3>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${
                selectedOption === option ? "selected" : "text-secondary"
              }`}
              onClick={() => handleCardClick(option)}
            >
              <Card.Body>
                <Card.Title>{option}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h5 className="mb-3 mt-3">Do you have any stand out amenities?</h5>
      <Row>
        {options2.map((option2, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${
                selectedOption2 === option2 ? "selected" : "text-secondary"
              }`}
              onClick={() => handleCardClick2(option2)}
            >
              <Card.Body>
                <Card.Title>{option2}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h5 className="mb-3 mt-3">Do you have any of these safety items</h5>
      <Row>
        {options3.map((option3, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${
                selectedOption3 === option3 ? "selected" : "text-secondary"
              }`}
              onClick={() => handleCardClick2(option3)}
            >
              <Card.Body>
                <Card.Title>{option3}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PropertyOfferings;
