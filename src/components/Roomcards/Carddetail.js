// import React from 'react';
import { useEffect } from 'react'; //reload the page 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import data from '../../dummydata';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';



function Carddetail(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { cardkey } = useParams();
    const selectedCardData = data.find(item => item.key == cardkey);
    const currentPrice = selectedCardData.price;

    console.log(currentPrice);

    const priceRange = 3000; // Define the price range (adjust as needed)

    const similarProperties = data.filter(item => {
        const priceDifference = Math.abs(item.price - currentPrice);
        return priceDifference <= priceRange && item.key !== selectedCardData.key;
    });


    return (
        <div className='card_detail_body'>
            <Container className='card_detail'>
                <Row className='card_header'>
                    <Col>
                        <div className='header_deatils'>
                            <div className="price">
                                <h2>${selectedCardData.price}</h2>
                                <p>Per Month</p>
                            </div>
                            <div className="other_detail">
                                <div>
                                    <h4>{selectedCardData.title}</h4>
                                    <p>{selectedCardData.content}</p>
                                </div>
                            </div>
                            <div className="book-button">
                                <div>
                                    <Button className="card_contact_button" variant="outline-success">Contact</Button>
                                    <Button className="card_dream_button" variant="outline-success">Dream List</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className='header_button'>
                        <div className='header_button_detail'>
                            <Button variant="outline-success">Overview</Button>
                            <Button variant="outline-success">Dealer Details</Button>
                            <Button variant="outline-success">Recommendations</Button>
                        </div>
                    </Col>
                </Row>

                <Row className='card_img'>
                    <Col>
                        <Image src={selectedCardData.img} thumbnail className='cardimage' />
                    </Col>
                    <Col className='card_deatails' md={6}>
                        <div>
                            <p>Size: 1200 sq. ft.</p>
                            <p>Furnished: Yes</p>
                            <p>Location: City, State</p>
                        </div>
                    </Col>
                </Row>

                <Row className='dealer'>
                    <h2>Dealer Details</h2>
                    <Col>
                        <Image src={selectedCardData.img} thumbnail className='dealerimage' />
                    </Col>
                    <Col className='dealer_deatails' md={6}>
                        <div>
                            <p>Name: John Doe</p>
                            <p>Contact: john.doe@example.com</p>
                            <p>Phone: +1234567890</p>
                        </div>
                    </Col>
                </Row>

                <div className='similar'>
                    <h2>Similar Properties</h2>
                    <Row>
                        {similarProperties.map(property => (
                            <Col id={property.key}>

                                <Card className="card-c card-shadow "  >
                                    {/* <Image src={property.img} alt={property.title} thumbnail /> */}
                                    <Link to={`/Roomcards/Carddetail/${props.id}`}><Card.Img className="image-container" variant="top" src={property.img} /></Link>
                                    <Container>

                                        <Row>
                                            <Col className="price-back">
                                                <p>${property.price}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Card.Body>
                                        <Card.Text>
                                            <p className="card-title">{property.title}</p>
                                            {property.content}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Carddetail;
