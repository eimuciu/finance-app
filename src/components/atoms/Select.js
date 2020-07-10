import React from "react";
import styled from "styled-components";

const Select = props => (
  <StyledSelect name={props.name} value={props.value} onInput={props.onInput}>
    {props.text}
  </StyledSelect>
);

const StyledSelect = styled.select`
  background-color: white;
  width: 53%;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  border: none;
`;

export default StyledSelect;
