import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {

    // note that history comes from the <Route> component that we access via props
    // note that the expense variable gets passed in from ExpenseForm itself when we call the onSubmit function

    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');       
    }

    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={ this.onSubmit } />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);