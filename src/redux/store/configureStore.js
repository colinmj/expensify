import { createStore, combineReducers, applyMiddleware } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer,
      auth: authReducer
    }),

    typeof composeEnhancers === 'function'
      ? composeEnhancers(applyMiddleware(thunk))
      : applyMiddleware(thunk)
  );
  return store;
};
