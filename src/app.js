import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter';
import configureStore from './redux/store/configureStore';
import { addExpense } from './redux/modules/expenses';
import { setTextFilter } from './redux/modules/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
