import axios from "axios";

const BACKEND_ROOT_URL =
  "https://rn-course-8a701-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_ROOT_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_ROOT_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_ROOT_URL + `/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return axios.delete(BACKEND_ROOT_URL + `/expenses/${id}.json`);
}
