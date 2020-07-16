import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, editExpense, removeExpense, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    editExpense = jest.fn();
    removeExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
                                history={ history } 
                                editExpense={ editExpense } 
                                removeExpense={ removeExpense }
                                expense={ expenses[2] } />);
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    const expense = wrapper.find('ExpenseForm').prop('expense');
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expense);
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenCalled();
});