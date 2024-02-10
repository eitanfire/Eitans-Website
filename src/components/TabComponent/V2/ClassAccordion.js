import React from "react";
import { Container } from "reactstrap";
import ClassAccordionInterface from "../../../features/ClassAccordionInterface";
import data from "../../../utils/data.json";
import currentcoursedata from "../../../utils/currentcoursedata.json";
import Philosophy from "../../../app/img/flammarion-engraving.jpg";
import Finance from "../../../app/img/personal-finance.png";
import Disease from "../../../app/img/diseases-image.jpg";
import America from "../../../app/img/chumash-indian-pow-wow.jpg";
import Government from "../../../app/img/Government.jpeg";

const ClassAccordion = () => {
  const courses = [
    { id: 0, image: Philosophy },
    { id: 2, image: Finance },
    { id: 13, image: Disease },
    { id: 18, image: America },
    { id: 10, image: Government },
  ];

  // Combine courses from both data sources
  const combinedCourses = courses.map(({ id, image }) => {
    const selectedCourseData = data.courses.find((course) => course.id === id);
    const currentCourseData = currentcoursedata.currentcoursedata.find(
      (course) => course.id === id
    );

    if (!selectedCourseData) {
      console.error(`Course with id ${id} not found in data.json.`);
      return null;
    }

    return {
      ...selectedCourseData,
      image,
      currentWarmUpURL: currentCourseData
        ? currentCourseData.currentWarmUpURL
        : null,
      currentGoogleClassroomPage: currentCourseData
        ? currentCourseData.currentGoogleClassroomPage
        : null,
    };
  });

  return (
    <div>
      <Container>
        {combinedCourses.map((selectedCourse) => {
          if (!selectedCourse) {
            return null;
          }

          const {
            id,
            name,
            intro,
            icon,
            warmups,
            theme,
            extra,
            youtube,
            credit,
            image,
            currentWarmUpURL,
            currentGoogleClassroomPage,
          } = selectedCourse;

          return (
            <ClassAccordionInterface
              name={name}
              intro={intro}
              icon={icon}
              image={image}
              key={id}
              warmups={warmups}
              theme={theme}
              extra={extra}
              youtube={youtube}
              credit={credit}
              currentWarmUpURL={currentWarmUpURL}
              currentGoogleClassroomPage={currentGoogleClassroomPage}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default ClassAccordion;
