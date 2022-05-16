import ExpensesSchema from "./Expenses.schema.js";
//CRUD

//@expenses should be an object
export const createExpense = (expense) => {
  return ExpensesSchema.create(expense);
};
//@filter must be an object that should at least contains the userID
export const getExpenses = (filter) => {
  return ExpensesSchema.find(filter);
};
//@filter must be an object that should at least contains the userID
export const deleteExpenses = (filter) => {
  return ExpensesSchema.findOneAndDelete(filter);
};
