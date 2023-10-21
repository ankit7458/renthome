import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'font-awesome/css/font-awesome.min.css';
import RatingIcon from './RatingIcon'



function Roomcards(props) {
    return (
        <Card className="card-c">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title>Money</Card.Title>
                        </Col>
                        <Col>
                            <div>
                                <RatingIcon rating={3} /> {/* Display a 3-star rating */}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default Roomcards