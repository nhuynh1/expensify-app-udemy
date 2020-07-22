import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal, expensesHidden}) => {
    const expensesTextViewing = `expense${expensesCount === 1 ? '' : 's'}`;
    const expensesTextHidden = `expense${expensesHidden === 1 ? '' : 's'}`;
    
    const expensesTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> { expensesTextViewing } totalling <span>{ expensesTotalFormatted }</span>
                </h1>
                { expensesHidden > 0 && (<span>Note: {expensesHidden} {expensesTextHidden} hidden by filters</span>) }
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    const expensesTotal = selectExpensesTotal(expenses);
    return {
        expensesCount: expenses.length,
        expensesTotal,
        expensesHidden: state.expenses.length - expenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);