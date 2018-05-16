import React from 'react';
import { connect } from 'react-redux';
import totalExpenses from '../redux/selectors/expenses-total';
import numeral from 'numeral';
import selectExpenses from '../redux/selectors/expenses';

const ExpenseSummary = ({ expenses }) => {
  return (
    <div>
      <p>
        Showing {expenses.length}{' '}
        {expenses.length === 1 ? <span>expense</span> : <span>expenses</span>}{' '}
        with a total of{' '}
        {numeral(totalExpenses(expenses) / 100).format('$0,0.00')}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseSummary);
