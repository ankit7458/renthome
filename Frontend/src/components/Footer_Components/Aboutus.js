import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className='about'>
      <Row>
        <dev className='heading'>
          <h1>About Us</h1>
        </dev>
      </Row>
      <Row className='about_body'>
          <dev className='about_intro'>
            <h3>Introduction</h3>
            <p>
              <strong>"Renthome"</strong> is a prominent room rental service provider, founded in 2023 with a vision to revolutionize the accommodation experience. We understand that finding the perfect place to call home can be a daunting task. That's where we step in.
              At "Renthome," our mission is to redefine the way you search for accommodations. We are dedicated to offering a wide range of room options to cater to various preferences and needs, whether you're looking for a comfortable single room, a spacious family room, a convenient PG accommodation, or a cozy hostel. We take pride in carefully curating our selection to ensure that every individual can find a room that suits their specific requirements. What sets us apart is our unwavering commitment to quality, exceptional customer satisfaction, and sustainability. We believe in providing not just a room but an enriching experience, all while making a positive impact on the environment and the communities we serve. Our experienced and compassionate team works diligently to assist you in finding the perfect room that aligns with your lifestyle and budget. We have been honored with prestigious awards for our dedication and customer-centric approach. At "Renthome," we also recognize our social responsibilities and actively contribute to environmental conservation. We aim to make the world a better place through our work.
            </p>
          </dev>
          <dev className='about_contect'>
            <h3>Contact</h3>
            <p>
              For any inquiries or to get in touch, feel free to contact us. We look forward to being of service to you on your journey to finding your ideal living space.
              <br></br>
              <strong>Email :- </strong> example@renthome.com
              <br></br>
              <strong>Call :- </strong> 123-456-7890
            </p>
          </dev>
      </Row>
    </Container>
  );
}
export default Aboutus;
