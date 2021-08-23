import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        
      </BrowserRouter> */}
      <Router>
        <Switch>
          <Route path="/"  component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
