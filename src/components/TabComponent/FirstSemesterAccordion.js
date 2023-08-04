import React from "react";
import { Container } from "reactstrap";
import { firstSemesterAccordionData } from "../../utils/firstSemesterClasses";
import AnimatedAccordion from "../../features/AnimatedAccordion";

const SecondSemesterAccordion = () => {
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

export default SecondSemesterAccordion;
