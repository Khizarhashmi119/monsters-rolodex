import React from "react";

import Card from "../Card/Card";
import { IMonster } from "../../interfaces";

import "./CardList.css";

interface Props {
  monsters: IMonster[];
}

const CardList = ({ monsters }: Props): JSX.Element => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
