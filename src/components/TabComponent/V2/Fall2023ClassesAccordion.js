import React from "react";
import { Container } from "reactstrap";
import AnimatedAccordion from "../../../features/AnimatedAccordion";
import { fall2023Classes } from "../../../utils/fall2023Classes";

const Fall2023ClassesAccordion = () => {
  return (
    <div 
    // className="SecondSemesterAccordion"
    >
      <Container>
        {fall2023Classes.map(({ title, content, image, id, current }) => (
          <AnimatedAccordion
            title={title}
            content={content}
            image={image}
            key={id}
            current={current}
          />
        ))}
      </Container>
    </div>
  );
};

export default Fall2023ClassesAccordion;
