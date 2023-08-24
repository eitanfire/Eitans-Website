import React from "react";
import { Container } from "reactstrap";
import { Fall2023ClassesAccordion } from "../../utils/Fall2023ClassesAccordion";
import AnimatedAccordion from "../../features/AnimatedAccordion";

const Fall2023ClassesAccordion = () => {
  return (
    <div className="SecondSemesterAccordion">
      <Container>
        {firstSemesterAccordionData.map(
          ({ title, content, image, id, current }) => (
            <AnimatedAccordion
              title={title}
              content={content}
              image={image}
              key={id}
              current={current}
            />
          )
        )}
      </Container>
    </div>
  );
};

export default Fall2023ClassesAccordion;
