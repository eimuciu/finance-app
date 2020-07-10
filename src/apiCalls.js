import config from "./config.json";

export function loadExpenses() {
  return fetch(`${config.apiUrl}/expense/`).then(response => response.json());
}

export function loadIncome() {
  return fetch(`${config.apiUrl}/income/`).then(response => response.json());
}

export function addExpense(expense) {
  return fetch(`${config.apiUrl}/expense/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(expense)
  }).then(response => response.json());
}

export function addIncome(income) {
  return fetch(`${config.apiUrl}/income/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(income)
  }).then(response => response.json());
}

export function deleteIncome(income) {
  return fetch(`${config.apiUrl}/income/${income.id}`, {
    method: "DELETE"
  });
}

export function deleteExpense(expense) {
  return fetch(`${config.apiUrl}/expense/${expense.id}`, {
    method: "DELETE"
  });
}

export function updateIncome(income) {
  return fetch(`${config.apiUrl}/income/${income.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(income)
  });
}

export function updateExpense(expense) {
  return fetch(`${config.apiUrl}/expense/${expense.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(expense)
  });
}
