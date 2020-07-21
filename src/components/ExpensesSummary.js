import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    return (
        <div>
            <h1>{`Viewing ${props.expensesCount} expense${props.expensesCount === 1 ? '' : 's'} totalling ${numeral(props.expensesTotal / 100).format('$0,0.00')}`}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);