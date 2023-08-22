import React from 'react'
import "./Card.css";

const Card = ({ emoji, height, heading }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" height={height} />
      <span>{heading}</span>
      <button className="c-button">Show</button>
    </div>
  );
};

export default Card
