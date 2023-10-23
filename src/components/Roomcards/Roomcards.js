import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'font-awesome/css/font-awesome.min.css';
import RatingIcon from './RatingIcon'
import PriceTag from './PriceTag';
import { Link } from 'react-router-dom';


function Roomcards(props) {
    return (
        <Card className="card-c card-shadow "  >
<<<<<<< HEAD
            <a href="#"><Card.Img className="image-container" variant="top" src={props.img} /></a>  
            <Container >
=======
            <Link to="/roomcards/carddeatail"><Card.Img className="image-container" variant="top" src={props.img} /></Link>  
            <Card.Body>
                <Container>
>>>>>>> c237a440a26a17b9a67ab186579feea3c1ec7fe4
                    <Row>
                        <Col className="price-back">
                            <p><PriceTag price={props.price} /></p>
                        </Col>
                        <Col>
                            <div>
                                <RatingIcon rating={3} /> {/* Display a 3-star rating */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            <Card.Body>
                <Card.Text>
                    <p className="card-title">{props.title}</p>
                    {props.content}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Roomcards