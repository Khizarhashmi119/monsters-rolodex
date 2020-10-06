import React from "react";

import Card from "../card/Card.component";

import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(({ id, ...otherProps }) => {
      return <Card key={id} id={id} {...otherProps} />;
    })}
  </div>
);

export default CardList;
