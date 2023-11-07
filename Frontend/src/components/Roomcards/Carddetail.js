import { useEffect } from 'react'; //reload the page 
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate
import data from '../../dummydata';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import roomcard from './roomcard.css';
import Similarproperties from './Similarproperties';


export let currentPrice = 0;
function Carddetail(props) {

// Use useEffect to scroll to the top of the page when the component mounts
useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth' });
}, []);



// Initialize navigate hook to programmatically navigate to other pages
const navigate = useNavigate();

// Extract cardkey from the route parameters
const { cardkey } = useParams();

// Find the selected card's data based on the cardkey
const selectedCardData = data.find(item => item.key == cardkey);
currentPrice = selectedCardData.price;

// console.log(global.currentPrice)
// Define the price range to filter similar properties
const priceRange = 3000;

// Filter similar properties based on price difference
const similarPropertiesdata = data.filter(item => {
    const priceDifference = Math.abs(item.price - currentPrice);
    return priceDifference <= priceRange && item.key !== selectedCardData.key;

});
// Function to handle click on similar property cards and navigate
const handleSimilarCardClick = (propertyKey) => {
    navigate(`/Roomcards/Carddetail/${propertyKey}`);
    document.body.scrollIntoView({ behavior: 'smooth' });
};

{<Similarproperties selectedCardPrice={selectedCardData.price} /> }
// const handleViewMoreClick = () => {
//     navigate(`/similar-properties?data=${JSON.stringify(similarProperties)}`);
// };
    return (
        <div>
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
                        <Col className="header_button" >
                            <div className='header_button_detail'>
                                <Button variant="outline-success"
                                    onClick={() => {
                                        const OverviewSection = document.getElementById("overview-details");
                                        if (OverviewSection) {
                                            OverviewSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}>Overview</Button>
                                <Button
                                    variant="outline-success"
                                    onClick={() => {
                                        const dealerDetailsSection = document.getElementById("dealer-details");
                                        if (dealerDetailsSection) {
                                            dealerDetailsSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}>Dealer Details</Button>
                                <Button
                                    variant="outline-success"
                                    onClick={() => {
                                        const SimilarSection = document.getElementById("similar-details");
                                        if (SimilarSection) {
                                            SimilarSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}>Recommendations</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className='card_img' id='overview-details'>
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
                    <Row className='dealer' id="dealer-details">
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

                    <div className='similar' id='similar-details'>
                        <div className='similar_header'>
                            <h2>Similar Properties</h2>
                            <Link to="/similar-properties">
                                <Button variant="outline-dark">View more</Button>
                            </Link>
                        </div>
                        <div className="similar-properties-container">
                            {similarPropertiesdata.map(property => (
                                <div
                                    onClick={() => handleSimilarCardClick(property.key)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card className="card-c card-shadow">
                                        <Card.Img className="image-container" variant="top" src={property.img} />
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
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Carddetail;

