import { Container, Col, Row, Card, CardBody, CardTitle, CardText } from "reactstrap";

const ShoutOutCard = ({ to, from, because, id }) => {
return (
  <div>
    <Container>
      <Row className="shoutOutsRow">
        {to && <Col key={id} to={to}>
          To: {to}
        </Col>}
        {from && <Col from={from}>From: {from}</Col>}
{       because && <Col because={because}>For: {because}</Col>
}      </Row>
    </Container>
  </div>
);
}

export default ShoutOutCard;