import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import ClassAccordionInterface from "../../../features/ClassAccordionInterface";
import data from "../../../utils/data.json";
import currentcoursedata from "../../../utils/currentcoursedata.json";
import Philosophy from "../../../app/img/flammarion-engraving.jpg";
import FinanceImage from "../../../app/img/personal-finance.png";
import DiseaseImage from "../../../app/img/diseases-image.jpg";
import America from "../../../app/img/chumash-indian-pow-wow.jpg";
import Government from "../../../app/img/Government.jpeg";

const ClassAccordion = () => {
  const courses = [
    { id: 0, image: Philosophy },
    { id: 2, image: FinanceImage },
    { id: 13, image: DiseaseImage },
    { id: 18, image: America },
    { id: 10, image: Government },
  ];

  const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(
    window.innerWidth < 600
  );

  useEffect(() => {
    const handleResize = () => {
      setIsExtraSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      currentExtra: currentCourseData ? currentCourseData.currentExtra : null,
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
            currentExtra,
          } = selectedCourse;

          // Conditionally render abbreviated title on extra small screens for specific courses
          let renderedName = name;
          if (isExtraSmallScreen && (id === 2 || id === 13)) {
            renderedName = id === 2 ? "Finance" : "Disease";
          }

          return (
            <ClassAccordionInterface
              name={renderedName}
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
              currentExtra={currentExtra}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default ClassAccordion;
