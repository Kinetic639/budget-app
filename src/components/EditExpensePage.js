import React from "react";

export default function EditExpensePage(props) {
  return <p>Editing the expense with id of {props.match.params.id}</p>;
}
