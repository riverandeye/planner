import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { UserProvider } from "./context/user";
import Planner from "./page/planner";

function App() {
  return (
    <Router>
      <UserProvider user={null}>
        <Switch>
          <Route path="*" component={Planner} />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
