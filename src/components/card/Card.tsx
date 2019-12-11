import * as React from "react";

import "./Card.css";

export interface CardProps {
  title: string;
  photo: string;
  contenido: string;
}

const Card = props => {
  return (
    <div className="cardcontainer">
      <p>{props.title}</p>
      <hr />
      <img src="" alt="" />
      <p>contenido</p>
    </div>
  );
};

export default Card;
