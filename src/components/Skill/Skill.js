import React from 'react'
import './Skill.css';
import html from '../../img/html.png'
import css from '../../img/css.png'
import reactjs from "../../img/reactjs.png"
import js from '../../img/js.png'
import Card from '../Card/Card';
import resume from "../../doc/Omkar Resume.pdf"
import python from "../../img/python.png"
import java from "../../img/java.png"
import bootstrap from "../../img/bootstrap.png"

const Skill = () => {
  return (
    <div className="skill">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Skill's</span>
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Exercitationem doloremque molestias quidem illo earum.</span>
        <a href={resume} download>
          <button className="button s-button" href={resume} download>Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ backgroundColor: "rgb(63 172 195 / 87%" }}> </div>
      </div>

      {/* right side */}
      <div className="cards">
        <div style={{ left: "8rem", top: "-4rem" }}>
          <Card
            emoji={html}
            heading={'Html'}
            height={"50"}
          />
        </div>
        <div style={{ left: "23rem", top: "-1rem" }}>
          <Card
            emoji={css}
            heading={'Css'}
            height={"50"}
          />
        </div>
        <div style={{ left: "11rem", top: "5rem" }}>
          <Card
            emoji={js}
            heading={'Java Script'}
            height={"50"}
          />
        </div>
        <div style={{ left: "21rem", top: "9rem" }}>
          <Card
            emoji={reactjs}
            heading={'React JS'}
            height={"50"}
          />
        </div>
        <div style={{ left: "4rem", top: "14rem" }}>
          <Card
            emoji={python}
            heading={'Python'}
            height={"50"}
          />
        </div>
        <div style={{ left: "14rem", top: "17rem" }}>
          <Card
            emoji={java}
            heading={'Java'}
            height={"50"}
          />
        </div>
        <div style={{ left: "-4rem", top: "17rem" }}>
          <Card
            emoji={bootstrap}
            heading={'Bootstrap'}
            height={"50"}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "rgb(213 143 255)" }}></div>
      </div>
    </div >
  )
}

export default Skill
