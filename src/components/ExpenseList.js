import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { connect } from 'react-redux';
import selectExpenses from '../redux/selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expense List </h1>

    {props.expenses.map(expense => {
      return <ExpenseListItem {...expense} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
