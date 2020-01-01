import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./components/store/ConfigureStore";
import * as actionExpenses from "./components/actions/Expenses";
import * as filterExpenses from "./components/actions/Filters";
import getVisibleExpenses from "./components/selectors/Expenses";
// import {addExpense} from './components/actions/Expenses'

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(
  actionExpenses.addExpense({ description: "water bill", amount: 2540 })
);
store.dispatch(
  actionExpenses.addExpense({ description: "gas bill", amount: 1300 })
);
store.dispatch(
  actionExpenses.addExpense({ description: "moj stary", amount: 1300 })
);
store.dispatch(
  actionExpenses.addExpense({ description: "twoja stara", amount: 1300 })
);
// unsubscribe();

store.dispatch(filterExpenses.setTextFilter("wat"));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("root"));
