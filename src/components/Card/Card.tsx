import React from "react";

import { IMonster } from "../../interfaces";

import "./Card.css";

interface Props {
  monster: IMonster;
}

const Card = ({ monster: { id, name, email } }: Props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${id + 10}?set=set2&size=180x180`}
      alt="monster"
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
