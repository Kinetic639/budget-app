import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const now = moment();

export class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    const { description, amount, note } = this.state;

    if (!description || !amount) {
      this.setState(() => ({
        error: "Please provide description and amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note
      });
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onChangeHandler = e => {
    e.persist();
    this.setState(() => ({ [e.target.name]: e.target.value }));
    // this.setState({description: e.target.value})
  };

  onAmountChangeHandler = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="addForm">
          <input
            name="description"
            type="text"
            required
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onChangeHandler}
          />
          <input
            name="amount"
            type="text"
            placeholder="Amount"
            onChange={this.onAmountChangeHandler}
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD/MM/YYYY"
          />
          <textarea
            name="note"
            placeholder="add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onChangeHandler}
          />
          <button type="submit">Add expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
