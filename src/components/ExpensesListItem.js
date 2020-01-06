import React from "react";
import { Link } from "react-router-dom";

const ExpensesListItem = ({
  id,
  description,
  amount,
  createdAt,
  note
}) => {
  return (
    <li>
      <Link to={`/edit/${id}`}>
        {" "}
        <h4> {description}</h4>
      </Link>
      <p>
        {" "}
        Amount: {amount} || Created: {createdAt} || Note: {note}
      
      </p>
    </li>
  );
};

export default ExpensesListItem;
