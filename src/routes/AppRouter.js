import React from 'react';
import Header from '../components/Header';
import EditExpensePage from '../components/Edit';
import AddExpensePage from '../components/Create';
import HelpPage from '../components/Help';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import NotFoundPage from '../components/NotFound';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;