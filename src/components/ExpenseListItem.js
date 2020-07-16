import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import numeral from 'numeral';

// note that dispatch is part of the "props" variable that is being destructured below
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{ numeral(amount /100).format('$0,0.00') }</p>
        <p>{ moment(createdAt).format('MMMM Do, YYYY') }</p>
    </div>
);

// Note nothing needs to be passed into the first part of connect() since ExpenseListItem does not need direct access to the state
export default ExpenseListItem;