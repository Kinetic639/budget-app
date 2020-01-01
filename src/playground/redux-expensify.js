import { createStore, combineReducers } from "redux";
import uuid from "uuid";







//store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 400, createdAt: 1 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "rein", amount: 800, createdAt: 20 })
);

store.dispatch(addExpense({ description: "rwer", amount: 120, createdAt: 120  }));
store.dispatch(addExpense({ description: "cosdfsdfffe", amount: 950 , createdAt: 5 }));
store.dispatch(addExpense({ description: "coqweqweffe", amount: 650 , createdAt: 0 }));
// // store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 999 }));

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(213));
store.dispatch(sortByAmount());

// store.dispatch(setTextFilter('rei'))

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(321));
// store.dispatch(setEndDate());
