import React from "react";
import styled from "styled-components";
import Header from "../atoms/Header";

function summarise(array) {
  let numbers = array.map(item => parseFloat(item.amount));
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum.toFixed(2);
}

function calculateProfit(income, expense) {
  let a = summarise(income);
  let b = summarise(expense);
  let c = a - b;
  return c.toFixed(2);
}

const HeaderData = ({ expense, income, common }) => {
  return (
    <Flex>
      <Div>
        <Header text="Income" />
        {common.currency + " "}
        {summarise(income)}
      </Div>
      <Div>
        <Header text="Expense" />
        {common.currency + " "}
        {summarise(expense)}
      </Div>
      <Div>
        <Header text="Profit" />
        {common.currency + " "}
        {calculateProfit(income, expense)}
      </Div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 10px auto;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    flex-flow: column;
    width: 100%;
  }
`;
const Div = styled.div`
  width: 33.33%;
  padding: 10px 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 5px;
  background-color: #fecac6;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px auto;
  }
`;

export default HeaderData;
