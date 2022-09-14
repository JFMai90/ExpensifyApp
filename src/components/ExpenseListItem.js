import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <h3>
      {numeral(amount).format('$0,0.00')}
    </h3>
    <h5>{id}</h5>
  </div>
);


export default ExpenseListItem;