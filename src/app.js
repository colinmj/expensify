import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routes/AppRouter';
import configureStore from './redux/store/configureStore';
import { startSetExpenses } from './redux/modules/expenses';
import { setTextFilter } from './redux/modules/filters';
import getVisibleExpenses from './redux/selectors/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
