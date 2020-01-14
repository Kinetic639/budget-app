import React from "react";
import ExpensesList from "./ExpensesList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpenseDashboardPage(props) {
  return (
    <div>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpensesList />
    </div>
  );
}
