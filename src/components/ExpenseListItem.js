import React from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import numeral from 'numeral';

// note that dispatch is part of the "props" variable that is being destructured below
const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link to={`edit/${id}`} className="list-item">
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

// Note nothing needs to be passed into the first part of connect() since ExpenseListItem does not need direct access to the state
export default ExpenseListItem;