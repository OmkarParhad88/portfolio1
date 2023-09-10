import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer" id="about">
      <img src={wave} alt="" style={{ width: "100%", height: "23rem" }} />
      <div className="f-content">
        <span>omkarparhad88pro@gamil.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/omiparhad__8887/">
            <Instagram color="white" size="3rem" />
          </a>
          <a href="https://github.com/OmkarParhad88">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.facebook.com/omkar.parhad.3/">
            <Facebook color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/omkar-parhad-93537b22a">
            <Linkedin color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
