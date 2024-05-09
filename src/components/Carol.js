import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export default function Carol() {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <Image src={require("../assets/img/blinds.jpg")} className='slider' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("../assets/img/curtains.jpeg")} className='slider'  text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("../assets/img/slider__3.jpg")} className='slider'  text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
