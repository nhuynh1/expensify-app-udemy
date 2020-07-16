import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expenses', () => {
    const result = selectExpensesTotal([expenses[2]]);
    expect(result).toBe(expenses[2].amount);
});

test('should correctly add up multiple expenses', () => {
    const total = 114195;
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(total);
});