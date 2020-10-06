import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/Card-list.component";
import SearchField from "./components/search-field/Search-field.component";

import "./App.css";

const App = () => {
  const [monstersState, setMonstersState] = useState([]);
  const [searchFieldState, setSearchFieldState] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((monsters) => {
        setMonstersState(monsters);
      });
  }, []);

  const handleChange = (e) => {
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
