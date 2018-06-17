import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../redux/modules/auth';

const Login = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1>Expensify App</h1>
        <p>Expenses, motherfucker</p>
        <button onClick={startLogin}> Login </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
