const totalReducer = (total, value) => total + value;

export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce(totalReducer, 0);
};