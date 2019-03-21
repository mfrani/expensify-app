import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

//addExpense -> water bill
store.dispatch(addExpense({ description: "Water Bill", amount: 500, createdAt: -21000}));
//addExpense -> gas bill
store.dispatch(addExpense({ description: "Gas Bill", amount: 777, createdAt: 1000}));
//setTextFilter -> bill(2 items) -> water (1 item)
store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));
//getVisibleExpenses -> print visible ones to screen
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("app"));
