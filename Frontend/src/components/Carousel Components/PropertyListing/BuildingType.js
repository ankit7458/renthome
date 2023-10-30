import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const options = [
  "House",
  "Flat",
  "Hotel",
  "Barn",
  "Bed & Breakfast",
  "Boat",
  "Cabin",
  "Campervan/MoterHome",
  "Casa Particular",
  "Castle",
  "Cave",
  "Container",
  "Cycladic home",
  "Dammuso",
  "Dome",
  "Earth Home",
  "Farm",
  "Guest house",
  "HouseBoat",
  "Kezhan",
  "Minsu",
  "Riad",
  "Ryokan",
  "Shepherd's hut",
  "Tent",
  "Tiny home",
  "Tower",
  "Tree house",
  "Trullo",
  "Windmill",
  "Yurt",
];

function BuildingType() {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleCardClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3 className="d-flex justify-content-center mb-5">Which of these best describes your place?</h3>
      <Row>
        {options.map((option, index) => (
          <Col key={index} xs={12} sm={6} md={3} lg={3}>
            <Card
              className={`mb-3 ${
                selectedOption === option ? "selected bg-danger text-white hover-card" : "text-secondary hover-card"
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
    </div>
  );
}

export default BuildingType;
