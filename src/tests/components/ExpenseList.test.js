import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";

test("should render Expense List with expenses", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render Expenses List with empty message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
