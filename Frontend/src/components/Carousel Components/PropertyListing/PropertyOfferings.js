import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCardClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const cardCSS = "shadow text-secondary hover-card";
  const selectedCardCSS = "shadow selected bg-danger text-white hover-card";

  return (
    <div>
      <h3 className="d-flex justify-content-center mb-5">
        What amenities your property offers?
      </h3>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${selectedOptions.includes(option) ? selectedCardCSS : cardCSS}`}
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
              className={`mb-3 ${selectedOptions.includes(option2) ? selectedCardCSS : cardCSS}`}
              onClick={() => handleCardClick(option2)}
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
              className={`mb-3 ${selectedOptions.includes(option3) ? selectedCardCSS : cardCSS}`}
              onClick={() => handleCardClick(option3)}
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
