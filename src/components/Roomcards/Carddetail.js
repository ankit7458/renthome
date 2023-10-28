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

// import Roomcards from '../Roomcards/Roomcards';

function Carddetail(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { cardkey } = useParams();
    const selectedCardData = data.find(item => item.key == cardkey);
    console.log('cardKey:', selectedCardData);
    if (!selectedCardData) {
        console.log('Card not found');
        return <div>Card not found</div>;
    }
    return (
        <div className='card_detail_body'>
            <Container className='card_detail'>
                <Row className='card_header'>
                    <Col>
                        <div className='header_deatils'>
                            <h2>{selectedCardData.title}</h2>
                            <p>Price: ${selectedCardData.price}</p>
                            <p>{selectedCardData.content}</p>
                        </div>
                    </Col>
                    <Col className='header_button' >
                        <div className='header_button_detail' >
                            <Button>Overview</Button>
                            <Button>Dealer Details</Button>
                            <Button>Recommendations</Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* 2nd Part: Room Photos and Additional Details */}
                    <Col md={6}>
                        {/* <img src={selectedCardData.img} alt={selectedCardData.title} /> */}
                        <Image src={selectedCardData.img} thumbnail />
                        {/* <i><Card.Img className="image-container" variant="top" src={selectedCardData.img} /></i> */}
                    </Col>
                    <Col className='card_deatails' md={6}>
                        <div >
                            <p>Size: 1200 sq. ft.</p>
                            <p>Furnished: Yes</p>
                            <p>Location: City, State</p>
                        </div>
                    </Col>
                </Row>

                <div className='dealer'>
                    {/* 3rd Part: Dealer Details */}
                    <h2>Dealer Details</h2>
                    <p>Name: John Doe</p>
                    <p>Contact: john.doe@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>

                <div className='similar'>
                    {/* 4th Part: Similar Properties */}
                    <h2>Similar Properties</h2>
                    <Row>
                        {/* List of similar properties */}
                        <Col md={4}>
                            <div>
                                <img src="similar-room-1.jpg" alt="Similar Room 1" />
                                <p>Price: $900</p>
                                <p>2BHK</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div>
                                <img src="similar-room-2.jpg" alt="Similar Room 2" />
                                <p>Price: $950</p>
                                <p>1BHK</p>
                            </div>
                        </Col>
                        {/* Add more similar properties as needed */}
                    </Row>
                </div>
            </Container>
            {/* <Footer /> */}
        </div>
    );
}

export default Carddetail;
