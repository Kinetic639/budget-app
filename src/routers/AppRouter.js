import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact></Route>
      <Route path="/create" component={AddExpensePage}></Route>
      <Route path="/edit/:id" component={EditExpensePage}></Route>
      <Route path="/help" component={HelpPage}></Route>
      <Route component={NotFoundPage}></Route>
    </Switch>
  </Router>
);

export default AppRouter;
