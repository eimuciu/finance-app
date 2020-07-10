import React from "react";
import styled from "styled-components";

const Button = props => (
  <StyledButton onClick={props.add}>{props.text}</StyledButton>
);

const StyledButton = styled.button`
  margin: 10px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
  width: 50%;
`;

export default Button;
