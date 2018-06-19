import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

import {
  removeElExpensesMuchacho,
  editElExpenses
} from '../redux/modules/expenses';

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <div className="content-container">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(editElExpenses(props.expense.id, expense));
            props.history.push('/');
          }}
        />
      </div>

      <button
        onClick={() => {
          props.dispatch(removeElExpensesMuchacho({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
