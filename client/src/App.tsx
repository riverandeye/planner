import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { UserProvider } from "./context/user";
import Main from "./page/main";

function App() {
  return (
    <Router>
      <UserProvider user={null}>
        <Switch>
          <Route path="*" component={Main} />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
