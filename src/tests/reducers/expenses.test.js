import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=> {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    }
    const currentState = expenses.slice(0, 2);
    const state = expensesReducer(currentState, action);
    expect(state).toEqual(expenses);
});

test('should edit an expense by id', () => {
    const note = 'a note value';
    const index = 0;
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[index].id,
        updates: { note }
    }
    
    const state = expensesReducer(expenses, action);
    expect(state[index].note).toBe(note);
});

test('should not edit expense if expense id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { note: 'a note value' }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);    
});

test('should set expenses', () => {
    const initialState = [
        {
            id: '100',
            description: 'Coffee',
            note: '',
            amount: 495,
            createdAt: 0
        }
    ];

    const action = {
        type: 'SET_EXPENSES',
        expenses
    }

    const state = expensesReducer(initialState, action);
    expect(state).toEqual(expenses);
});