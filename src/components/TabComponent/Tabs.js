import React from "react";
const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>1st Semester</li>
        <li>2nd Semester</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};
export default Tabs;
