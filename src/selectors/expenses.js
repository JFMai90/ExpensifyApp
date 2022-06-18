export default (expenses, { text, sortBy }) => {
  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
