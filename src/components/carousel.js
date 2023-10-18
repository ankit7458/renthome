import Grid_Menu from "./Carousel Components/Grid_Menu";
import Carousel from "react-bootstrap/Carousel";


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
            <p className="text-light">Discover Your Dream Home</p>
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
            <h3 className="text-light">Budget-Friendly Living</h3>
            <p className="text-light">Rent Homes That Suit Your Wallet</p>
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
            <h3 className="text-light">Location, Location, Location</h3>
            <p className="text-light">Hassle-Free Home Search</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Grid_Menu/>
      
    </>
  );
}

export default CarouselFadeExample;
