import React from 'react';
import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {

    state = {
        requestToRemove: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onClick = () => {
        this.setState(() => ({ requestToRemove: true }));
    };

    onDelete = () => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    }

    onCancel = () => {
        this.setState(() => ({ requestToRemove: false }));
    }

    render() {
        return (
            <div>
                <div className="page">
                    <div className="page-header">
                        <div className="content-container">
                            <h1 className="page-header__title">Edit Expense</h1>
                        </div>
                    </div>
                    <div className="content-container">
                        <ExpenseForm
                            expense={this.props.expense}
                            onSubmit={this.onSubmit}
                        />
                        <button
                            className="button button--secondary"
                            type="button"
                            onClick={this.onClick}>
                            Remove Expense
                    </button>
                    </div>
                </div>
                <RemoveModal 
                    requestToRemove={this.state.requestToRemove} 
                    onDelete={this.onDelete} 
                    onCancel={this.onCancel} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditExpense: (id, expense) => {
            dispatch(startEditExpense(id, expense));
        },
        startRemoveExpense: (expense) => {
            dispatch(startRemoveExpense(expense));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);