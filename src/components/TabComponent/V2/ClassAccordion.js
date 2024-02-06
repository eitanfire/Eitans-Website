import React from "react";
import { Container } from "reactstrap";
import ClassAccordionInterface from "../../../features/ClassAccordionInterface";
import data from "../../../utils/data.json";
import currentcoursedata from "../../../utils/currentcoursedata.json";
import Philosophy from "../../../app/img/flammarion-engraving.jpg";
import  Finance  from "../../../app/img/personal-finance.png";
import Disease  from "../../../app/img/diseases-image.jpg";
import America from "../../../app/img/chumash-indian-pow-wow.jpg";
import Government from "../../../app/img/Government.jpeg";

const ClassAccordion = () => {
  const courses = [
    { id: 0, image: Philosophy },
    { id: 2, image: Finance },
    { id: 13, image: Disease,  },
    { id: 18, image: America,  },
    { id: 10, image: Government  },
  ];

  return (
    <div>
      <Container>
        {courses.map(({ id, image }) => {
          const selectedCourse = data.courses.find(
            (course) => course.id === id
          );

          if (!selectedCourse) {
            console.error(`Course with id ${id} not found.`);
            return null; // or handle the case when the course is not found
          }

          return (
            <ClassAccordionInterface
              name={selectedCourse.name}
              intro={selectedCourse.intro}
              icon={selectedCourse.icon}
              image={image} // Use the image from the courses array
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
