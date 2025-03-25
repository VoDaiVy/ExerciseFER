import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-4">
      {/* Âm thanh nền */}
      <audio autoPlay loop>
        <source src="audio/nn.mp3" type="audio/mpeg" />
        Trình duyệt của bạn không hỗ trợ phát nhạc.
      </audio>

      {/* Banner với 3 trò chơi */}
      <Carousel>
        <Carousel.Item>
          <Image src="/images/b46c0895-fdd3-4e11-bb0b-3d362a3a6849.webp" fluid />
          <Carousel.Caption>
            <h3>TicTacToe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/images/0edc97c3-fa7f-4d70-a0d8-39dce1140ef5.webp" fluid />
          <Carousel.Caption>
            <h3>Bầu Cua Tôm Cá</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/images/f41ccf9b-7eb1-4d85-abff-ec43d33a35ab.webp" fluid />
          <Carousel.Caption>
            <h3>Tài xỉu vận may</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Danh sách thành viên nhóm */}
      <h2 className="text-center mt-5">Meet Our Team</h2>
      <Row className="mt-4 d-flex justify-content-center flex-wrap">
        <Col md={2} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <Image src="/images/z6329354114756_a0c1e701e8082f145944a5be88288e0a.jpg" roundedCircle fluid style={{ width: "150px", height: "150px" }} />
          <p className="mt-2">Trịnh Minh Hải</p>
          <p className="mt-2">Designer</p>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <Image src="/images/z6437430421518_5a85d5a292ed18dfd8c4cd04e0a3f305.jpg" roundedCircle fluid style={{ width: "150px", height: "150px" }} />
          <p className="mt-2">Tán Quang Triển</p>
          <p className="mt-2">Designer</p>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <Image src="/images/z6329354124343_4f519013f3357b83122933e8338a1733.jpg" roundedCircle fluid style={{ width: "150px", height: "150px" }} />
          <p className="mt-2">Nguyễn Trương Hoàng Vũ</p>
          <p className="mt-2">Designer</p>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <Image src="/images/z6329354119342_7865afa2a3008dbe5f005d160025ffc1.jpg" roundedCircle fluid style={{ width: "150px", height: "150px" }} />
          <p className="mt-2">Võ Đại Vỹ</p>
          <p className="mt-2">Designer</p>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-4 d-flex flex-column align-items-center">
          <Image src="/images/z6437518766309_81515d27fc34376646867a2d90de1672.jpg" roundedCircle fluid style={{ width: "150px", height: "150px" }} />
          <p className="mt-2">Phan Thiên Phú</p>
          <p className="mt-2">Designer</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
