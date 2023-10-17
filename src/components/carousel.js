import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CarouselFadeExample() {
  return (
    <>
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="Third slide"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption>
            <h3 className="text-light">Welcome Home</h3>
            <p className="text-dark">Discover Your Dream Home</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            alt="Third slide"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption>
            <h3 className="text-dark">Budget-Friendly Living</h3>
            <p className="text-dark">Rent Homes That Suit Your Wallet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
            alt="Third slide"
          />
          <div className="carousel-overlay"></div>
          <Carousel.Caption>
            <h3 className="text-dark">Location, Location, Location</h3>
            <p className="text-dark">Hassle-Free Home Search</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* 5 Buttons: Property, Recent, Budget, Filter, Location:- */}
      <Container className="grid_items">
        <Row>
          <Col>
            <Button variant="success">
              <i class="bi bi-building"></i>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="info">
              <i class="bi bi-clock"></i>
            </Button>{" "}
          </Col>
          <Col>
            <Button variant="primary">
              <i class="bi bi-currency-rupee"></i>
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
    </>
  );
}

export default CarouselFadeExample;
