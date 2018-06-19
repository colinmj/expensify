import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/modules/auth';

const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/dashboard">
          <h1>Expensify</h1>
        </Link>

        <button onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchtToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtToProps)(Header);
