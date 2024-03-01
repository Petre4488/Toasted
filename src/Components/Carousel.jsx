import Carousel from 'react-bootstrap/Carousel';
import FirstSlide from '../assets/FirstImage.png';
import SecondSlide from '../assets/SecondImage.png';
import ThirdSlide from '../assets/ThirdImage.jpg';
import '../App.css';

export default function CarouselComp() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className='d-block w-100'
            src={FirstSlide}
            alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='blend-difference' >News</h3>
          <p className='blend-difference' >What we are working on...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src={SecondSlide}
            alt='Second slide'
        />
        <Carousel.Caption>
          <h3 className='blend-difference' >Event</h3>
          <p className='blend-difference' >Infos about our last event</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className='d-block w-100'
            src={ThirdSlide}
            alt='Third slide'
        />
        <Carousel.Caption>
          <h3 className='blend-difference' >Project</h3>
          <p className='blend-difference' >
            Our last finished project
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

