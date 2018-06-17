import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../redux/modules/expenses';

class AddExpensePage extends React.Component {
  onSubmit = expense => {
    console.log(expense);
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
   
    return (
      <div>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


