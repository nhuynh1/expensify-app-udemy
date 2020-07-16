import React from 'react';
import { connect } from 'react-redux';

import { editExpense, removeExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense({...expense, id: this.props.expense.id });
        this.props.history.push('/');
    };

    onClick = () => {
        this.props.removeExpense(this.props.expense);
        this.props.history.push('/');
    };
    
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={ this.props.expense }
                    onSubmit={ this.onSubmit }
                />
                <button 
                    type="button" 
                    onClick={ this.onClick }
                >
                    Remove
                </button>
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
        editExpense: (expense) => {
            dispatch(editExpense(expense.id, expense));
        },
        removeExpense: (expense) => {
            dispatch(removeExpense(expense));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);