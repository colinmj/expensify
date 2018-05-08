import React from 'react';

import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {createdAt} and {amount}
      </p>
    </div>
  );
};

export default ExpenseListItem;
