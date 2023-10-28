import React from "react";
import Rent_Property_Menu from "./Rent_Property_Menu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Search_Rental_Property from "./Search_Rental_Property";

function Grid_Menu() {
  return (
    <div className="navbar-dark bg-dark navbar-c p-2">
      {/* 5 Buttons: Property, Recent, Budget, Filter, Location:- */}
      <Container className="">
        <Row xs={4} md={4} lg={4}>
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
              <Button variant="warning">
                <i class="bi bi-funnel text-light"> Filter</i>
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
