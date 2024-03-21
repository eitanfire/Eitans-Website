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
import shoutOutBackground from "../../src/app/img/97128-color-explosion-free-download-png-hd.png";

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
        <CardBody
          // src="../../src/app/img/97128-color-explosion-free-download-png-hd.png"
          className="shoutOuts"
        >
          {item.to && (
            <Col col-4>
              <CardText>To: {item.to}</CardText>
            </Col>
          )}
          {item.from && (
            <Col col-4>
              {item.from && <CardText>From: {item.from}</CardText>}
            </Col>
          )}
          <Col col-4>
            {item.because && <CardText>For: {item.because}</CardText>}
          </Col>
        </CardBody>
      </Card>
    </CarouselItem>
  ));

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators
          className="carousel-indicators"
          items={shoutOuts}
          activeIndex={activeIndex}
          onClickHandler={(index) => setActiveIndex(index)}
        /> */}
        {slides}
        {/* <CarouselControl
          data-slide="prev"
          className="CarouselControl"
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        /> */}
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
