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
    <div className="shoutOuts">
      <Container>
        {shoutOuts.map(({ to, from, because, id }) => (
          <ShoutOutCard key={id} to={to} from={from} because={because} />
        ))}
      </Container>
    </div>
  );
};

export default ShoutOuts;
