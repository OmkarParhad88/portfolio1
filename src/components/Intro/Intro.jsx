import React from "react";
import FloatingDiv from "../FloatinDiv/FloatingDiv";
import "./Intro.css";
import github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import vector1 from "../../img/vector11.png";
import vector2 from "../../img/vector22.png";
import boy from "../../img/boy3.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy,I Am </span>
          <span>Omkar Parhad</span>
          <span>
             I like to do frontend development with high lavel of interest in web development
            ,productions the quality work
          </span>
        </div>
        <button className="i-button button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/OmkarParhad88"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-parhad-93537b22a"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://www.instagram.com/omi_parhad__8887/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-3rem", left: "22rem" }}>
          <FloatingDiv image={crown} text="Web" text2="Developer" />
        </div>
        <div style={{ top: "15rem", left: "-3rem" }}>
          <FloatingDiv image={thumbup} text="Best Design" text2="Award" />
        </div>

        {/* blur divs */}

        <div className="blur"></div>
        <div
          className="blur"
          style={{
            background: "rgb(95 209 231)",
            top: "12rem",
            left: "-8rem",
            width: "17rem",
            height: "10rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;