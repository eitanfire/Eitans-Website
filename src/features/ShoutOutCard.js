import {
  Container,
  Col,
  Row,
} from "reactstrap";

const ShoutOutCard = ({ to, from, because, id }) => {
  return (
    <>
      <h1>📢 Give Someone a Shout Out 🎉</h1>
      <div>
        <Container>
          <Row className="shoutOutsRow">
            {to && (
              <Col key={id} to={to}>
                To: {to}
              </Col>
            )}
            {from && <Col from={from}>From: {from}</Col>}
            {because && <Col because={because}>For: {because}</Col>}{" "}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShoutOutCard;
