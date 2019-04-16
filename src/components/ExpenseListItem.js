import React from "react";

import { Link } from "react-router-dom";
//Export a statless functional component
// description, amount, createdAt

const ExpenseListItem = ({ id, description, amount, createdAt }, props) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
