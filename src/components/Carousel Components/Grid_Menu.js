import React from 'react'
import Rent_Property_Menu from './Rent_Property_Menu';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Search_Rental_Property from './Search_Rental_Property';

function Grid_Menu() {
  return (
    <div>
        {/* 5 Buttons: Property, Recent, Budget, Filter, Location:- */}
      <Container className="center-container grid_items">
        <Row>
        <Col>
            <Rent_Property_Menu/>
          </Col>
          <Col>
            <Search_Rental_Property/>
          </Col>
          <Col>
            <Button variant="info">
              <i class="bi bi-clock"></i>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="warning">
              <i class="bi bi-funnel"></i>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="danger">
              <i class="bi bi-geo-alt"></i>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Grid_Menu