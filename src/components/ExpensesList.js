import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import SelectExpenses from './selectors/Expenses'

function ExpensesList(props) {
  return (
    <div>
      <h1>Expenses list:</h1>
      <ul>
          {props.expenses.map((expense) => <ExpensesListItem key={expense.id} {...expense}/>)}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    expenses: SelectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
