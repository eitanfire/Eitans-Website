import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Card,
  CardBody,
  CardText,
  Col,
} from "reactstrap";
import { shoutOuts } from "../utils/shoutOuts";

const ShoutOutCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === shoutOuts.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? shoutOuts.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = shoutOuts.map((item, index) => (
    <CarouselItem
      key={index}
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
    >
      <Card>
        <CardBody className="shoutOuts">
          {item.to && (
            <Col>
              <CardText>To: {item.to}</CardText>
            </Col>
          )}
          {item.from && (
            <Col>{item.from && <CardText>From: {item.from}</CardText>}</Col>
          )}
          <Col>{item.because && <CardText>For: {item.because}</CardText>}</Col>
        </CardBody>
      </Card>
    </CarouselItem>
  ));

  return (
    <div style={{ position: "relative" }}>
      {/* Logo */}
      <div className="shoutOut-logo">Shout Out</div>

      {/* Carousel */}
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default ShoutOutCarousel;
