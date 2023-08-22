import React from 'react'
import './Services.css';
import HaertEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Skill</span>
        <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Exercitationem doloremque molestias quidem illo earum.<br />
          Odit minima facilis ipsum dignissimosillo sed autem sequi.</span>
        <button className=" button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ backgroundColor: "blue" }}> </div>

      </div>
      {/* right side */}
      <div className="cards">
        <div>
          <Card
            emoji={HaertEmoji}
            heading={'Design'}
            detail={'Html,css,java script,'}
          />
        </div> 
      </div>
    </div>
  )
}

export default Services
