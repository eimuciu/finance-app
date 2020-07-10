import React from "react";
import styled from "styled-components";

const Input = props => (
  <StyledInput
    id={props.id}
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onInput}
    list={props.list}
  />
);

const StyledInput = styled.input`
  background-color: white;
  width: 50%;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  text-align: center;
  border: none;
  &::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default StyledInput;
