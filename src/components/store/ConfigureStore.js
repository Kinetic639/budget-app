import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/Expenses";
import filterReducer from "../reducers/Filters";

//store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  );
  return store;
};
