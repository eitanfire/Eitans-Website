import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useSpring, animated, scale, easings } from "react-spring";

const ClassAccordionInterface = ({ icon,image, id, warmups, theme, extra, youtube, credit }) => {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    // transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
    easing: easings.easeOutExpo,
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <div className="accordion-item">
        <CardText
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <CardTitle>
            {icon}
            {image}
            {id}
            {warmups}
            {theme}
            {extra}
            {youtube}
            {credit}
            <span
              className="d-none d-md-block d-xxl-none"
              id="openCloseSymbols"
              style={{ color: "red" }}
            >
              {isActive ? " 🪐" : " 🚀"}
            </span>
          </CardTitle>
        </CardText>
        <Card>
          <CardBody className="accordion-content-theme">
            {isActive && (
              <div className="accordion-content card-xxl-12">Hello</div>
            )}
          </CardBody>
        </Card>
      </div>
    </animated.div>
  );
};

export default ClassAccordionInterface;
