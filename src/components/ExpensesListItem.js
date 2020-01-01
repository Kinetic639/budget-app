import React from "react";

const ExpensesListItem = ({ description, amount, createdAt }) => {
  
  return (
    <li>
      <p>
        Desc: {description} || Amount: {amount} || Created: {createdAt}
      </p>
    </li>
  );
};

export default ExpensesListItem;
