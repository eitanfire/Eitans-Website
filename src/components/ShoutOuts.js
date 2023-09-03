import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import ShoutOutCard from "../features/ShoutOutCard";
import { shoutOuts } from "../utils/shoutOuts";

const ShoutOuts = () => {
  return (
    <Container className="shoutOuts">
      <Row>
        <Col className="shoutOutTitle">📢 Shout Outs</Col>
        <Col>
          {shoutOuts.map(({ to, from, because, id }) => (
            <ShoutOutCard key={id} to={to} from={from} because={because} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ShoutOuts;
