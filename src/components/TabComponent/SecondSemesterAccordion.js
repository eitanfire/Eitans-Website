import React from "react";
import { Container } from "reactstrap";
import { secondSemesterAccordionData } from "../../utils/secondSemesterClasses";
import AnimatedAccordion from "../../features/AnimatedAccordion";
// import { useState } from "react";

const SecondSemesterAccordion = () => {
  return (
    <div className="SecondSemesterAccordion">
      <Container>
        {secondSemesterAccordionData.map(
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
