import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderData from "./components/molecules/HeaderData";
import InputAndCharts from "./components/molecules/InputAndCharts";
import DataTable from "./components/molecules/DataTable";
import * as apiCalls from "./apiCalls";

function sortByDate(array) {
  return array.sort((a, b) => new Date(b.date) - new Date(a.date));
}

const Finance = () => {
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);
  const [common, setCommon] = useState({
    currency: "€",
    isExpenseOrIncomeTable: true,
    selectedChart: "a",
    currentPage: 1,
    currentPageIncome: 1,
    postsPerPage: 5
  });

  useEffect(() => {
    apiCalls.loadExpenses().then(result => {
      return setExpense(sortByDate(result));
    });
    apiCalls.loadIncome().then(result => {
      return setIncome(sortByDate(result));
    });
  }, []);

  function addIncome(values) {
    // apiCalls.addIncome(values).then(result => {
    //   setIncome(sortByDate([...income, result]));
    // });
    setIncome(sortByDate([...income, values]));
  }

  function addExpense(values) {
    // apiCalls.addExpense(values).then(result => {
    //   setExpense(sortByDate([...expense, result]));
    // });
    setExpense(sortByDate([...expense, values]));
  }

  function removeIncome(item) {
    // apiCalls.deleteIncome(item).then(() => {
    //   const incomeAfterDeletion = income.filter(x => x.id !== item.id);
    //   setIncome(incomeAfterDeletion);
    // });
    const incomeAfterDeletion = income.filter(x => x.id !== item.id);
    setIncome(incomeAfterDeletion);
  }

  function removeExpense(item) {
    // apiCalls.deleteExpense(item).then(() => {
    //   const expenseAfterDeletion = expense.filter(x => x.id !== item.id);
    //   setExpense(expenseAfterDeletion);
    // });
    const expenseAfterDeletion = expense.filter(x => x.id !== item.id);
    setExpense(expenseAfterDeletion);
  }

  function saveIncome(item) {
    // apiCalls.updateIncome(item).then(() => {
    //   const updatedIncome = income.map(i =>
    //     item.id === i.id ? { ...i, ...item } : i
    //   );
    //   setIncome(updatedIncome);
    // });
    const updatedIncome = income.map(i =>
      item.id === i.id ? { ...i, ...item } : i
    );
    setIncome(updatedIncome);
  }

  function saveExpense(item) {
    // apiCalls.updateExpense(item).then(() => {
    //   const updatedExpense = expense.map(i =>
    //     item.id === i.id ? { ...i, ...item } : i
    //   );
    //   setExpense(updatedExpense);
    // });
    const updatedExpense = expense.map(i =>
      item.id === i.id ? { ...i, ...item } : i
    );
    setExpense(updatedExpense);
  }

  function selectTable(event) {
    let value = JSON.parse(event.target.value);
    setCommon({
      ...common,
      isExpenseOrIncomeTable: value
    });
  }

  function selectChart(event) {
    setCommon({
      ...common,
      selectedChart: event.target.value
    });
  }

  function paginateExpense(number) {
    setCommon({
      ...common,
      currentPage: number
    });
  }

  function paginateIncome(number) {
    setCommon({
      ...common,
      currentPageIncome: number
    });
  }

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Cash Flow</h1>
      <HeaderData expense={expense} income={income} common={common} />
      <InputAndCharts
        addExpense={addExpense}
        addIncome={addIncome}
        selectChart={selectChart}
        expense={expense}
        selectedChart={common.selectedChart}
      />
      <DataTable
        currentPageIncome={common.currentPageIncome}
        postsPerPage={common.postsPerPage}
        currentPage={common.currentPage}
        paginateExpense={paginateExpense}
        paginateIncome={paginateIncome}
        saveExpense={saveExpense}
        saveIncome={saveIncome}
        removeIncome={removeIncome}
        removeExpense={removeExpense}
        onSelectExpenseIncomeTable={selectTable}
        expense={expense}
        income={income}
        isExpenseOrIncomeTable={common.isExpenseOrIncomeTable}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0px auto;
`;

export default Finance;
