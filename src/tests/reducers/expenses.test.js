import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import { addExpense } from "../../actions/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { tpe: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit epense with id", () => {
  const amount = 9999;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});

test("should not edit epense with id", () => {
  const amount = 9999;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add new expense with given values", () => {
  const expense = {
    id: "4",
    description: "shopping",
    note: "",
    amount: 123456,
    createdAt: 987654
  };

  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
