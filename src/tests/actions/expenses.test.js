import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { 
    startAddExpense, 
    addExpense, 
    removeExpense, 
    editExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense, 
    startEditExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = { auth: { uid }};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {
            description,
            note,
            amount,
            createdAt
        }
    });
    database.ref(`users/${uid}/expenses`)
        .set(expensesData)
        .then(() => done());
});


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense(expenses[0]))
        .then(() => {
            return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toBeFalsy(); // expect snapshot.val() to be null
            done();
        });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'new note value'}
    });
});

test('should edit expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = { note: 'new note value' }
    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            });

            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then((snapshot) => {
            const {id, ...expenseNoId } = expenses[0];
            expect(snapshot.val()).toEqual({
                ...expenseNoId,
                ...updates
            });
            done();
        });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'A better mouse',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ 
                type: 'ADD_EXPENSE', 
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });
            // return the promise from calling .once()
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })
        .catch(error => console.log(error));
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);

    const defaultExpense = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }

    store.dispatch(startAddExpense())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ 
                type: 'ADD_EXPENSE', 
                expense: {
                    id: expect.any(String),
                    ...defaultExpense
                }
            });
            // return the promise we get back from calling .once()
            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toEqual(defaultExpense);
            done();
        })
        .catch(error => console.log(error));
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

