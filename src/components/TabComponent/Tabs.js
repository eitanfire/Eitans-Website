import React from "react";
import { useState } from "react";
import FirstSemesterAccordion from "./FirstSemesterAccordion"
import SecondSemesterAccordion from "./SecondSemesterAccordion";
import '../../tabs.css';
import TabNavItem from "../TabComponent/V2/TabNavItem";
import TabContent from "../TabComponent/V2/TabContent";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="1st Semester
"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="2nd Semester"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Next Year"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className="outlet">
        {/* {activeTab === "tab1" ? (
          <FirstSemesterAccordion />
        ) : (
          <SecondSemesterAccordion />
        )} */}
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstSemesterAccordion />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondSemesterAccordion />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <p>Class Preferences for Next Year</p>
        </TabContent>
      </div>
    </div>
  );
};
export default Tabs;
