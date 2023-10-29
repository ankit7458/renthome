import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function YourProfile() {
    return (
        <div className="profile-body">
            <Container>
                <Row>
                    <Col>
                        <Card className="profile-card">
                            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" />
                            <Card.Body>
                                <Card.Title>abhay.cni99@gmail.com</Card.Title>    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={9}>
                        <Card className="profile-card">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#first">Your Properties</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Rented</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#disabled" >
                                            Saved
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#third">Packages</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    {/* <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default YourProfile