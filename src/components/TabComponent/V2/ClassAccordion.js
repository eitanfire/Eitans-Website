import React from "react";
import { Container } from "reactstrap";
import ClassAccordionInterface from "../../../features/ClassAccordionInterface";
import data from "../../../utils/data.json";

const ClassAccordion = () => {
  const courseIds = [0, 2, 13, 18, 10]; // The ids of the courses you want to display

  return (
    <div>
      <Container>
        {courseIds.map((courseId) => {
          const selectedCourse = data.courses.find(
            (course) => course.id === courseId
          );

          if (!selectedCourse) {
            console.error(`Course with id ${courseId} not found.`);
            return null; // or handle the case when the course is not found
          }

          return (
            <ClassAccordionInterface
              name={selectedCourse.name}
              icon={selectedCourse.icon}
              image={selectedCourse.image}
              key={selectedCourse.id}
              warmups={selectedCourse.warmups}
              theme={selectedCourse.theme}
              extra={selectedCourse.extra}
              youtube={selectedCourse.youtube}
              credit={selectedCourse.credit}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default ClassAccordion;
