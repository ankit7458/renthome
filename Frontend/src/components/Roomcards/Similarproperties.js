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
import { currentPrice } from './Carddetail';
// import data from '../../dummydata';



function SimilarProperties() {
    // Assuming you have passed the selected card's price as a prop
    // const selectedCardPrice = 14000; // Replace with the actual price
    const cardprice = currentPrice;
    console.log(currentPrice)
    // Filter similar properties based on price
    const AllSimilarPropertiesData = data.filter(property => {
        // Filter properties based on a price range (adjust this range as needed)
        const priceRange = 3000;
        const priceDifference = Math.abs(property.price - cardprice);
        return priceDifference <= priceRange && property.price !== cardprice;
    });

    return (
        <div>
            <h2>Similar Properties</h2>
            <div className="similar-properties-container">
                {AllSimilarPropertiesData.map(property => (
                    <div
                        // onClick={() => handleSimilarCardClick(property.key)}
                        // style={{ cursor: 'pointer' }}
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
            <Link to='/'>Back to Property Details</Link>
        </div>
    );
}

export default SimilarProperties;
