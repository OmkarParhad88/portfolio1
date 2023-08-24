import React from "react";
import "./Education.css";
import education from "../../img/educationIcon.png";
const Education = () => {
  return (
    <div className="education">
      <span>
        Education <img src={education} alt="" />
      </span>
      <div
        className="blur e-blur1"
        style={{ backgroundColor: "rgb(63 172 195 / 87%" }}
      ></div>
      <div className="ecademic ">
        <div className="pos edu1">
          <span>Masters Of Computer Science</span>
          <span>DY Patil collage lehegaon ,PUNE </span>
          <span>Parsuing</span>
        </div>

        <div className="pos edu2">
          <span>Bachelor Of Computer Science</span>
          <span>BJS collage Wagholi,PUNE </span>
          <span>CGPA : 8.0 </span>
        </div>
        <div
          className="blur e-blur2"
          style={{ background: "rgb(213 143 255)" }}
        ></div>
      </div>
    </div>
  );
};

export default Education;
