import { addExpense, editExpense, removeExpense } from "../../actions/Expenses";

test("should setup remove expense object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

//Edit Expense
test("should setup edit expense object", () => {
  const action = editExpense("123abc", { note: "some note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "some note"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "test description",
    note: "test note",
    amount: 12300,
    createdAt: 1000
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

/*

  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
*/
