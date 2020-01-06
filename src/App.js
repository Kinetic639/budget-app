import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/ConfigureStore";
import * as actionExpenses from "./actions/Expenses";
import * as filterExpenses from "./actions/Filters";
import getVisibleExpenses from "./selectors/Expenses";
// import {addExpense} from './components/actions/Expenses'

const store = configureStore();

// const unsubscribe = store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

store.dispatch(
  actionExpenses.addExpense({
    description: "water bill",
    amount: 2540,
    createdAt: 1200,
    note: 'bla bla bla bla'
  })
);
store.dispatch(
  actionExpenses.addExpense({
    description: "gas bill",
    amount: 1300,
    createdAt: 150,
    note: 'twoja stara nie ma kolan'
  })
);
store.dispatch(
  actionExpenses.addExpense({
    description: "moj stary",
    amount: 1100,
    createdAt: 790
  })
);
store.dispatch(
  actionExpenses.addExpense({
    description: "twoja stara",
    amount: 900,
    createdAt: 650
  })
);
// unsubscribe();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
