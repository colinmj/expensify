import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/modules/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>

    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchtToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtToProps)(Header);
