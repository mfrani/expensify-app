import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
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

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//should add an expense
test("should add an expense", () => {
  const expense = {
    id: "101",
    description: "testing desc",
    note: "testing note",
    createdAt: 2000,
    amount: 25
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

//should edit an expense
test("should edit an expense", () => {
  const updates = {
    id: "1",
    description: "melons",
    note: "updated note",
    amount: 2312312,
    createdAt: 0
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(updates);
});

//should not edit expense if expense not found
test("should not edit an expense if expense not found", () => {
  const updates = {
    description: "afasfad",
    note: "fffffff",
    amount: 23333332,
    createdAt: 0
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
