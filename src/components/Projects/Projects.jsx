import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome Projects</span>
        <span>
          Html,Css,JavaScript,
          <br />
          RectJS,
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Exercitationem doloremque molestias quidem illo earum.
        </span>
        <button className="button s-button">Download CV</button>
        <div
          className="blur s-blur1"
          style={{ backgroundColor: "rgb(63 172 195 / 87%" }}
        ></div>
      </div>

      <div className="p-right"></div>
    </div>
  );
};

export default Projects;
