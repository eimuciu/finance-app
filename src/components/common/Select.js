import React from "react";

const Select = ({ children, onSelect }) => (
  <select onChange={onSelect}>{children}</select>
);

export default Select;
