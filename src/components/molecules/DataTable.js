import React from "react";
import styled from "styled-components";
import Table from "../atoms/Table";
import ExpenseRow from "./ExpenseRow";
import IncomeRow from "./IncomeRow";
import Pagination from "../atoms/Pagination";

const DataTable = ({
  currentPageIncome,
  paginateExpense,
  paginateIncome,
  postsPerPage,
  currentPage,
  income,
  expense,
  saveExpense,
  saveIncome,
  removeIncome,
  removeExpense,
  isExpenseOrIncomeTable,
  onSelectExpenseIncomeTable
}) => {
  // Expense Pagination

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const expenseCopy = [...expense];
  const currentPosts = expenseCopy.slice(indexOfFirstPost, indexOfLastPost);

  // Income Pagination

  const indexOfLastPostIncome = currentPageIncome * postsPerPage;
  const indexOfFirstPostIncome = indexOfLastPostIncome - postsPerPage;
  const incomeCopy = [...income];
  const currentPostsIncome = incomeCopy.slice(
    indexOfFirstPostIncome,
    indexOfLastPostIncome
  );

  return (
    <Flex>
      <Div>
        <select onChange={onSelectExpenseIncomeTable}>
          <option value="true">Expense</option>
          <option value="false">Income</option>
        </select>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>{isExpenseOrIncomeTable ? "Category" : "Source"}</th>
              <th>Amount</th>
              <th>Notes</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {isExpenseOrIncomeTable
              ? currentPosts.map(item => (
                  <ExpenseRow
                    key={item.id}
                    item={item}
                    removeExpense={removeExpense}
                    saveExpense={saveExpense}
                  />
                ))
              : currentPostsIncome.map(item => (
                  <IncomeRow
                    key={item.id}
                    item={item}
                    removeIncome={removeIncome}
                    saveIncome={saveIncome}
                  />
                ))}
          </tbody>
        </Table>
        {isExpenseOrIncomeTable ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={expense.length}
            onPaginate={paginateExpense}
          />
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={income.length}
            onPaginate={paginateIncome}
          />
        )}
      </Div>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  width: 80%;
  margin: 15px auto;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Div = styled.div.attrs(() => ({}))`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-end;
  margin: 10px auto;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #e0fcd3;
`;

export default DataTable;
