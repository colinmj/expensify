import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter, { history } from './routes/AppRouter';
import configureStore from './redux/store/configureStore';
import { startSetExpenses } from './redux/modules/expenses';
import { login, logout } from './redux/modules/auth';
import getVisibleExpenses from './redux/selectors/expenses';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
