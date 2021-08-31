import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loan from "./pages/Loan";
import DashBoard from "./pages/Dashboard";
import Repayment from "./pages/Repayment";
import PasswordChange from "./pages/ChangePassword";
import Profile from "./pages/Profile";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
     <Router>
      <Switch>
        <Route exact path="/">
          <div className="App"> 
            <HomePage />
          </div>
        </Route>
        <Route exact path="/dashboard/apply">
          <Loan />
        </Route>
        <Route exact path="/dashboard/repay">
          <Repayment />
        </Route>
        <Route exact path="/dashboard/profile">
          <Profile />
        </Route>
        <Route exact path="/dashboard/change-password">
          <PasswordChange />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
