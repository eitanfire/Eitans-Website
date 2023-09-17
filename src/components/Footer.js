import React from "react";
import "../App.css";
import year from "../utils/currentYear.js";

const Footer = () => {
  return (
    <div className="footer">
      <span id="aBAB">©{year}&nbsp;Eitan Fire</span>
      {/* <span style={{ color: "#00008B" }}> ⎸</span> */}
      <span id="shine">
        &nbsp;A <span id="globe">🌍</span> Class Experience!
      </span>
    </div>
  );
};

export default Footer;
