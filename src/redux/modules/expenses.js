import uuid from 'uuid';
import db from '../../firebase/firebase';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SET_EXPENSES = 'SET_EXPENSES';

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return db
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: REMOVE_EXPENSE,
  id
});

export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  id,
  updates
});

//set expenses
export const setExpenses = expenses => ({
  type: SET_EXPENSES,
  expenses
});

export const startSetExpenses = () => {
  return dispatch => {
    return db
      .ref('expenses')
      .once('value')
      .then(snappy => {
        let expenses = [];
        snappy.forEach(lilSnap => {
          expenses.push({
            id: lilSnap.key,
            ...lilSnap.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};

export const removeElExpensesMuchacho = ({ id }) => {
  return dispatch => {
    return db
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

export const editElExpenses = (id, updates) => {
  return dispatch => {
    return db
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};
