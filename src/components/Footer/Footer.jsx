import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer" id="about">
      <img src={wave} alt="" style={{ width: "100%", height: "23rem" }} />
      <div className="f-content">
        <span>omkarparhad88pro@gamil.com</span>
        <div className="f-icons">
          <Instagram color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
