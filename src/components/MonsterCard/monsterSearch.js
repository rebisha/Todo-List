import React, { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";

import MonsterCard from "./monsterCard";

import "./search.scss";

const MonsterSearch = ({ placeholder }) => {
  const [monsters, setMonsters] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(response => setMonsters(response));
  }, []);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const filterMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div>
      <FormControl
        className="monster-search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <MonsterCard monsters={filterMonsters} />
    </div>
  );
};

export default MonsterSearch;
