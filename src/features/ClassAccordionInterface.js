import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useSpring, animated, scale, easings } from "react-spring";
import '../courseTheme.css';

const ClassAccordionInterface = ({
  name,
  icon,
  image,
  id,
  warmups,
  theme,
  extra,
  youtube,
  credit,
  intro,
}) => {
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
    <animated.div className={theme} style={animatedStyle}>
      <div className="accordion-item">
        <CardText
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <CardTitle>
            {icon}
            <img
              className="classImage mx-auto d-none d-xxl-block"
              src={image}
              alt="World Wars banner"
            />
            {name}
            {id}
            {/* {warmups} */}
            {/* {theme} */}
            {/* {extra} */}
            {/* {youtube} */}
            {/* {credit} */}
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
              <div className="accordion-content card-xxl-12">
                {credit}
                {intro}
              </div>
            )}
            <a
              role="button"
              className="btn btn-light btn-link"
              href="https://docs.google.com/document/d/1iXyCNXjkfTFJy5DpO2tUF3MuDKHf9dFkl9pTCKcmpJQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌈 Honors & Extra Credit
            </a>
          </CardBody>
        </Card>
      </div>
    </animated.div>
  );
};

export default ClassAccordionInterface;
