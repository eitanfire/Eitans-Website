import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { useSpring, animated, scale, easings } from "react-spring";
import "../courseTheme.css";
import "../Credit.css";
import "../courseTheme.css";

const ClassAccordionInterface = ({
  name,
  icon,
  image,
  id,
  warmups,
  currentWarmUpURL,
  currentGoogleClassroomPage,
  currentExtra,
  theme,
  extra,
  youtube,
  credit,
  intro,
  className, // Add className prop here
}) => {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    easing: easings.easeOutExpo,
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <div className="accordion-item mb-1">
        <CardText
          className="accordion-title"
          onClick={() => setIsActive(!isActive)}
        >
          <CardTitle>
            {icon}
            <img
              className={`classImage mx-auto d-none d-xxl-block ${className}`} // Apply className here
              src={image}
              alt="Class image banner"
            />
            {name}
            {id}
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
          {isActive && (
            <CardBody className="accordion-item">
              <a
                role="button"
                className="btn btn-light btn-link"
                href={currentWarmUpURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                👩🏻‍💻 Warm-Up Questions
              </a>
              <a
                role="button"
                className="btn btn-light btn-link"
                href={currentGoogleClassroomPage}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                📚 Classroom Page
              </a>
              <a
                role="button"
                className="btn btn-light btn-link"
                href={currentExtra}
                target="_blank"
                rel="noopener noreferrer"
              >
                🌈 Honors & Extra Credit
              </a>
            </CardBody>
          )}
        </Card>
      </div>
    </animated.div>
  );
};


export default ClassAccordionInterface;
