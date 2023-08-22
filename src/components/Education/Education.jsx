import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div className="education" style={{ margin: "2rem 0 0 2rem" }}>
      <span>Education</span>
      <div className="ecademic ">
        <div className="pos edu1">
          <span>Masters of computer science</span>
          <span>DY Patil collage lehegaon ,PUNE </span>
          <span>Parsuing</span>
        </div>

        <div className="pos edu2">
          <span>Bachelor of computer science</span>
          <span>BJS collage Wagholi,PUNE </span>
          <span>CGPA : 8.0 </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
