import React from 'react';
import { Link } from 'react-router-dom';

// note that dispatch is part of the "props" variable that is being destructured below
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{ amount }</p>
        <p>{ createdAt }</p>
    </div>
);

// Note nothing needs to be passed into the first part of connect() since ExpenseListItem does not need direct access to the state
export default ExpenseListItem;