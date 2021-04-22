import React, { useState, useEffect } from "react";

import { IMonster } from "./interfaces";
import CardList from "./components/CardList/CardList";
import SearchField from "./components/SearchField/SearchField";

import "./App.css";

const App = (): JSX.Element => {
  const [monstersState, setMonstersState] = useState<IMonster[]>([]);
  const [searchFieldState, setSearchFieldState] = useState<string>("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const monsters: IMonster[] = await response.json();
      setMonstersState(monsters);
    })();
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchFieldState(e.target.value);
  };

  const filteredMonsters = monstersState.filter(({ name }) =>
    name.toLowerCase().includes(searchFieldState.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Monsters rolodex</h1>
      <SearchField placeholder="Search monster" handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
