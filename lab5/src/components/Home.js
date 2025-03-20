import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Image, Container} from 'react-bootstrap';

function Home() {
  return (
    <Container fluid>
    <header>
      <Carousel fade>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/slide1.jpg'
            alt='First Banner'
            style={{ height: '450px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/slide2.jpg'
            alt='First Banner'
            style={{ height: '450px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='./images/slide3.jpg'
            alt='First Banner'
            style={{ height: '450px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
    </header>
    <Container>
    <Row>
      <Col>
        <Image src="./images/menu-01.jpg" roundedCircle />
      </Col>
      <Col>
        <Image src="./images/menu-02.jpg" roundedCircle />
      </Col>
      <Col>
        <Image src="./images/menu-03.jpg" roundedCircle />
      </Col>
      <Col>
        <Image src="./images/menu-04.jpg" roundedCircle />
      </Col>
      <Col>
        <Image src="./images/menu-05.jpg" roundedCircle />
      </Col>
      <Col>
        <Image src="./images/menu-06.jpg" roundedCircle />
      </Col>
    </Row>
  </Container>
  <h1 style={{color: 'red'}}>This is Home Page</h1>
  </Container>
  );
}
export default Home;