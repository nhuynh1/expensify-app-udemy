import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, startEditExpense, startRemoveExpense, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage 
                                history={ history } 
                                startEditExpense={ startEditExpense } 
                                startRemoveExpense={ startRemoveExpense }
                                expense={ expenses[2] } />);
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  });

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalled();
});