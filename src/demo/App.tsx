import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.scss';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    // <Container>
    //   <Row>
    //     <Col className="bg-light border">.col</Col>
    //   </Row>
    //   <Row>
    //     <Col className="bg-light border">.col</Col>
    //     <Col className="bg-light border">.col</Col>
    //     <Col className="bg-light border">.col</Col>
    //     <Col className="bg-light border">.col</Col>
    //   </Row>
    //   <Row>
    //     <Col className="bg-light border" xs="3">
    //       .col-3
    //     </Col>
    //     <Col className="bg-light border" xs="auto">
    //       .col-auto - variable width content
    //     </Col>
    //     <Col className="bg-light border" xs="3">
    //       .col-3
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col className="bg-light border" xs="6">
    //       .col-6
    //     </Col>
    //     <Col className="bg-light border" xs="6">
    //       .col-6
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col className="bg-light border" sm="4" xs="6">
    //       .col-6 .col-sm-4
    //     </Col>
    //     <Col className="bg-light border" sm="4" xs="6">
    //       .col-6 .col-sm-4
    //     </Col>
    //     <Col className="bg-light border" sm="4">
    //       .col-sm-4
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       className="bg-light border"
    //       sm={{
    //         offset: 1,
    //         order: 2,
    //         size: 6,
    //       }}
    //     >
    //       .col-sm-6 .order-sm-2 .offset-sm-1
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       className="bg-light border"
    //       md={{
    //         offset: 3,
    //         size: 6,
    //       }}
    //       sm="12"
    //     >
    //       .col-sm-12 .col-md-6 .offset-md-3
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col
    //       className="bg-light border"
    //       sm={{
    //         offset: 1,
    //         size: 'auto',
    //       }}
    //     >
    //       .col-sm-auto .offset-sm-1
    //     </Col>
    //     <Col
    //       className="bg-light border"
    //       sm={{
    //         offset: 1,
    //         size: 'auto',
    //       }}
    //     >
    //       .col-sm-auto .offset-sm-1
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default App;
