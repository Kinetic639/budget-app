import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AboutPage from "./components/AboutPage";
import AddExpensePage from "./components/AddExpensePage";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={ExpenseDashboardPage} exact></Route>
        <Route path="/create" component={AddExpensePage}></Route>
      </div>
    </Router>
  );
}

export default App;
