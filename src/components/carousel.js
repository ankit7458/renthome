import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/flagged/photo-1572495453848-7675e0ca762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80"
          alt="Third slide"
        />
        <div className="carousel-overlay"></div>
        <Carousel.Caption>
          <h3 className="text-dark">Welcome Home</h3>
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
  );
}

export default CarouselFadeExample;
