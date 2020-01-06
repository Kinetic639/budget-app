import React from "react";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import * as actionExpenses from '../actions/Expenses'

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={expense => {
         props.dispatch(actionExpenses.addExpense(expense))
         props.history.push('/')
        }}
      />
    </div>
  );
}

export default connect()(AddExpensePage)
