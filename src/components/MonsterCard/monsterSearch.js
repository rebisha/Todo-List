import React from "react";
import { FormControl } from "react-bootstrap";

import "./search.scss";

const MonsterSearch = ({ onChange, placeholder }) => {
  return (
    <FormControl
      className="monster-search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default MonsterSearch;
