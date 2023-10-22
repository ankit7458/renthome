import React from "react";
import Rent_Property_Menu from "./Rent_Property_Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Search_Rental_Property from "./Search_Rental_Property";

function Grid_Menu() {
  return (
    <div>
      {/* 5 Buttons: Property, Recent, Budget, Filter, Location:- */}
      <Container className="center-container grid_items">
        <Row>
          <Col>
            <div class="d-flex justify-content-center">
              <Rent_Property_Menu />
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-center">
              <Search_Rental_Property />
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-center">
              <Button variant="info">
                <i class="bi bi-clock-alt text-light"> Recent</i>
              </Button>{" "}
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-center">
              <Button variant="warning">
                <i class="bi bi-funnel-alt text-light"> Filter</i>
              </Button>{" "}
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-center">
              <Button variant="danger">
                <i class="bi bi-geo-alt"> Location</i>
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Grid_Menu;
