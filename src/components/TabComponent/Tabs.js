import React from "react";
import { useState } from "react";
import FirstSemesterAccordion from "./FirstSemesterAccordion"
import SecondSemesterAccordion from "./SecondSemesterAccordion";
import '../../tabs.css';
// import '../../tabs_Chinedu.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          1st Semester
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          2nd Semester
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? (
          <FirstSemesterAccordion />
        ) : (
          <SecondSemesterAccordion />
        )}
      </div>
    </div>
  );
};
export default Tabs;
