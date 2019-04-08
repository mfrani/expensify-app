import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
//Export a statless functional component
// description, amount, createdAt

const ExpenseListItem = (
  { dispatch, id, description, amount, createdAt },
  props
) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
