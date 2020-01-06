import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/ConfigureStore";
import { addExpense } from "./actions/Expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    amount: 4522,
    createdAt: 1578318461000,
    note: "twoja stara nie ma kolan"
  })
);
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
