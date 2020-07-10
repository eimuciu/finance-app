import React from "react";
import styled from "styled-components";
import Header from "../atoms/Header";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import PieCategoryChart from "../atoms/PieCategoryChart";
import PieColoredCategoryChart from "../atoms/PieColoredCategoryChart";
import Select from "../common/Select";

const InputAndCharts = ({
  addExpense,
  addIncome,
  expense,
  selectChart,
  selectedChart
}) => (
  <Wrapper>
    <Container>
      <Header text="add Expense" />
      <ExpenseForm addExpense={addExpense} />
    </Container>

    <Container>
      <Header text="add Income" />
      <IncomeForm addIncome={addIncome} />
    </Container>
    <Container>
      <SelectContainer>
        <Select onSelect={selectChart}>
          <option value="a">Pie Colored Chart</option>
          <option value="b">Pie Chart</option>
        </Select>
      </SelectContainer>
      {selectedChart === "a" ? (
        <PieColoredCategoryChart expense={expense} />
      ) : selectedChart === "b" ? (
        <PieCategoryChart expense={expense} />
      ) : null}
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: stretch;
  width: 80%;
  margin: 15px auto;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    flex-flow: column;
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 10px;
  margin: 10px auto;
  text-align: center;
  border-radius: 5px;
  background-color: #b5e1e6;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column;
  }
`;

const SelectContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export default InputAndCharts;
